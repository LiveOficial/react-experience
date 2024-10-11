import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { body, secondary, primary, borderColor } from "@/constants/Colors"
import { Gradient, Hr } from "@/components/LiveExperience"
import { ChevronLeft } from "@/components/Icons"
import { Button } from "@/components/LiveExperience"
import { router } from "expo-router"

export default function Treinadores() {
    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Button onPress={() => router.back()}>
                        <ChevronLeft />
                    </Button>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            Professores
                        </Text>
                    </View>
                    <View />
                </View>
            </View>

            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', marginHorizontal: 20, height: 200, width: 200, marginVertical: 20, marginHorizontal: 'auto' }}>
                    <Gradient>
                        <Image
                            style={{ height: '100%', width: '100%'  }}
                            source={{
                                uri: 'https://s3-alpha-sig.figma.com/img/f584/6f79/16d230c24e6daea2447c883ec581ee63?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTSkxh0teGYlTj9AigHwfJsKwRXkPgmdY3eAh~qWyiDN2gNgt2Q7FmmLRFXzn4HffOjZv-Db8AWDgPUQOE6AZMC7cwMfOI3znLhGK9e57uVTNZ2-bo7ZN5XV4sbJ~oNO~CbGJO4NfmaDkG6694lU7IS87vWCM4aLjzuK6PVRAhmTJBGNM4mwTV31fyroGf9qZcn2OB12l~e96r2-Uj0A8wE2PO74dESUpuK7YC60NHPU-xwZ3B8AWrlRRCxBRE1QoLXMOw3~YrdqUDjLhn0idNk3NYxUxiPtd15D7mIW0SGdtef57y~wkeMsRSV3AxhzxIERf~ZJeGXCZdQqspS43Q__'
                            }}
                        />
                    </Gradient>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 500, fontSize: 25 }}>Cau Saad</Text>
                    <Text style={{ color: primary, fontWeight: 500, fontSize: 16 }}>+ Seguir</Text>
                </View>
                <Text style={{ fontWeight: 500, marginTop: 10, marginBottom: 20 }}>13 vídeos</Text>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <Text>Cau Saad é personal trainer, educadora física pós-graduada em Metodologia do Treinamento Específico e especialista em Nutrição Esportiva. Criou o método Cau Saad que inclui técnicas de treinamento funcional, musculação e mobilidades articulares. </Text>
                    <Text>Fundadora do Instituto Cau Saad, a trainer também é empresária, digital influencer, palestrante do TEDxSaoPaulo e se autodenomina uma eterna estudante da Saúde.</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Hr />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable style={{ padding: 10, borderRadius: 100, borderColor: borderColor, backgroundColor: body, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text>Playlists (4)</Text>
                    </Pressable>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>WorCAUt</Text>
                    <Pressable>
                        <Text style={{ color: primary, fontWeight: 500 }}>
                            Ver tudo
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}
