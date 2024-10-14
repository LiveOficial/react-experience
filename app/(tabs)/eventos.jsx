import { Image as ReactImage, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft, Mark, Times } from "@/components/Icons";
import { primary, secondary, body } from "@/constants/Colors";
import { Button, HighlightedButton, CheckBox as LiveExpCheckBox } from "@/components/LiveExperience";
import { router } from "expo-router";
import { ResultsTitle, SearchInput, FilterButton, SortButton } from "@/components/MainPages";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter, { CheckBox } from '@/components/Filter'
import Select from '@/components/Select'

export default function Events() {
    const [data, setData] = useState()
    const [type, setType] = useState()
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://api.appliveexperience.com.br/app/event')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
    }

    const applyFilters = () => {
        axios.get('https://api.appliveexperience.com.br/app/event')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
    } 

    return (
        <>
            <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <Button onPress={() => router.back()}>
                            <ChevronLeft />
                        </Button>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>
                                Eventos
                            </Text>
                        </View>
                        <View />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                        <SearchInput placeholder={'Eventos ou localização'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FilterButton onPress={() => setShowFilter(true)} />
                        <SortButton />
                    </View>
                </View>
                <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                    <ResultsTitle name="Eventos" resultsNumber={data && data.events.length} />
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                        {data && data.events.map(event => <Card event={event} onPress={() => { router.push('/eventos/1')   }} />)}
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

function Card({ event, onPress }) {
    return (
        <Pressable onPress={onPress} style={{ width: '100%' }}>
            <Image uri={event.image} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', columnGap: 10, marginTop: 15 }}>
                <View style={{ display: 'flex', flexDirection: 'column', flexShrink: 1 }}>
                    <Title>{event.name}</Title>
                    <Text>Rio de Janeiro</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 22, fontWeight: 500 }}>30</Text>
                    <Text style={{ fontWeight: 500 }}>SET</Text>
                </View>
            </View>
        </Pressable>
    )
}

const Title = ({ children }) => <Text style={{ fontWeight: 500, fontSize: 20 }}>{children}</Text>
const Image = ({ uri }) => <ReactImage style={{ width: '100%', height: 220 }} source={{ uri: uri }} />

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
