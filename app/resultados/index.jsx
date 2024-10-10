import { text, secondary, borderColor } from '@/constants/Colors'
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Point, ChevronLeft, Search, Times } from "@/components/Icons";
import { Gradient, GradientRun, Hr } from "@/components/LiveExperience";
import { router } from 'expo-router';

export default function Resultados() {
    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft />
                    </Pressable>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Resultados</Text>
                    </View>
                    <View />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                    <SearchInput />
                </View>
            </View>

            <View style={{ backgroundColor: '#fff', padding: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text>Resultados</Text>
                    <Point />
                    <Text>150 resultados</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 30 }}>
                    <FilterValue>Masculino 20 a 24</FilterValue>
                    <FilterValue>8km</FilterValue>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {
                    [1,2,3,4,5].map((pos) => {
                        return (
                            <>
                                <View style={{  }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                        <View>
                                            <Text style={{ color: 'green' }}>#20221</Text>
                                            <Text style={{ fontSize: 20 }}>Jurandyr C*****</Text>
                                            <Text style={{ color: text }}>35 anos</Text>
                                        </View>
                                        <View>
                                            <Gradient>
                                                <Text style={{ color: text, fontSize: 25, padding: 20 }}>{pos}º</Text>
                                                <GradientRun />
                                            </Gradient>
                                        </View>
                                    </View>

                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 20 }}>
                                        <View style={{  width: '30%' }}>
                                            <Text style={{ fontWeight: 500 }}>Faixa</Text>
                                            <Text>F5559</Text>
                                        </View>
                                        <View style={{  width: '30%' }}>
                                            <Text style={{ fontWeight: 500 }}>Class. da faixa</Text>
                                            <Text>{21}</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 20 }}>
                                        <View style={{  width: '30%' }}>
                                            <Text>Tempo</Text>
                                            <Text>00:55:23</Text>
                                        </View>
                                        <View style={{  width: '30%' }}>
                                            <Text>Tempo Bruto</Text>
                                            <Text>00:55:27</Text>
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

function SearchInput() {
    return (
        <>
            <TextInput placeholder="Nome ou número do peito" placeholderTextColor={'#6d6d6d'} style={{ backgroundColor: '#fff', flexGrow: 1, paddingVertical: 15, width: '80%', paddingHorizontal: 10 }} />
            <View style={{ paddingHorizontal: 10 }}>
                <Search />
            </View>
        </>
    ) 
}

function FilterValue({ children }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, borderWidth: 1, borderColor: borderColor, backgroundColor: secondary, padding: 15 }}>
            <Text style={{ fontWeight: 500 }}>
                {children}
            </Text>
            <Times />
        </View>
    )
}