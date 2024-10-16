import { Image as ReactImage, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SmallButton, HighlightedButton } from "@/components/LiveExperience"
import { body, secondary, text } from "@/constants/Colors"
import { useEffect, useState } from "react"
import { Logo, Menu, Cart as CartIcon, Point, Mark } from "@/components/Icons"
import { borderColor } from "@/constants/Colors"
import Onboarding from "@/components/Onboarding"
import Cart from "@/components/Cart"
import { router } from "expo-router"
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState()
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://api.appliveexperience.com.br/app/home')
            .then(({ data }) => setData(data.home))
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: secondary, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
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
                    {
                        data && data.recommended &&
                        <>
                            <Text style={{ marginVertical: 17, fontSize: 22 }}>Taís, prepare-se para seu evento</Text>
                            <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                                {data.recommended.map((recommended) => {
                                    return (
                                        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', width: 300 }}>
                                            <ReactImage
                                                style={{ width: '100%', height: 350, resizeMode: 'cover' }}
                                                source={{
                                                    uri: 'https://s3-alpha-sig.figma.com/img/d802/11dd/d289299b54b218afb09aa9562648f31e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NO9tr5RnPbLInEmF-NzHgeRygJqjR564-9wy89yZRKbw9dWW~etQCwmeOkPkL-cOKUg1LfWBaYAx~abyKtxVbjj8wcQp4AKl6cvRskX5DHMy-KM7Wz1GxKRL2uSpMghkM3AP5Xx9d~TpVQlLYcv46oOY-o2ZLZuPQ42hW4daA9xlaAtXLO2tBphQ4wYeYj4EOUOjJ~SH49osI1CySaahKKvKCH424g9vcysl23JIvS4AqwCn68LWqTQ~KhRqYSfuaq6ItmaNVMIP29c3-4ib-pSmBW5GlPiYEa9iZ-132QdwmYK4MdssVQIe8B3Na-R4Qh6OT9zB2pnjkoYJ3X-onA__'
                                                }}
                                            />
                                            <View style={{ padding: 15 }}>
                                                <Text style={{ fontWeight: 500, fontSize: 22, marginBottom: 15 }}>{recommended.title}</Text>
                                                <Text style={{ marginBottom: 12 }}>Disponível em {recommended.colors.length} cores</Text>
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
                                })}
                            </ScrollView>
                        </>
                    }
                    <Section marginTop={data && data.recommended?.length > 0 ? 20 : 50}>
                        <TitleBox>
                            <SectionTitle>Próximos eventos</SectionTitle>
                            <SmallButton onPress={() => router.push('/eventos') }>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {data && data.events.map((event) => {
                                return (
                                    <Card onPress={() => { router.push(`eventos/${event.slug}`) }}>
                                        <Image uri={event.images[0].src} />
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start', gap: 10, marginTop: 7 }}>
                                            <Text style={{ fontWeight: 600, fontSize: 16, flexShrink: 1 }}>{event.name}</Text>
                                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                            <SmallButton onPress={() => router.push('/aulas') }>
                                Ver tudo
                            </SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {data && data.classes.map((classs) => {
                                return (
                                    <Card>
                                        <Image uri={classs.image} />
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, marginTop: 10 }}>
                                            <CardSubTitle>{classs.autor}</CardSubTitle>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{classs.title}</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Text>{classs.description || 'Funcional'}</Text>
                                                <Point />
                                                <Text>{classs.duration || '20 a 30m'}</Text>
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
                            <SmallButton onPress={() => router.push('treinadores') }>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {data && data.teachers.map((teacher) => {
                                return (
                                    <Card onPress={() => { router.push(`treinadores/${teacher.slug}`) }}>
                                        <Image uri={teacher.src} />
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, marginTop: 10 }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{teacher.name}</Text>
                                            <Text>{teacher.occupation || 'Funcional, Musculação'}</Text>
                                        </View>
                                    </Card>
                                )
                            })}
                        </Carrousel>
                    </Section>
                    <Section>
                        <TitleBox>
                            <SectionTitle>Blog LIVE!</SectionTitle>
                            <SmallButton onPress={() => { }}>Ver tudo</SmallButton>
                        </TitleBox>
                        <Carrousel>
                            {data && data.blog.map((post) => {
                                return (
                                    <Card>
                                        <Image uri={post.imagem} />
                                        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 5 }}>
                                            <CardSubTitle>{post.subtitle}</CardSubTitle>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{post.title}</Text>
                                        </View>
                                    </Card>
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
const Section = ({ children, marginTop = 50 }) => <View style={{ marginTop: marginTop }}>{children}</View>
const SectionTitle = ({ children }) => <Text style={{ fontSize: 20 }}>{children}</Text>
const Carrousel = ({ children }) => <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>{children}</ScrollView>
const Image = ({ uri }) => <ReactImage style={{ height: 200, width: '100%' }} source={{ uri }} />
const Card = ({ children, onPress }) => <Pressable onPress={onPress} style={{ width: 300, marginRight: 10 }}>{children}</Pressable>
const Title = ({ children }) => <Text style={{ fontSize: 17, fontWeight: 400 }}>{children}</Text>
const CardSubTitle = ({ children }) => <Text style={{ color: text, fontWeight: 500, fontSize: 12 }}>{children}</Text>