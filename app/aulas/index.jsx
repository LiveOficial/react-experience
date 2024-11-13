import { Text, View, ScrollView, Image as ReactImage, Pressable, StyleSheet } from 'react-native'
import { ResultsTitle, CardSubTitle } from '@/components/MainPages';
import { ChevronLeft, Point } from '@/components/Icons';
import { text, secondary, body, primary } from '@/constants/Colors';
import { router } from 'expo-router';
import { FilterButton, SortButton, SearchInput } from '@/components/Filter';
import api from '@/hooks/api';
import { useEffect, useRef, useState } from 'react';

export default function Aulas() {
    const [classes, setClasses] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchData = () => {
        setLoading(true)
        api.get('classes')
            .then(({ data: { classes } }) => setClasses(classes))
            .catch(() => {})
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft color={primary} size={20} />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Aulas</Text>
                    <View style={{ padding: 10 }} />
                </View>
                <View style={{ marginVertical: 25 }}>
                    <SearchInput placeholder='Aulas, tipo de treino ou professores' />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FilterButton />
                    <SortButton />
                </View>
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20, paddingBottom: 100 }}>
                <ResultsTitle name='Aulas' resultsNumber={12} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {classes && classes.map((item, index) => {
                        return (
                            <Card style={{ display: 'flex', flexDirection: 'column', gap: 30 }} onPress={() => { router.push(`/aulas/${item.slug}`) }} key={index}>
                                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, marginVertical: 10 }}>
                                    <CardSubTitle>{item.trainer_name}</CardSubTitle>
                                    <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.name}</Text>
                                    <Categories type={item.type} dificult={item.dificult} />
                                </View>
                            </Card>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

function Card({ children, onPress }) {
    return (
        <Pressable onPress={onPress}>
            {children}
        </Pressable>
    )
}

function Image({ uri, duration }) {
    return (
        <View style={{ position: 'relative' }}>
            <ReactImage style={{ width: '100%', height: 200 }} source={{ uri: uri }} />
            {duration && <View style={{ position: 'absolute', top: 10, left: 10, padding: 10, paddingHorizontal: 13, borderRadius: 20, backgroundColor: '#EFEBE6CC' }}>
                <Text style={{ color: text }}>{duration}</Text>
            </View>}
        </View>
    )
}

function Categories({ type, dificult }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <Text>{type}</Text>
            <Point color={primary} />
            <Text>{dificult}</Text>
        </View>
    )
}

