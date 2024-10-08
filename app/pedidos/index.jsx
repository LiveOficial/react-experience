import { Pressable, ScrollView, Text, View } from "react-native";
import { primary } from '@/constants/Colors'
import { Hr } from "@/components/LiveExperience";
import { router } from "expo-router";

export default function Pedidos() {
    return (
        <ScrollView style={{ backgroundColor: '#fff', padding: 10 }}>
            {
                [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6},
                    {id: 7},
                    {id: 8},
                    {id: 9},
                    {id: 10},
                ].map((order) => {
                    return (
                        <>
                            <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 25 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}># {order.id}</Text>
                                    <Status status={'finished'}>Concluído</Status>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 500 }}>LIVE! RUN XP São Jose do Vale do Rio Preto</Text>
                                    <Text>24/11/2024</Text>
                                    <Text>{160}</Text>
                                    <Text>Cartão de crédito</Text>
                                </View>
                                <Pressable style={{ paddingVertical: 10 }} onPress={() => { router.push(`pedidos/${order.id}`) }}>
                                    <Text style={{ color: primary, fontWeight: 500 }}>Ver detalhes</Text>
                                </Pressable>
                            </View>
                            <Hr />
                        </>
                    )
                })
            }
        </ScrollView>
    );
}

export function Status({ status }) {
    const statuses = {
        finished: {
            color: 'green',
            text: 'Concluído',
        }
    }

    return (
        <Text style={[{ color: statuses[status].color }, { borderColor: statuses[status].color, borderWidth: 1, padding: 5, fontSize: 12, borderRadius: 10 }]}>
            {statuses[status].text}
        </Text>
    )
}