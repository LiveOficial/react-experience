import { Pressable, ScrollView, Text, View, Share as NativeShare, Modal } from "react-native"
import { body, primary, secondary } from '@/constants/Colors'
import { Share, ChevronLeft, Times } from "@/components/Icons"
import { router, useLocalSearchParams } from "expo-router"
import { SafeAreaView, ContentLoads } from "@/components/LiveExperience"
import { useEffect, useState } from "react"
import RenderHtml from 'react-native-render-html';
import DetailsSimple from "@/components/Events/Simple/Details"
import DetailsLiveRun from "@/components/Events/LiveRun/Details"
import DetailsShowRoom from "@/components/Events/ShowRoom/Details"
import api from "@/hooks/api"

export default function Index() {
    const { slug } = useLocalSearchParams()
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)
    const [visibleRegulation, setVisibleRegulation] = useState(false)

    useEffect(() => fetchEvent(), [])

    const fetchEvent = () => {
        setLoading(true)
        api.get(`event/${slug}`)
            .then(({ data: { event } }) => setEvent(event))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const component = (event) => {
        const components = {
            1: (event) => <DetailsSimple event={event} />,
            2: (event) => <DetailsLiveRun event={event} />,
            3: (event) => <DetailsShowRoom event={event} />,
        }

        return components[event.type](event)
    }

    return (
        <>
            <SafeAreaView>
                <ContentLoads loading={loading}>
                    <ScrollView style={{ backgroundColor: body }} showsVerticalScrollIndicator={false}>
                        <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                                    <ChevronLeft color={primary} size={27} rotate={270} />
                                </Pressable>
                                <Text style={{ textAlign: 'center', fontSize: 20 }}>Evento</Text>
                                <Pressable style={{ padding: 10 }} onPress={() => NativeShare.share({ title: event?.name, url: 'https://reactnative.dev' }) }>
                                    <Share color={primary} size={24} />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, marginTop: 50 }}>
                            {event && component(event)}

                            <Pressable style={{ padding: 20 }} onPress={() => setVisibleRegulation(true)}>
                                <Text style={{ color: primary, fontWeight: 600 }}>Ver regulamento</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </ContentLoads>
            </SafeAreaView>
            <FloatingBox slug={slug} date={event?.short_date} name={event?.name} button={event?.button} />
            <Regulation content={event?.regulation} visible={visibleRegulation} setVisible={setVisibleRegulation} />
        </>
    )
}

function FloatingBox({ slug, date, name, button }) {
    return (
        <View onPress={() => router.back()} style={{ position: 'absolute', width: '100%', left: 0, bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: secondary, paddingTop: 20, paddingBottom: 30, paddingHorizontal: 20 }}>
            <View style={{ flexShrink: 1 }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>{name}</Text>
                <Text style={{ fontWeight: 500 }}>{date}</Text>
            </View>
            <View>
                <Pressable style={{ backgroundColor: primary, padding: 15 }} onPress={() => router.push(`/eventos/${slug}/inscrever`)} disabled={button?.disabled}>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 500 }}>{button?.label}</Text>
                </Pressable>
            </View>
        </View>
    )
}

function Regulation({ content, visible, setVisible }) {
    return (
        <Modal animationType='slide' visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 30 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable onPress={() => setVisible(false)} style={{ paddingVertical: 15, paddingLeft: 20 }}>
                                <Times color={primary} size={25} />
                            </Pressable>
                        </View>
                        <RenderHtml source={{ html: content }} />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
