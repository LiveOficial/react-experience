import { Image, Pressable, ScrollView, Text, View, Share as NativeShare, Modal } from "react-native"
import { body, primary, secondary, text } from '@/constants/Colors'
import { Share, Chevron, CalendarCheck, Flag, Label, Folks, Times } from "@/components/Icons";
import { router, useLocalSearchParams } from "expo-router";
import { Accordion, AccordionItem } from "@/components/Accordion";
import { Gradient, GradientRun, Hr } from "@/components/LiveExperience";
import api from "@/hooks/api";
import { useEffect, useState } from "react";

export default function Event() {
    const { slug } = useLocalSearchParams()
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)
    const [visibleRegulation, setVisibleRegulation] = useState(false)
    const [selectedModality, setSelectedModality] = useState(null)

    useEffect(() => {
        fetchEvent()
    }, [])

    const fetchEvent = () => {
        setLoading(true)
        api.get(`event/${slug}`)
            .then(({ data }) => {
                setEvent(data.event)
                setSelectedModality(data.event.maps[0].name)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <>
        {
            loading ? <></> :
            <>
                <ScrollView style={{ backgroundColor: body, paddingTop: 60 }} contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
                    <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                            <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                                <Chevron color={primary} size={27} rotate={270} />
                            </Pressable>
                            <View>
                                <Text style={{ textAlign: 'center', fontSize: 20 }}>Evento</Text>
                            </View>
                            <Pressable style={{ padding: 10 }} onPress={() => NativeShare.share({ title: event.name, url: 'https://reactnative.dev' }) }>
                                <Share color={primary} size={24} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, marginTop: 50 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 33, fontWeight: 500 }}>{event.day}</Text>
                                <Text style={{ fontSize: 18, fontWeight: 500 }}>{event.month}</Text>
                            </View>
                            <Title>{event.name}</Title>
                        </View>

                        <Detail.Wrap>
                            <Detail.Box icon={<CalendarCheck size={28} />}>
                                <Detail.Title>Data</Detail.Title>
                                <Detail.Value>{event.long_date}</Detail.Value>
                            </Detail.Box>
                            <Detail.Box icon={<Flag size={28} />}>
                                <Detail.Title>Local da largada</Detail.Title>
                                <Detail.Value>{event.start_location}</Detail.Value>
                                <Pressable onPress={() => {  }}>
                                    <Text style={{ color: primary, fontWeight: 500, marginTop: 10 }}>Ver detalhes</Text>
                                </Pressable>
                            </Detail.Box>
                            <Detail.Box icon={<Label size={28} />}>
                                <Detail.Title>Tipo de evento</Detail.Title>
                                <Detail.Value>{event.types.join(', ')}</Detail.Value>
                            </Detail.Box>
                            <Detail.Box icon={<Folks size={28} />}>
                                <Detail.Title>Público</Detail.Title>
                                <Detail.Value>{event.folks}</Detail.Value>
                            </Detail.Box>
                        </Detail.Wrap>

                        <Accordion>
                            <AccordionItem title="Kits">
                                <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 20 }} showsHorizontalScrollIndicator={false}>
                                    {event.kits.map(kit => <Kit kit={kit} />)}
                                </ScrollView>
                            </AccordionItem>
                            <AccordionItem title="Percursos">
                                <Text style={{ fontSize: 14, textAlign: 'center', padding: 10 }}>{selectedModality}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    {event.maps.map(map => (
                                        <Pressable style={{ backgroundColor: secondary, flexGrow: 1 }} onPress={() => setSelectedModality(map.name)}>
                                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 10 }}>
                                                {map.name}
                                            </Text>
                                            {selectedModality === map.name && <GradientRun />}
                                        </Pressable>
                                    ))}
                                </View>
                            </AccordionItem>
                            <AccordionItem title="Inscrições">
                                <Text>Descricão</Text>
                            </AccordionItem>
                        </Accordion>
                        <Hr />
                        <Text style={{ marginTop: 30 }}>{event.description}</Text>
                        <Pressable style={{ padding: 20 }} onPress={() => setVisibleRegulation(true)}>
                            <Text style={{ color: primary, fontWeight: 600 }}>Ver regulamento</Text>
                        </Pressable>
                    </View>
                </ScrollView>
                <FloatingBox slug={slug} name={event.name} date={event.short_date} />
                <Regulation content={event.regulation} visible={visibleRegulation} setVisible={setVisibleRegulation} />
            </>
        }
        </>
    )
}

function Title({ children }) {
    return (
        <Text style={{ fontSize: 35, fontWeight: 500, flexShrink: 1 }}>
            {children}
        </Text>
    )
}

function FloatingBox({ slug, name, date }) {
    return (
        <View onPress={() => router.back()} style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: secondary, paddingTop: 20, paddingBottom: 30, paddingHorizontal: 20 }}>
            <View style={{ flexShrink: 1 }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>{name}</Text>
                <Text style={{ fontWeight: 500 }}>{date}</Text>
            </View>
            <View>
                <Pressable style={{ backgroundColor: primary, padding: 15 }} onPress={() => router.push(`/eventos/${slug}/inscrever`)}>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 500 }}>Inscrever-se</Text>
                </Pressable>
            </View>
        </View>
    )
}

function Kit({ kit }) {
    return (
        <View style={{ position: 'relative' }}>
            <Gradient>
                <Image style={{ width: 250, height: 250, borderRadius: 10 }} source={{ uri: kit.image }} />
            </Gradient>
            <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: secondary }}>
                <Text style={{ fontWeight: 500, color: text, padding: 10 }}>{kit.name}</Text>
                <GradientRun />
            </View>
        </View>
    )
}

const Detail = {
    Box: ({ children, icon }) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                <View style={{ width: 30 }}>
                    {icon}
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {children}
                </View>
            </View>
        )
    },
    Wrap: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 35 }}>{children}</View>,
    Title: ({ children }) => <Text style={{ fontSize: 16, fontWeight: 500 }}>{children}</Text>,
    Value: ({ children }) => <Text style={{ fontSize: 14 }}>{children}</Text>
}

function Regulation({ content, visible, setVisible }) {
    return (
        <Modal animationType='slide' visible={visible}>
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 30 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable onPress={() => setVisible(false)} style={{ paddingVertical: 15, paddingLeft: 20 }}>
                                <Times color={primary} size={25} />
                            </Pressable>
                        </View>
                        <Text>{content}</Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
