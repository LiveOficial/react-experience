import { Image, ScrollView, Text, View } from 'react-native'
import { SmallButton, Hr } from '@/components/LiveExperience'
import { body, primary, text } from '@/constants/Colors'
import { Pressable } from 'react-native'
import { Cart, ChevronLeft } from '@/components/Icons'
import { router } from 'expo-router'

export default function Treino() {
    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft />
                </Pressable>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Treino</Text>
                </View>
                <View />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image
                        style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 50, borderColor: primary }}
                        source={{
                            uri: 'https://s3-alpha-sig.figma.com/img/3b7e/2017/4858e8ee63bcd1f4b2a6664a67cf1581?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B83RF02TECIOPsjcgWiR-v-Yh46eklzow-WP5AzMTjV4quBOEcm~hvTZXPCafI39LZ7nTcDSvRiesFvnPCdGeABxsRrzgeMzoxpthpCuvC--zWNA~1kpJ1V8ACGsN7RFGdq9folPrZRqCG88kDEq49Vtb9dffzCsjlwyPQj1RxDPKZvVOH6Ya8ZDLkCP4IBQl2SvdV8ketqAD17Z6NGjd63gGZJclnckUbcLPnQjvDTdnF-fm5XkYrs0gk3jlbnRCilroaxlXIwt0-EQiiAucJTqlrSpz5zJGzft0w~DD-IC6gLKhNuri0QRCQy3smOBxb1feO0vhCwMX09dLHcyjw__'
                        }}
                    />
                    <Text style={{ fontSize: 25 }}>Cau Saad</Text>
                </View>
                <View>
                    <SmallButton>
                        Seguir
                    </SmallButton>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ color: text, marginBottom: 5 }}>Funcional</Text>
                <Text style={{ fontSize: 30, fontWeight: 500 }}>WorCAUt - Aula 2</Text>
            </View>
            <View>
                <Image
                    style={{ width: '100%', height: 220 }}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/00b1/a808/8e02c477d1c927d2947107480fe3a137?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsiHugCOYs1CWke~B1wzF2aRkBHOdebCOW0-yj-7rpp04KDSwIg~UOeDiN7LSWT1hOb7XFugHK0dP-tJMQB2PROmuZgzFU1kG5sih7PzOzu57BOqrA9YXoe~SIB0pbInUHWidxjO~lQi2A-EoAKbUsxkEf9y3378zjIz5trOBNFhkn43G4sRcUzSoCk67YzVv01AlkVjQg0xQdmabhN3O9NWydl93mSw2XNl7-ehX7WCv5NF8k6pAPci91O8QGpcW6GRC6cf~Qb0Me6KKRi3f88qHQZfrbpTyKHq6jeFrHmcrsLdIii0weJQE8IX6Fqol-HoynhS6-bWUwCN~iQjGA__'
                    }}
                />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                <ButtonTeste icon={<Cart />} onPress={() => { router.push('/treino') }}>
                    <Text>Adicionar à playlist</Text>
                </ButtonTeste>
                <ButtonTeste icon={<Cart />} onPress={() => { router.push('/treino') }}>
                    <Text>Download</Text>
                </ButtonTeste>
            </View>
            <View style={{ marginVertical: 30}}>
                <Hr />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Cart />
                    <Text style={{ fontWeight: 500 }}>Duração</Text>
                    <Text style={{ fontSize: 15 }}>20 a 30m</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Cart />
                    <Text style={{ fontWeight: 500 }}>Intensidade</Text>
                    <Text style={{ fontSize: 15 }}>Alta</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Cart />
                    <Text style={{ fontWeight: 500 }}>Dificuldade</Text>
                    <Text style={{ fontSize: 15 }}>Moderado</Text>
                </View>
            </View>
            <Text style={{ marginVertical: 20 }}>WorCAUt é um treino dinâmico com média de 45 minutos de duração, sempre priorizando a qualidade do movimento e nível de treinamento do aluno.</Text>
            <View style={{ marginVertical: 30}}>
                <Hr />
            </View>

            <Text>WorkCAUt</Text>

        </ScrollView>
    )
}

function ButtonTeste({ children, onPress, icon }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10 }} onPress={onPress}>
            {icon}
            <Text style={{ color: primary, fontWeight: 'bold' }}>{children}</Text>
        </Pressable>
    )
}