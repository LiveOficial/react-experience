import { Pressable, ScrollView, Text, View } from "react-native";
import { primary, text } from '@/constants/Colors'
import { Hr, Status } from "@/components/LiveExperience";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/hooks/api"
import { ChevronLeft } from "@/components/Icons";

export default function Pedidos() {
    const [orders, setOrders] = useState(null)
    const [loading, setLoading] = useState(true)

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
                                <Pressable style={{ padding: 10 }} onPress={() => { router.push(`pedidos/${order.id}`) }}>
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
