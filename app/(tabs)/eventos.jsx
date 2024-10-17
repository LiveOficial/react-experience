import { Image as ReactImage, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft, Mark } from "@/components/Icons";
import { primary, secondary, body, borderColor, text, greenText } from "@/constants/Colors";
import { router } from "expo-router";
import { ResultsTitle, SearchInput, FilterButton, SortButton } from "@/components/MainPages";
import { useEffect, useState } from "react";
import Filter, { CheckBox, FilterBadge, BadgeContainer } from '@/components/Filter'
import Select from '@/components/Select'
import api from "@/hooks/api";

export default function Events() {
    const [data, setData] = useState()
    const [type, setType] = useState()
    const [showFilter, setShowFilter] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get('event')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                        <SearchInput placeholder={'Eventos ou localização'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FilterButton onPress={() => setShowFilter(true)} numberFilters={2} />
                        <SortButton />
                    </View>
                    <BadgeContainer>
                        <FilterBadge>
                            São Paulo
                        </FilterBadge>
                        <FilterBadge>
                            Evento em loja
                        </FilterBadge>
                    </BadgeContainer>
                </View>
                <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
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
                                            {event.types.map(type => <Type name={type} icon={<Mark />} />)}
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

function EventFilter({ visible, setVisible, onApplyFilters }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ state: null })
    const [state, setState] = useState(null)

    const applyFilters = () => {
        onApplyFilters(data)
    }

    const clearFilters = () => {
        setData({ state: null })

        applyFilters()
    }

    const handleSetState = (state) => {
        setState(state)
    }

    return (
        <Filter visible={visible} setVisible={setVisible} onPressApplyFilters={applyFilters} loading={loading}>
            
            <View style={{ marginBottom: 20, marginTop: 40 }}>
                <Select.Label>
                    Estado
                </Select.Label>
                <Select.Root placeholder='Selecione o estado' value={state}>
                    <Select.Option onPress={() => handleSetState('Usar minha localização')} icon={<Mark color={primary} />}>Usar minha localização</Select.Option>
                    <Select.Option onPress={() => handleSetState('São Paulo')}>São Paulo</Select.Option>
                    <Select.Option onPress={() => handleSetState('Rio de Janeiro')}>Rio de Janeiro</Select.Option>
                    <Select.Option onPress={() => handleSetState('Belo Horizonte')}>Belo Horizonte</Select.Option>
                    <Select.Option onPress={() => handleSetState('Fortaleza')}>Fortaleza</Select.Option>
                </Select.Root>
            </View>

            <View style={{ backgroundColor: 'white' }}>
                <Text>Tipo de evento</Text>
                <CheckBox.Grid>
                    {['Corrida', 'Evento de loja', 'Treino', 'Yoga', 'Bike', 'Beach Tennis'].map((name) => {
                        return (
                            <CheckBox.CheckBox>
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
