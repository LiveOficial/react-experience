import { Pressable, ScrollView, Text, View } from "react-native"
import { Mark, ChevronLeft } from "@/components/Icons"
import { Hr } from "@/components/LiveExperience"
import { body, primary, text } from "@/constants/Colors"
import { router } from "expo-router"
import { useEffect, useState } from "react"

export default function Calendario() {
    const [data, setData] = useState(null)
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

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 50 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Calendário</Text>
                <View />
            </View>

            <Text>Seu evento</Text>
            <Text style={{ color: text, fontWeight: 500 }}>#78654</Text>
            <Text>LIVE! RUN XP São José do Vale do Rio Preto</Text>
            <Text>Data do Evento</Text>
            <Text>24/11/2024</Text>
            <Text>Local da largada</Text>
            <Text>Praça do Lido s/n - BAirro dos Jardins - RJ</Text>
            <View style={{ marginBottom: 20, marginTop: 40 }}>
                <Hr />
            </View>
            <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 300 }}>Retire seu kit</Text>
            <Text style={{ fontWeight: 500, marginBottom: 5 }}>Local de retirada</Text>
            <Text>LIVE! São José do Vale do Rio Preto - Shopping RioMar</Text>
            <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, padding: 10, marginTop: 10 }} onPress={() => {}}>
                <Mark color={primary} />
                <Text style={{ color: primary, fontWeight: 500 }}>Ver local no mapa</Text>
            </Pressable>
        </ScrollView>
    )
}