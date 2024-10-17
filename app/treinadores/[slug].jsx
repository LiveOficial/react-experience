import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { body, secondary, primary, borderColor } from "@/constants/Colors"
import { Gradient, Hr } from "@/components/LiveExperience"
import { ChevronLeft } from "@/components/Icons"
import { Button } from "@/components/LiveExperience"
import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import api from "@/hooks/api"

export default function Treinadores() {
    const { slug } = useLocalSearchParams()
    const [trainer, setTrainer] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get(`trainers/${slug}`)
            .then(({ data }) => setTrainer(data.trainers))
            .catch(() => {})
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 25 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Button onPress={() => router.back()}>
                        <ChevronLeft color={primary} size={25} />
                    </Button>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Professores</Text>
                    <View />
                </View>
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', marginHorizontal: 20, height: 200, width: 200, marginVertical: 40, marginHorizontal: 'auto' }}>
                    <Gradient>
                        <Image style={{ height: '100%', width: '100%' }} source={{ uri: trainer?.image }} />
                    </Gradient>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 500, fontSize: 25 }}>{trainer?.name}</Text>
                    <Text style={{ color: primary, fontWeight: 500, fontSize: 16 }}>+ Seguir</Text>
                </View>
                <Text style={{ fontWeight: 500, marginTop: 10, marginBottom: 20 }}>13 vídeos</Text>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <Text>Cau Saad é personal trainer, educadora física pós-graduada em Metodologia do Treinamento Específico e especialista em Nutrição Esportiva. Criou o método Cau Saad que inclui técnicas de treinamento funcional, musculação e mobilidades articulares. </Text>
                    <Text>Fundadora do Instituto Cau Saad, a trainer também é empresária, digital influencer, palestrante do TEDxSaoPaulo e se autodenomina uma eterna estudante da Saúde.</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Hr />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable style={{ padding: 10, borderRadius: 100, borderColor: borderColor, backgroundColor: body, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text>Playlists (4)</Text>
                    </Pressable>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>WorCAUt</Text>
                    <Pressable>
                        <Text style={{ color: primary, fontWeight: 500 }}>
                            Ver tudo
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}
