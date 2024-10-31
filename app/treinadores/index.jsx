import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { secondary, primary, body, borderColor, text } from "@/constants/Colors"
import { ChevronLeft } from "@/components/Icons"
import { router } from "expo-router"
import { Gradient } from "@/components/LiveExperience"
import { ResultsTitle, CardSubTitle } from "@/components/MainPages"
import { useEffect, useState } from "react"
import { SearchInput } from "@/components/Filter"
import api from "@/hooks/api"

export default function Treinadores() {
    const [trainers, setTrainers] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get('trainers')
            .then(({ data: { trainers } }) => setTrainers(trainers))
            .catch(() => {})
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }} showsVerticalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft color={primary} size={25} />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Professores</Text>
                    <View />
                </View>
                {/* <View style={{ marginVertical: 25 }}>
                    <SearchInput placeholder={'Eventos ou localização'} />
                </View> */}
                {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => {}}>
                        <Text style={{ color: primary, fontWeight: 500 }}>Filtrar</Text>
                    </Pressable>
                    <Pressable onPress={() => {}}>
                        <Text style={{ color: primary, fontWeight: 500 }}>Ordenar</Text>
                    </Pressable>
                </View> */}
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20, paddingBottom: 100 }}>
                <ResultsTitle name="Professores" resultsNumber={trainers?.length} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                {
                    trainers && trainers.map((trainer, index) => {
                        return (
                            <Pressable key={index} onPress={() => router.push(`/treinadores/${trainer.slug}`)}>
                                <Gradient style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 5, paddingVertical: 10 }}>
                                    <TrainerPhoto uri={trainer?.photo} news={trainer?.news} />
                                    <View style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 15 }}>
                                        <CardSubTitle>{trainer?.video_numbers} {trainer.video_numbers === 1 ? 'vídeo' : 'vídeos'} </CardSubTitle>
                                        <Text style={{ fontWeight: 500, fontSize: 20 }}>{trainer?.name}</Text>
                                        <Text>{trainer?.category}</Text>
                                    </View>
                                </Gradient>
                            </Pressable>
                        ) 
                    })
                }
                </View>
            </View>
        </ScrollView>
    )
}

function TrainerPhoto({ uri, news }) {
    return (
        <View style={{ position: 'relative' }}>
            {news && <View style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, backgroundColor: 'transparent', borderWidth: 1, borderColor: borderColor, margin: 10, padding: 10, borderRadius: 20 }}>
                <Text style={{ color: text }}>Novidade</Text>
            </View>}
            <Image style={{ width: '100%', height: 250 }} source={{ uri: uri }} />
        </View>
    )
}