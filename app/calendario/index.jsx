import { Pressable, ScrollView, Text, View } from "react-native"
import { body, primary } from "@/constants/Colors"
import { ChevronLeft, Flag } from "@/components/Icons"
import { Hr } from "@/components/LiveExperience"
import { router } from "expo-router"
import { useAuth } from '@/context/auth'
import { Component, useEffect, useState } from "react"
import api from "@/hooks/api"

export default function Calendar() {
    const { token } = useAuth()
    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState(null)

    if (token === null) {
        router.replace('/entrar')
    }

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        setLoading(true)
        api.get('calendar')
            .then(({ data: { events } }) => setEvents(events))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const onSeeDetails = (slug) => {
        router.push(`/calendario/${slug}`)
    }

    const component = (type, event) => {
        const components = {
            1: () => <Simple event={event} />,
            2: () => <LiveRun event={event} />,
            3: () => <ShowRoom event={event} />
        }

        return components[type]()
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 50 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Calendário</Text>
                <View style={{ padding: 10 }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ display: 'flex', flexDirection: 'column', rowGap: 30 }}>
                    {events && events.map((event, index) => {
                        return (
                            <View key={index}>
                                {component(event.type, event)}
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                                    <Pressable style={{ paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => onSeeDetails(event.slug)}>
                                        <Text style={{ color: primary, fontWeight: 600 }}>Ver detalhes</Text>
                                    </Pressable>
                                    <Pressable style={{ paddingVertical: 10, paddingHorizontal: 20 }} onPress={() => {}}>
                                        <Text style={{ color: primary, fontWeight: 600 }}>Marcar na agenda</Text>
                                    </Pressable>
                                </View>
                                <Hr />
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

function Simple({ event }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 26, fontWeight: 500 }}>{event.day}</Text>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>{event.month}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Text style={{ fontWeight: 500, flex: 1, fontSize: 20 }}>{event.name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>Corrida</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>{event.location}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>{event.schedule}</Text>
                </View>
            </View>
        </View>
    )
}

function LiveRun({ event }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 26, fontWeight: 500 }}>{event.day}</Text>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>{event.month}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Text style={{ fontWeight: 500, flex: 1, fontSize: 20 }}>{event.name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>Corrida</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>{event.location}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Flag />
                    <Text>{event.schedule}</Text>
                </View>
            </View>
        </View>
    )
}

function ShowRoom({  }) {
    return (
        <View>
            <Text>ShowRoom</Text>
        </View>
    )
}