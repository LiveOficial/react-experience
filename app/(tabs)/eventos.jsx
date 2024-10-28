import { Image as ReactImage, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft, Mark } from "@/components/Icons";
import { primary, secondary, body, borderColor, text, greenText } from "@/constants/Colors";
import { router } from "expo-router";
import { ResultsTitle } from "@/components/MainPages";
import { useEffect, useState } from "react";
import Filter, { CheckBox, FilterBadge, BadgeContainer, FilterButton, SortButton, SearchInput } from '@/components/Filter'
import Select from '@/components/Select'
import api from "@/hooks/api";

export default function Events() {
    const [data, setData] = useState()
    const [type, setType] = useState()
    const [showFilter, setShowFilter] = useState(false)
    const [loading, setLoading] = useState(false)
    const [states, setStates] = useState(null)
    const [cities, setCities] = useState(null)
    const [types, setTypes] = useState(null)
    const [state, setState] = useState(null)

    useEffect(() => {
        fetchData()
        fetchFilters()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get('event')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const fetchFilters = () => {
        api.get('event/filters')
            .then(({ data: { filters: { types, states, cities } } }) => {
                setTypes(types)
                setStates(states)
                setCities(cities)
            })
            .catch(err => console.log(err))
    }

    const applyFilters = () => {
        api.get('event')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                            <ChevronLeft color={primary} size={25} />
                        </Pressable>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Eventos</Text>
                        <View />
                    </View>
                    <View style={{ marginVertical: 25 }}>
                        <SearchInput placeholder={'Eventos ou localização'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FilterButton onPress={() => setShowFilter(true)} numberFilters={2} />
                        <SortButton />
                    </View>
                    {/* <BadgeContainer>
                        <FilterBadge>
                            São Paulo
                        </FilterBadge>
                        <FilterBadge>
                            Evento em loja
                        </FilterBadge>
                    </BadgeContainer> */}
                </View>
                <View style={{ backgroundColor: body, paddingHorizontal: 20, paddingBottom: 70 }}>
                    <ResultsTitle name="Eventos" resultsNumber={data && data.events.length} />
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                        {data && data.events.map((event, index) => {
                            return (
                                <Pressable onPress={() => router.push(`/eventos/${event.slug}`)} style={{ width: '100%' }} key={index}>
                                    <Image uri={event.image} />
                                    <View style={{ marginTop: 15 }}>
                                        {event.has_kits && <Text style={{ fontWeight: 500, color: greenText }}>Kits disponíveis</Text>}
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                            <EventTitle name={event.name} city={event.city} />
                                            <Date day={event.day} month={event.month} />
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', columnGap: 10, marginVertical: 10 }}>
                                            {event.types.map((type, index) => <Type key={index} name={type} icon={<Mark />} />)}
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <EventFilter
                visible={showFilter}
                setVisible={setShowFilter}
                onApplyFilters={applyFilters}
                states={states}
                types={types}
                state={state}
                setState={setState}
            />
        </>
    )
}

function Type({ name, icon }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, padding: 10, borderRadius: 20, borderColor: borderColor }}>
            <Text style={{ color: text }}>{name}</Text>
        </View>
    )
}

function Title({ children }) {
    return (
        <Text style={{ fontWeight: 500, fontSize: 20 }}>
            {children}
        </Text>
    )
}

function Image ({ uri }) {
    return (
        <ReactImage style={{ width: '100%', height: 250 }} source={{ uri: uri }} />
    )
}

function EventTitle({ name, city }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', flexShrink: 1, gap: 3 }}>
            <Title>{name}</Title>
            <Text>{city}</Text>
        </View>
    )
}

function Date({ day, month }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 500 }}>{day}</Text>
            <Text style={{ fontWeight: 500 }}>{month}</Text>
        </View>
    )
}

function EventFilter({ visible, setVisible, onApplyFilters, types, states, state, setState }) {
    const applyFilters = () => {
        onApplyFilters(data)
    }

    return (
        <Filter visible={visible} setVisible={setVisible} onPressApplyFilters={applyFilters}>
            <View style={{ marginBottom: 20, marginTop: 40 }}>
                <Select.Label>
                    Estado
                </Select.Label>
                <Select.Root placeholder='Selecione o estado' value={state}>
                    <Select.Option onPress={() => setState('Usar minha localização')} icon={<Mark color={primary} />}>
                        Usar minha localização
                    </Select.Option>
                    {states && states.map((state, index) => {
                        <Select.Option key={index} onPress={() => setState(state)}>
                            {state}
                        </Select.Option>
                    })}
                </Select.Root>
            </View>
            <View style={{ backgroundColor: 'white' }}>
                <Text>Tipo de evento</Text>
                <CheckBox.Grid>
                    {types && types.map((name, index) => {
                        return (
                            <CheckBox.CheckBox key={index}>
                                <CheckBox.Title>{name}</CheckBox.Title>
                            </CheckBox.CheckBox>
                        )
                    })}
                </CheckBox.Grid>
                <Text style={{ marginBottom: 20, marginTop: 30 }}>Disponibilidade</Text>
                <CheckBox.CheckBox>
                    <CheckBox.Title>
                        Mostrar eventos encerrados
                    </CheckBox.Title>
                </CheckBox.CheckBox>
            </View>
        </Filter>
    )
}
