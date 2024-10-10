import { Pressable, ScrollView, Text, View } from "react-native";
import { body } from "@/constants/Colors";
import { ChevronLeft } from "@/components/Icons";
import { Hr } from "@/components/LiveExperience";
import { router } from "expo-router";
import { useContext } from "react";
import AuthContext from '@/context/auth'

export default function Calendar() {
    const { authenticated } = useContext(AuthContext)

    if (authenticated === false) {
        router.replace('/entrar')
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 40 }}>
            <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft />
                    </Pressable>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Calendário</Text>
                    </View>
                    <View />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                    {/* <SearchInput /> */}
                </View>


                <View style={{ display: 'flex', flexDirection: 'column', rowGap: 30 }}>
                    {
                        [1,2,3,4].map(() => {
                            return (
                                <>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                                        <View>
                                            <Text style={{ fontSize: 26, fontWeight: 500 }}>24</Text>
                                            <Text style={{ fontSize: 16, fontWeight: 500 }}>NOV</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold', flex: 1, fontSize: 20 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                                            <Text>Corrida</Text>
                                            <Text>Praça do Lido s/n - Bairro dos Ipês, 22020-030</Text>
                                            <Text>06:00 às 11:00hrs</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <Pressable onPress={() => {}}>
                                                    <Text>Ver detalhes</Text>
                                                </Pressable>
                                                <Pressable onPress={() => {}}>
                                                    <Text>Marcar na agenda</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                    <Hr />
                                </>
                            )
                        })
                    }
                </View>


            </View>
        </ScrollView>
    )
}
