import { Pressable, ScrollView, Text, View } from "react-native"
import { primary, secondary } from '@/constants/Colors'
import { Point, ChevronLeft } from "@/components/Icons";
import { Button } from '@/components/LiveExperience'
import { router } from "expo-router";

export default function Event() {
    return (
        <>
            <ScrollView style={{ backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <Button onPress={() => router.back()}>
                            <ChevronLeft />
                        </Button>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>Eventos</Text>
                        </View>
                        <View />
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 500 }}>24</Text>
                            <Text style={{ fontSize: 15, fontWeight: 500 }}>NOV</Text>
                        </View>
                        <PageTitle>LIVE! RUN XP São Jose do Vale do Rio Preto</PageTitle>
                    </View>

                    <Row icon={<Point />}>
                        <View>
                            <Title>Data</Title>
                            <Text>Domingo, 24 de novembro de 2024</Text>
                        </View>
                    </Row>
                    <Row icon={<Point />}>
                        <Title>Local da largada</Title>
                        <Text>Praça do Livedo s/n - Bairro dos Ipês, 22020-030</Text>
                    </Row>
                    <Row icon={<Point />}>
                        <Title>Tipo de evento</Title>
                        <Text>Corrida</Text>
                    </Row>
                    <Row icon={<Point />}>
                        <Title>Público</Title>
                        <Text>Adulto, Kids</Text>
                    </Row>
                </View>

                <View>
                    <Text>Retirada de kits</Text>
                </View>
            </ScrollView>
            <View onPress={() => router.back()} style={{ position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: secondary, paddingVertical: 20, paddingHorizontal: 15 }}>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontWeight: 500, fontSize: 20 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                    <Text>Domingo, 24/11</Text>
                </View>
                <View>
                    <Pressable style={{ backgroundColor: primary, padding: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>Inscrever-se</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

function Row({ children, icon }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
            <View>
                {icon}
            </View>
            {children}
        </View>
    )
}

function Title({ children }) {
    return (
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
            {children}
        </Text>
    )
}

function PageTitle({ children }) {
    return (
        <Text style={{ fontSize: 30, fontWeight: 500 }}>
            {children}
        </Text>
    )
}