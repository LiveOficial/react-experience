import { Text, View, ScrollView, Pressable } from "react-native"
import { Chevron, Cart } from "@/components/Icons"
import { body, primary } from "@/constants/Colors"
import { SafeAreaView, ContentLoads } from "@/components/LiveExperience"
import { useEffect, useState } from "react"
import { router, useLocalSearchParams } from "expo-router"
import SimpleRegistration from "@/components/Events/Simple/Registration"
import LiveRunRegistration from "@/components/Events/LiveRun/Registration"
import ShowRoomRegistration from "@/components/Events/ShowRoom/Registration"
import api from "@/hooks/api"

export default function Inscrever() {
    const { slug } = useLocalSearchParams()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        setLoading(true)
        api.get(`event/${slug}/registration`)
            .then(({ data: { event } }) => setEvent(event))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const component = (event) => {
        const components = {
            1: (event) => <SimpleRegistration slug={slug} event={event} />,
            2: (event) => <LiveRunRegistration slug={slug} event={event} />,
            3: (event) => <ShowRoomRegistration slug={slug} event={event} />
        }

        return components[event.type](event)
    }

    return (
        <SafeAreaView>
            <ContentLoads loading={loading}>
                <ScrollView style={{ paddingHorizontal: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10, gap: 20 }}>
                        <Pressable onPress={() => router.back()}>
                            <Chevron rotate={270} size={25} color={primary} />
                        </Pressable>
                        <Text style={{ fontWeight: 500, fontSize: 23, flexShrink: 1, textAlign: 'center' }}>{event?.name}</Text>
                        <Pressable>
                            <Cart />
                        </Pressable>
                    </View>
                    {event && component(event)}
                </ScrollView>
            </ContentLoads>
        </SafeAreaView>
    )
}
