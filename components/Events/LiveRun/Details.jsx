import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { primary, secondary, text } from '@/constants/Colors'
import { CalendarCheck, Flag, Label, Folks } from "@/components/Icons"
import { Gradient, GradientRun } from '@/components/LiveExperience'
import RenderHtml from 'react-native-render-html'
import Accordion from '@/components/Accordion'
import { useState } from 'react'
import { MainTitle, Detail } from '../Components'

export default function Details({ event }) {
    const [selectedModality, setSelectedModality] = useState(null)

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 33, fontWeight: 500 }}>{event?.day}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>{event?.month}</Text>
                </View>
                <MainTitle>{event?.name}</MainTitle>
            </View>
            <Detail.Container>
                <Detail.Box icon={<CalendarCheck size={28} />}>
                    <Detail.Title>Data</Detail.Title>
                    <Detail.Value>{event?.long_date}</Detail.Value>
                </Detail.Box>
                <Detail.Box icon={<Flag size={28} />}>
                    <Detail.Title>Local da largada</Detail.Title>
                    <Detail.Value>{event?.start_location}</Detail.Value>
                    <Pressable onPress={() => {  }}>
                        <Text style={{ color: primary, fontWeight: 500, marginTop: 10 }}>Ver detalhes</Text>
                    </Pressable>
                </Detail.Box>
                <Detail.Box icon={<Label size={28} />}>
                    <Detail.Title>Tipo de evento</Detail.Title>
                    <Detail.Value>{event?.types.join(', ')}</Detail.Value>
                </Detail.Box>
                <Detail.Box icon={<Folks size={28} />}>
                    <Detail.Title>Público</Detail.Title>
                    <Detail.Value>{event?.folks}</Detail.Value>
                </Detail.Box>
            </Detail.Container>
            <Accordion.Container>
                <Accordion.Item title="Kits">
                    <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 20 }} showsHorizontalScrollIndicator={false}>
                        {event && event?.kits.map((kit, index) => {
                            return (
                                <View style={{ position: 'relative' }} key={index}>
                                    <Gradient>
                                        <Image style={{ width: 250, height: 250, borderRadius: 10 }} source={{ uri: kit.image }} />
                                    </Gradient>
                                    <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: secondary }}>
                                        <Text style={{ fontWeight: 500, color: text, padding: 10 }}>{kit.name}</Text>
                                        <GradientRun />
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </Accordion.Item>
                <Accordion.Item title="Percursos">
                    <Text style={{ fontSize: 14, textAlign: 'center', padding: 10 }}>{selectedModality}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        {event && event?.maps.map((map, index) => (
                            <Pressable style={{ backgroundColor: secondary, flexGrow: 1 }} onPress={() => setSelectedModality(map.name)} key={index}>
                                <Text style={{ fontSize: 14, textAlign: 'center', padding: 10 }}>
                                    {map.name}
                                </Text>
                                {selectedModality === map.name && <GradientRun />}
                            </Pressable>
                        ))}
                    </View>
                </Accordion.Item>
                <Accordion.Item title="Inscrições">
                    <RenderHtml source={{ html: event?.registration }} />
                </Accordion.Item>
            </Accordion.Container>
            <RenderHtml source={{ html: event?.description }} />
        </>
    )
}
