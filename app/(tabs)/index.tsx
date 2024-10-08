import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { Footer, Hr, Link, SmallButton } from "@/components/LiveExperience"
import { Button, Title, SearchInput } from '@/components/Home'
import Logo from "@/components/Logo"
import { secondary } from "@/constants/Colors"
import { useState } from "react"
import { router } from "expo-router"

export default function Home() {
    const [query, setQuery] = useState()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: '5%', paddingVertical: '5%', backgroundColor: secondary }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 35 }}>
                    <Logo />
                    <Link href={'/eventos'}>Eventos</Link>
                    <Link href={'/eventos'}>Resultados</Link>
                </View>
                <Text style={{ marginBottom: 3 }}>Pesquise por tipo de atividade</Text>
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


            <View>
                <Pressable onPress={() => { router.push('/pedidos')  }}>
                    <Text>Pedidos</Text>
                </Pressable>
                <Pressable onPress={() => { router.push('/treinadores')  }}>
                    <Text>Professores</Text>
                </Pressable>
            </View>


            <View style={{ paddingHorizontal: '5%' }}>

                <View style={{ marginTop: 25 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Title>Próximos eventos</Title>
                        <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>
                        {[1,2,3,4].map(() => {
                            return (
                                <View style={{ width: 220, marginRight: 10 }}>
                                    <Image
                                        style={{ height: 130, width: '100%' }}
                                        source={{
                                            uri: 'https://imagens.liveoficial.com.br/app-experience/events/H7FBAlhVkTH7GZRTaoUydYU9KBrgTPyP88LrkdM6.jpg'
                                        }}
                                    />
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 7 }}>
                                        <Text style={{ fontWeight: 500 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontWeight: 700, fontSize: 15 }}>24</Text>
                                            <Text style={{ textTransform: 'uppercase', fontSize: 10 }}>Nov</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Title>Top 5 conteúdos</Title>
                        <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>
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
                    </ScrollView>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Title>Professores</Title>
                        <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>
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
                    </ScrollView>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Title>Blog LIVE!</Title>
                        <SmallButton onPress={() => {} }>Ver tudo</SmallButton>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>
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
                    </ScrollView>
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}