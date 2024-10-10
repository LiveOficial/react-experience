import { Image as ReactImage, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SmallButton, HighlightedButton } from "@/components/LiveExperience"
import { body, secondary } from "@/constants/Colors"
import { useState } from "react"
import { Logo, Menu, Cart as CartIcon } from "@/components/Icons"
import { borderColor } from "@/constants/Colors"
import Onboarding from "@/components/Onboarding"
import Cart from "@/components/Cart"
import { router } from "expo-router"

export default function Home() {
    const [query, setQuery] = useState()
    const [showCart, setShowCart] = useState(false)

    return (
        <>
            <ScrollView style={{ backgroundColor: secondary, paddingTop: 60 }}>
                <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, paddingBottom: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Pressable onPress={() => {}}>
                            <Menu />
                        </Pressable>
                        <View style={{ alignSelf: 'center', marginBottom: 35 }}>
                            <Logo />
                        </View>
                        <Pressable onPress={() => { setShowCart(true) }}>
                            <CartIcon />
                        </Pressable>
                    </View>
                    <Text style={{ marginBottom: 3, fontFamily: 'TextSemiBold' }}>Pesquise por tipo de atividade</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 10 }}>
                        <Button active={true}>Corrida</Button>
                        <Button>Evento de loja</Button>
                        <Button>Yoga</Button>
                        <Button>Beach Tennis</Button>
                        <Button>Treino</Button>
                        <Button>Bike</Button>
                    </ScrollView>
                    <SearchInput />
                </View>

                <View style={{ paddingHorizontal: 20, backgroundColor: body }}>
                    <Text style={{ marginVertical: 17, fontSize: 22 }}>Taís, prepare-se para seu evento</Text>
                    <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                        {
                            [1,2,3].map(() => {
                                return (
                                    <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', width: 300 }}>
                                        <ReactImage
                                            style={{ width: '100%', height: 350, resizeMode: 'cover' }}
                                            source={{
                                                uri: 'https://s3-alpha-sig.figma.com/img/d802/11dd/d289299b54b218afb09aa9562648f31e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NO9tr5RnPbLInEmF-NzHgeRygJqjR564-9wy89yZRKbw9dWW~etQCwmeOkPkL-cOKUg1LfWBaYAx~abyKtxVbjj8wcQp4AKl6cvRskX5DHMy-KM7Wz1GxKRL2uSpMghkM3AP5Xx9d~TpVQlLYcv46oOY-o2ZLZuPQ42hW4daA9xlaAtXLO2tBphQ4wYeYj4EOUOjJ~SH49osI1CySaahKKvKCH424g9vcysl23JIvS4AqwCn68LWqTQ~KhRqYSfuaq6ItmaNVMIP29c3-4ib-pSmBW5GlPiYEa9iZ-132QdwmYK4MdssVQIe8B3Na-R4Qh6OT9zB2pnjkoYJ3X-onA__'
                                            }}
                                        />
                                        <View style={{ padding: 15 }}>
                                            <Text style={{ fontWeight: 500, fontSize: 22, marginBottom: 15 }}>Top Icon Hydefit Adaptiv</Text>
                                            <Text style={{ marginBottom: 12 }}>Disponível em 3 cores</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                                                <View style={{ width: 30, height: 30, backgroundColor: '#EE6F52' }} />
                                                <View style={{ width: 30, height: 30, backgroundColor: '#D6E8EA' }} />
                                                <View style={{ width: 30, height: 30, backgroundColor: '#C3EFB9' }} />
                                            </View>
                                            <Text style={{ marginTop: 20, marginBottom: 20 }}><Text style={{ color: 'green', fontSize: 20, fontWeight: 500 }}>R$ 99,00</Text> ou 10x de R$ 9,90</Text>
                                            <HighlightedButton>
                                                Ver na loja
                                            </HighlightedButton>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                    <Section>
                        <TitleBox>
                            <SectionTitle>Próximos eventos</SectionTitle>
                            <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {[1,2,3,4].map(() => {
                                return (
                                    <Card onPress={() => { router.push('/eventos/1') }}>
                                        <Image uri='https://imagens.liveoficial.com.br/app-experience/events/H7FBAlhVkTH7GZRTaoUydYU9KBrgTPyP88LrkdM6.jpg' />
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 7 }}>
                                            <Text style={{ fontWeight: 600, width: '80%', fontSize: 16 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                                                <Text style={{ fontWeight: 600, fontSize: 18 }}>24</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 11 }}>Nov</Text>
                                            </View>
                                        </View>
                                    </Card>
                                )
                            })}
                        </Carrousel>
                    </Section>

                    <Section>
                        <TitleBox>
                            <SectionTitle>Top 5 conteúdos</SectionTitle>
                            <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {[1,2,3,4].map(() => {
                                return (
                                    <Card>
                                        <Image uri='https://s3-alpha-sig.figma.com/img/00b1/a808/8e02c477d1c927d2947107480fe3a137?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsiHugCOYs1CWke~B1wzF2aRkBHOdebCOW0-yj-7rpp04KDSwIg~UOeDiN7LSWT1hOb7XFugHK0dP-tJMQB2PROmuZgzFU1kG5sih7PzOzu57BOqrA9YXoe~SIB0pbInUHWidxjO~lQi2A-EoAKbUsxkEf9y3378zjIz5trOBNFhkn43G4sRcUzSoCk67YzVv01AlkVjQg0xQdmabhN3O9NWydl93mSw2XNl7-ehX7WCv5NF8k6pAPci91O8QGpcW6GRC6cf~Qb0Me6KKRi3f88qHQZfrbpTyKHq6jeFrHmcrsLdIii0weJQE8IX6Fqol-HoynhS6-bWUwCN~iQjGA__' />
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                            <Text>LIVE! RUN XP FORTALEZA 2024</Text>
                                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontWeight: 700, fontSize: 15 }}>24</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 10 }}>Nov</Text>
                                            </View>
                                        </View>
                                    </Card>
                                )
                            })}
                        </Carrousel>
                    </Section>

                    <Section>
                        <TitleBox>
                            <SectionTitle>Professores</SectionTitle>
                            <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {[1,2,3,4].map(() => {
                                return (
                                    <Card>
                                        <Image uri='https://s3-alpha-sig.figma.com/img/f505/2ee4/0ec6959f2ba8dedfca066709c68c9be6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuwNG9I8aXjBZaDutsIL-t~MQzVDMYvZx9LK7hsJxLj5cKKz7X1E5RwwSaYwfiGfcOTcHKNd2JaT-QRFEt3hm5MpbdCwoBCvPBPel6y8F0t56K95BXoyGMQlNGWzKm0k9v55~Y~MjA4vEGqO97hnHXSCaIskNVYEmKNKAOP25q5Pcs3MzqAVg9KOmtNX6w~xNUJf3FNomufytGi4yu9464ha0cNDeWmpBjXsiAY5Yz8Qj9ErqfBsCshEiq4MX9fsRj2iBVzHKg9Gx8q0Q4H84HmaXh8GRlPqHed-UfZqlcYMbOzkN0Kjrpdsv03lzKH3N9mGuVkHYqyF4csiSiYkug__' />
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                            <Text>LIVE! RUN XP FORTALEZA 2024</Text>
                                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontWeight: 700, fontSize: 15 }}>24</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 10 }}>Nov</Text>
                                            </View>
                                        </View>
                                    </Card>
                                )
                            })}
                        </Carrousel>
                    </Section>

                    <Section>
                        <TitleBox>
                            <SectionTitle>Blog LIVE!</SectionTitle>
                            <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                        </TitleBox>

                        <Carrousel>
                            {[1,2,3,4].map(() => {
                                return (
                                    <View style={{ width: 180, marginRight: 10 }}>
                                        <Image
                                            style={{ height: 100, width: '100%' }}
                                            source={{
                                                uri: 'https://imagens.liveoficial.com.br/app-experience/events/H7FBAlhVkTH7GZRTaoUydYU9KBrgTPyP88LrkdM6.jpg'
                                            }}
                                        />
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                            <Text>LIVE! RUN XP FORTALEZA 2024</Text>
                                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontWeight: 700, fontSize: 15 }}>24</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 10 }}>Nov</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </Carrousel>
                    </Section>






                </View>
            </ScrollView>
            <Onboarding />
            <Cart visible={showCart} setVisible={setShowCart} />
        </>
    )
}

function Button({ children, onPress, active = false }) {
    return (
        <Pressable style={{ padding: 10, borderColor: active ? borderColor : '#fff', backgroundColor: active ? secondary : '#fff', borderWidth: 1, borderRadius: 20, flexGrow: 1 }} onPress={onPress}>
            <Text style={{ fontSize: 12, fontWeight: 500 }}>
                {children}
            </Text>
        </Pressable>
    )
}

const SearchInput = () => <TextInput style={{ backgroundColor: '#fff', padding: 15 }} placeholderTextColor={'#6d6d6d'} placeholder='Eventos, localização ou aulas' />
const TitleBox = ({ children }) => <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>{children}</View>
const Section = ({ children }) => <View style={{ marginTop: 50 }}>{children}</View>
const SectionTitle = ({ children }) => <Text style={{ fontSize: 23 }}>{children}</Text>
const Carrousel = ({ children }) => <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>{children}</ScrollView>
const Image = ({ uri }) => <ReactImage style={{ height: 200, width: '100%' }} source={{ uri }} />
const Card = ({ children, onPress }) => <Pressable onPress={onPress} style={{ width: 300, marginRight: 10 }}>{children}</Pressable>
const Title = ({ children }) => <Text style={{ fontSize: 17, fontWeight: 400 }}>{children}</Text>