import { Pressable, ScrollView, Text, View } from "react-native";
import { Label } from "@/components/CommomPages";
import { Hr } from "@/components/LiveExperience";
import { ChevronLeft, Help } from '@/components/Icons'
import { body, primary, text } from '@/constants/Colors';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/hooks/api"

export default function Privacy() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        setLoading(true)
        api.get('user/data-usage')
            .then(({ data }) => setData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ fontSize: 20 }}>Privacidade</Text>
                <View style={{ padding: 10 }} />
            </View>

            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 10 }}>Central de Privacidade</Text>
            <Text style={{ marginBottom: 30 }}>Reunimos aqui tudo o que você precisa saber sobre os dados que coletamos no app:</Text>

            <View style={{ display: 'flex', justifyContent: 'column', gap: 10 }}>
                <Box icon={<Help size={22} color={text} />} label='Termos de uso' />
                <Box icon={<Help size={22} color={text} />} label='Politica de privacidade' />
                <Box icon={<Help size={22} color={text} />} label='Rastreio de uso do App' />
                <Box icon={<Help size={22} color={text} />} label='Excluir minha conta e dados' />
            </View>

            <Text style={{ fontSize: 18, marginVertical: 15 }}>Veja onde seus dados serão utilizados:</Text>

            <Hr/>
            <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 10 }}>Dados pessoais</Text>
            <Text>Como nome, gênero e data de nascimento: utilizados para personalizar sua experiência e nossa comunicação.</Text>

            <Label>Nome e sobrenome</Label>
            <Text>Taís Lima</Text>
            <Label>Data nascimento</Label>
            <Label>Sexo</Label>
            <Pressable style={{ padding: 10 }}>
                <Text style={{ color: primary, fontWeight: 500 }}>Ver menos</Text>
            </Pressable>
            <Text>Meios de comunicação</Text>
            <Text>E-mail e celular: para envio de avisos, confirmações e marketing.</Text>
            <Label>E-mail</Label>
            <Text>taislima@taislima</Text>
            <Label>Telefone</Label>
            <Text>(11) 99999-9999</Text>
        </ScrollView>
    )
}

function Box({ label, icon }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 15, borderWidth: 1, borderColor: '#ccc', borderColor: '#BCA292' }}>
            {icon}
            <Text style={{ color: text, fontWeight: 500 }}>{label}</Text>
        </Pressable>
    )
}
