import { Pressable, ScrollView, Text, View } from "react-native"
import { body, primary, secondary } from '@/constants/Colors'
import { Share, ChevronLeft, Calendar } from "@/components/Icons";
import { router } from "expo-router";

export default function Event() {
    return (
        <>
            <ScrollView style={{ backgroundColor: body, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <Pressable onPress={() => router.back()}>
                            <ChevronLeft />
                        </Pressable>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>Evento</Text>
                        </View>
                        <View>
                            <Share />
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, marginTop: 50 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 500 }}>24</Text>
                            <Text style={{ fontSize: 15, fontWeight: 500 }}>NOV</Text>
                        </View>
                        <Title>LIVE! RUN XP São Jose do Vale do Rio Preto</Title>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <DetailBox icon={<Calendar />}>
                            <DetailTitle>Data</DetailTitle>
                            <DetailValue>Domingo, 24 de novembro de 2024</DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Calendar />}>
                            <DetailTitle>Local da largada</DetailTitle>
                            <DetailValue>Praça do Livedo s/n - Bairro dos Ipês, 22020-030</DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Calendar />}>
                            <DetailTitle>Tipo de evento</DetailTitle>
                            <DetailValue>Corrida</DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Calendar />}>
                            <DetailTitle>Público</DetailTitle>
                            <DetailValue>Adulto, Kids</DetailValue>
                        </DetailBox>
                    </View>

                    <View style={{ marginTop: 50}}>
                        <Text>Kits</Text>
                    </View>
                </View>



            </ScrollView>
            <FloatingBox />
        </>
    )
}

function DetailBox({ children, icon }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
            {icon}
            <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {children}
            </View>
        </View>
    )
}

function DetailTitle({ children }) {
    return (
        <Text style={{ fontSize: 13, fontWeight: 500 }}>
            {children}
        </Text>
    )
}

function DetailValue({ children }) {
    return (
        <Text style={{ fontSize: 15 }}>
            {children}
        </Text>
    )
}

function Title({ children }) {
    return (
        <Text style={{ fontSize: 35, fontWeight: 500 }}>
            {children}
        </Text>
    )
}

function FloatingBox() {
    return (
        <View onPress={() => router.back()} style={{ position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: secondary, paddingTop: 20, paddingBottom: 30, paddingHorizontal: 30 }}>
            <View style={{ width: '60%' }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                <Text>Domingo, 24/11</Text>
            </View>
            <View>
                <Pressable style={{ backgroundColor: primary, padding: 15 }} onPress={() => router.push('/eventos/[slug]/inscrever')}>
                    <Text style={{ color: '#fff', fontSize: 15 }}>Inscrever-se</Text>
                </Pressable>
            </View>
        </View>
    )
}