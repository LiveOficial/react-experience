import { Pressable, ScrollView, Text, View } from "react-native";
import { primary, text, danger, greenText } from '@/constants/Colors'
import { Hr } from "@/components/LiveExperience";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/hooks/api"
import { ChevronLeft } from "@/components/Icons";

export default function Pedidos() {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = () => {
        setLoading(true)
        api.get('order')
            .then(({ data }) => setOrders(data.page.data))
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
                <View />
            </View>
            {
                orders && orders.map((order, index) => {
                    return (
                        <View key={index}>
                            <View style={{ display: 'flex', flexDirection: 'column', paddingVertical: 20 }} key={index}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: text }}>#{order.id}</Text>
                                    <Status status={order.status} />
                                </View>
                                <View>
                                    <Text>{order.created_at}</Text>
                                    <Text>{order.total}</Text>
                                    <Text>{order.payment_type}</Text>
                                </View>
                                <Pressable style={{ padding: 20 }} onPress={() => { router.push(`pedidos/${order.id}`) }}>
                                    <Text style={{ color: primary, fontWeight: 500 }}>Ver detalhes</Text>
                                </Pressable>
                            </View>
                            <Hr />
                        </View>
                    )
                })
            }
        </ScrollView>
    );
}

export function Status({ status }) {
    const statuses = {
        1: {
            color: primary,
            text: 'Aguardando pagamento',
        },
        2: {
            color: greenText,
            text: 'Confirmado',
        },
        3: {
            color: danger,
            text: 'Cancelado',
        }
    }

    return (
        <Text style={[{ color: statuses[status].color }, { borderColor: statuses[status].color, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, fontSize: 12, borderRadius: 13, fontWeight: 500 }]}>
            {statuses[status].text}
        </Text>
    )
}