import { Card } from "@/components/Event";
import { Pressable, Text, TextInput, View } from "react-native";
import { ChevronLeft, Point } from "@/components/Icons";
import { primary, secondary } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function Events() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>

            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, padding: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <View>
                        <ChevronLeft />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Eventos</Text>
                    </View>
                    <View />
                </View>
                <View style={{ marginVertical: 25 }}>
                    <TextInput placeholder="Eventos ou localização" placeholderTextColor={'#6d6d6d'} style={{ backgroundColor: '#fff', padding: 10 }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable onPress={() => {}}>
                        <Text style={{ color: primary, fontWeight: 500 }}>Filtrar</Text>
                    </Pressable>
                    <Pressable onPress={() => {}}>
                        <Text style={{ color: primary, fontWeight: 500 }}>Ordenar</Text>
                    </Pressable>
                </View>
            </View>
            
            <View style={{ paddingHorizontal: '5%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <Text>Eventos</Text>
                    <Point />
                    <Text>25 resultados</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {[1,2,3,4,5,6].map(() => <Card title='LIVE! RUN XP Rio de Janeiro' onPress={() => {}} />)}
                </View>
            </View>
        </ScrollView>
    )
}