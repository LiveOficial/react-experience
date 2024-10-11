import { Image, Pressable, ScrollView, Text, View, TextInput } from "react-native";
import { secondary, primary, body } from "@/constants/Colors";
import { ChevronLeft, Point } from "@/components/Icons";
import { router } from "expo-router";
import { Gradient } from "@/components/LiveExperience";
import { ResultsTitle, CardSubTitle } from "@/components/MainPages";

export default function Treinadores() {
    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }} showsVerticalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft />
                    </Pressable>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Professores</Text>
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


            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <ResultsTitle name="Professores" resultsNumber={10} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                {
                    [1,2,3,4,5].map((item) => {
                        return (
                            <Gradient style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 5, paddingVertical: 10 }}>
                                <Image
                                    style={{ width: '100%', height: 250 }}
                                    source={{
                                        uri: 'https://s3-alpha-sig.figma.com/img/f505/2ee4/0ec6959f2ba8dedfca066709c68c9be6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuwNG9I8aXjBZaDutsIL-t~MQzVDMYvZx9LK7hsJxLj5cKKz7X1E5RwwSaYwfiGfcOTcHKNd2JaT-QRFEt3hm5MpbdCwoBCvPBPel6y8F0t56K95BXoyGMQlNGWzKm0k9v55~Y~MjA4vEGqO97hnHXSCaIskNVYEmKNKAOP25q5Pcs3MzqAVg9KOmtNX6w~xNUJf3FNomufytGi4yu9464ha0cNDeWmpBjXsiAY5Yz8Qj9ErqfBsCshEiq4MX9fsRj2iBVzHKg9Gx8q0Q4H84HmaXh8GRlPqHed-UfZqlcYMbOzkN0Kjrpdsv03lzKH3N9mGuVkHYqyF4csiSiYkug__',
                                    }}
                                />
                                <View style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 15 }}>
                                    <CardSubTitle>14 vídeos</CardSubTitle>
                                    <Text style={{ fontWeight: 500, fontSize: 20 }}>Cau Saad</Text>
                                    <Text>Funcional</Text>
                                </View>
                            </Gradient>
                        ) 
                    })
                }
                </View>
            </View>
        </ScrollView>
    )
}