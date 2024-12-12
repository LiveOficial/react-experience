import { Text, View, ScrollView, Pressable } from "react-native"
import { Chevron, Cart } from "@/components/Icons"
import { primary, secondary } from "@/constants/Colors"
import { SafeAreaView, ContentLoads, HighlightedButton } from "@/components/LiveExperience"
import { useEffect, useState } from "react"
import { router, useLocalSearchParams } from "expo-router"
import Simple from "@/components/Events/Simple/Registration"
import LiveRun from "@/components/Events/LiveRun/Registration"
import ShowRoom from "@/components/Events/ShowRoom/Registration"
import api from "@/hooks/api"

export default function Inscrever() {
    const { slug } = useLocalSearchParams()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [floatingBox, setFloatingBox] = useState(null)
  
    useEffect(() => fetchData(), [])

    const fetchData = () => {
        setLoading(true)
        api.get(`event/${slug}/registration`)
            .then(({ data: { event } }) => setEvent(event))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const component = (props) => {
        const components = {
            1: (props) => <Simple { ...props } />,
            2: (props) => <LiveRun { ...props } />,
            3: (props) => <ShowRoom { ...props } />
        }

        return components[props.event.type](props)
    }

    return (
        <>
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
                        {event && component({ slug, event, setFloatingBox })}
                    </ScrollView>
                </ContentLoads>
            </SafeAreaView>
            {floatingBox && <View style={{ position: 'absolute', width: '100%', left: 0, right: 0, bottom: 0, backgroundColor: secondary, display: 'flex', flexDirection: 'column', padding: 20, paddingBottom: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 500, fontSize: 20 }}>{floatingBox.title}</Text>
                    <Text style={{ fontWeight: 500 }}>{floatingBox.value}</Text>
                </View>
                <Text style={{ marginBottom: 20, fontWeight: 500 }}>Tamanho babylook</Text>
                <HighlightedButton onPress={() => floatingBox.button.onPress()}>
                    {floatingBox.button.label}
                </HighlightedButton>
            </View>}
        </>
    )
}
