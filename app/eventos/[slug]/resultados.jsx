import { text, secondary, primary, greenText, body } from '@/constants/Colors'
import { Pressable, Text, View, VirtualizedList } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { Gradient, GradientRun, Hr } from "@/components/LiveExperience";
import { router, useLocalSearchParams } from 'expo-router';
import { ResultsTitle } from '@/components/MainPages';
import api from '@/hooks/api'
import { useEffect, useMemo, useState } from 'react';
import BaseFilter, { FilterBadge, FilterButton, SearchInput } from '@/components/Filter'
import Select from '@/components/Select'

export default function Resultados() {
    const [data, setData] = useState(null)
    const [category, setCategory] = useState(null)
    const [modality, setModality] = useState(null)
    const [loading, setLoading] = useState(true)
    const [openModalFilter, setOpenModalFilter] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const countFilters = useMemo(() => {
        let counter = 0

        if (category) {
            counter++
        }

        if (modality) {
            counter++
        }

        if (counter > 0) {
            return `${counter}`
        } else {
            return null
        }
    }, [category, modality])

    const fetchData = (filters = null) => {
        setLoading(true)
        api.get(`event/live-run-xp-curitiba-2024/results`, { params: filters })
            .then(({ data: { results } }) => {
                setModality(results.modalities[0])
                setData(results)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const onPressApplyFilters = () => {
        fetchData({ categoria: category, modalidade: modality })
        setOpenModalFilter(false)
    }

    const onPressClearFilters = () => {
        fetchData()
        setCategory(null)
        setModality(null)
        setOpenModalFilter(false)
    }

    return (
        <>
            {
                data &&
                <VirtualizedList
                    style={{ backgroundColor: secondary, paddingTop: 60 }}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListHeaderComponent={<Header setVisible={setOpenModalFilter} resultsNumber={data.athletes.length} filterCount={countFilters} />}
                    initialNumToRender={5}
                    renderItem={({ item, index }) => <Card key={index} athlete={item} showHr={index < data.athletes.length - 1} />}
                    keyExtractor={item => item.rank}
                    getItemCount={() => data.athletes.length}
                    getItem={(_data, index) => ({ ...data.athletes[index] })}
                />
            }
            <Filter
                modality={modality}
                setModality={setModality}
                modalities={data?.modalities}
                category={category}
                setCategory={setCategory}
                categories={data?.categories}
                visible={openModalFilter}
                setVisible={setOpenModalFilter}
                onPressApplyFilters={() => onPressApplyFilters()}
                onPressClearFilters={() => onPressClearFilters()}
            />
        </>
    )
}

function Card({ athlete, showHr }) {
    return (
        <View style={{ padding: 20, backgroundColor: body }}>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                    <View style={{ flexShrink: 1 }}>
                        <Text style={{ color: greenText, fontWeight: 500 }}>#{athlete.chest_number}</Text>
                        <Text style={{ fontSize: 20 }}>{athlete.name}</Text>
                        <Text style={{ color: text }}>{athlete.age} anos</Text>
                    </View>
                    <View>
                        <Gradient>
                            <View style={{ display: 'flex', height: 70, width: 70, textAlign: 'center' }}>
                                <Text style={{ color: text, fontSize: 25, margin: 'auto' }}>{athlete.rank}º</Text>
                            </View>
                            <GradientRun height={2} />
                        </Gradient>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 20 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontWeight: 500 }}>Faixa</Text>
                        <Text>{athlete.category}</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontWeight: 500 }}>Class. da faixa</Text>
                        <Text>{athlete.rank_category}</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 20 }}>
                    <View style={{ width: '30%' }}>
                        <Text>Tempo</Text>
                        <Text>{athlete.liquid_time}</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text>Tempo Bruto</Text>
                        <Text>{athlete.raw_time}</Text>
                    </View>
                </View>
            </View>
            {showHr && <Hr />}
        </View>
    )
}

function Filter({ category, setCategory, categories, modality, setModality, modalities, visible, setVisible, onPressApplyFilters, onPressClearFilters }) {
    return (
        <BaseFilter visible={visible} setVisible={setVisible} onPressApplyFilters={() => onPressApplyFilters()} onPressClearFilters={() => onPressClearFilters()}>
            <Text>Categoria</Text>
            <Select.Root placeholder='Selecione a categoria' value={category}>
                {categories && categories.map(category => {
                    return (
                        <Select.Option onPress={() => setCategory(category)}>
                            <Text>{category}</Text>
                        </Select.Option>
                    )
                })}
            </Select.Root>
            <Text>Modalidade</Text>
            <Select.Root placeholder='Selecione a categoria' value={modality}>
                {modalities && modalities.map(modality => {
                    return (
                        <Select.Option onPress={() => setModality(modality)}>
                            <Text>{modality}</Text>
                        </Select.Option>
                    )
                })}
            </Select.Root>
        </BaseFilter>
    )
}

function Header({ setVisible, filterCount, resultsNumber }) {
    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft color={primary} size={25} />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Resultados</Text>
                    <View style={{ padding: 10 }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                    <SearchInput placeholder="Nome ou número de peito" />
                </View>
                <View>
                    <FilterButton onPress={() => setVisible(true)} numberFilters={filterCount} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, backgroundColor: body }}>
                <ResultsTitle name="Resultados" resultsNumber={resultsNumber} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    
                </View>
            </View>
        </>
    )
}