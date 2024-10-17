import { Pressable, ScrollView, Text, View } from "react-native"
import { body, primary } from "@/constants/Colors"
import { ChevronLeft, Flag } from "@/components/Icons"
import { Hr } from "@/components/LiveExperience"
import { router } from "expo-router"
import { useAuth } from '@/context/auth'
import { useEffect, useState } from "react"
import api from "@/hooks/api"

export default function Calendar() {
    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState(null)

    const { token } = useAuth()

    if (token === null) {
        router.replace('/entrar')
    }

    useEffect(() => {
        fetchCalendar()
    }, [])

    const fetchCalendar = () => {
        setLoading(true)
        api.get('calendar')
            .then(({ data }) => setEvents(data.events))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const onSeeDetails = (slug) => {
        router.push(`/calendario/${slug}`)
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
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'column', rowGap: 30 }}>
                    {
                        events && events.map((event, index) => {
                            return (
                                <>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }} key={index}>
                                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 26, fontWeight: 500 }}>24</Text>
                                            <Text style={{ fontSize: 16, fontWeight: 500 }}>NOV</Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                            <Text style={{ fontWeight: 600, flex: 1, fontSize: 20 }}>{event.name}</Text>

                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <Flag />
                                                <Text>Corrida</Text>
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <Flag />
                                                <Text>Praça do Lido s/n - Bairro dos Ipês, 22020-030</Text>
                                            </View>

                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <Flag />
                                                <Text>06:00 às 11:00hrs</Text>
                                            </View>

                                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Pressable style={{ paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => onSeeDetails(event.slug)}>
                                                    <Text style={{ color: primary, fontWeight: 600 }}>Ver detalhes</Text>
                                                </Pressable>
                                                <Pressable style={{ paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => {}}>
                                                    <Text style={{ color: primary, fontWeight: 600 }}>Marcar na agenda</Text>
                                                </Pressable>
                                            </View>

                                        </View>
                                    </View>
                                    <Hr />
                                </>
                            )
                        })
                    }
                </View>


            </View>
        </ScrollView>
    )
}
