import { Pressable, ScrollView, Text, View } from "react-native";
import { primary, text } from '@/constants/Colors'
import { Hr, Status } from "@/components/LiveExperience";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Mark } from "@/components/Icons";
import { useEffect, useState } from "react";
import api from "@/hooks/api"

export default function Pedidos() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useLocalSearchParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get(`order/${id}`)
            .then(({ data: { order } }) => setData(order))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ fontSize: 20 }}>Pedidos</Text>
                <View style={{ padding: 10 }} />
            </View>
            <View style={{ marginTop: 40, marginBottom: 20 }}>
                <Hr />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                <Title>Seu pedido</Title>
                <Status status={1} />
            </View>
            <Text style={{ color: text }}>#{data?.id}</Text>            
            <Box>
                <SubBox>
                    <Text>LIVE! RUN XP São Jose do Vale do Rio Preto</Text>
                </SubBox>
                <SubBox>
                    <SubTitle>Data do evento</SubTitle>
                    <Text>24/11/2024</Text>
                </SubBox>
                <SubBox>
                    <SubTitle>Local da largada</SubTitle>
                    <Text>praça do lido s/n - RJ</Text>
                </SubBox>
            </Box>
            <Hr marginVertical={20} />
            <Title>Retire seu kit</Title>
            <Box>
                <SubBox>
                    <SubTitle>Local de retirada</SubTitle>
                    <Text>LIVE! São José do Vale do Rio Preto - Shopping RioMar</Text>
                </SubBox>
                <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 7, padding: 15 }} onPress={() => {}}>
                    <Mark color={primary} />
                    <Text style={{ color: primary, fontWeight: 600 }}>Ver local no mapa</Text>
                </Pressable>
            </Box>
            <Hr marginVertical={20} />
            <Title>Sua compra</Title>
            <Box>
                <SubBox>
                    <SubTitle>Valor</SubTitle>
                    <Text>R$ 100,00</Text>
                </SubBox>
                <SubBox>
                    <SubTitle>Nome do titular</SubTitle>
                    <Text>Taís Lima</Text>
                </SubBox>
                <SubBox>
                    <SubTitle>Data da compra</SubTitle>
                    <Text>24/11/2024</Text>
                </SubBox>
                <SubBox>
                    <SubTitle>Método de pagamento</SubTitle>
                    <Text>Cartão Mastercard</Text>
                </SubBox>
            </Box>
        </ScrollView>
    );
}

const Title = ({ children }) => <Text style={{ fontSize: 18, marginBottom: 20 }}>{children}</Text>
const SubTitle = ({ children }) => <Text style={{ fontSize: 16, fontWeight: 500 }}>{children}</Text>
const Box = ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</View>
const SubBox = ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>{children}</View>