import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { Container, Text as TextType } from '@/components/TopSelector'
import { Page, SmallButton } from "@/components/LiveExperience"
import { Title } from '@/components/Home'

export default function Home() {
    return (
        <Page padding={10}>
            <Container style={{ marginBottom: 10 }}>
                {['Corrida', 'yoga', 'bike', 'luta', 'pilates'].map((type) => (
                    <TextType>{type}</TextType>
                ))}
                <TextType>+</TextType>
            </Container>

            <Image
                style={{ width: '100%', height: 500, marginBottom: 10 }}
                source={{
                    uri: 'https://imagens.liveoficial.com.br/app-experience/banners/31puFoRvKD920Ji5Hm0TggWnKu6GvhPM4psf8DNO.jpg'
                }}
            />

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>Novidades</Title>
                <SmallButton onPress={() => {} }>Ver todos</SmallButton>
            </View>

            <ScrollView horizontal style={{ marginVertical: 10 }}>
                <View style={{ marginRight: 10, width: 180 }}>
                    <Image style={{ height: '50%', width: '100%' }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />  
                    <Text style={{ fontWeight: 700 }}>LIVE! Superioga Paulo Junqueira - Plano Mensal: Acesso ilimitado por 30 dias corridos</Text>
                    <Text>Yoga</Text>
                </View>
                <View style={{ marginRight: 10, width: 180 }}>
                    <Image style={{ height: '50%', width: '100%' }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />  
                    <Text style={{ fontWeight: 700 }}>LIVE! Superioga Paulo Junqueira - Plano Mensal: Acesso ilimitado por 30 dias corridos</Text>
                    <Text>Yoga</Text>
                </View>
            </ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>Top 10 conteúdos</Title>
                <SmallButton onPress={() => {} }>Ver todos</SmallButton>
            </View>

            <ScrollView horizontal style={{ marginVertical: 10 }}>
                <View style={{ marginRight: 10, width: 180 }}>
                    <Image style={{ height: '70%', width: '100%' }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />  
                    <Text style={{ fontWeight: 700 }}>LIVE! Superioga Paulo Junqueira - Plano Mensal: Acesso ilimitado por 30 dias corridos</Text>
                    <Text>Yoga</Text>
                </View>
                <View style={{ marginRight: 10, width: 180 }}>
                    <Image style={{ height: '70%', width: '100%' }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />  
                    <Text style={{ fontWeight: 700 }}>LIVE! Superioga Paulo Junqueira - Plano Mensal: Acesso ilimitado por 30 dias corridos</Text>
                    <Text>Yoga</Text>
                </View>
            </ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>Aulas</Title>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title>Blog LIVE!</Title>
                <SmallButton onPress={() => {} }>Acessar BLOG</SmallButton>
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }} horizontal>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 180, height: 180 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://blog.liveoficial.com.br/wp-content/uploads/2024/09/SaveClip.App_461259581_869777821475104_1997755766220596861_n.jpg'
                        }}
                    />
                    <Text style={{ fontWeight: 500, fontSize: 12 }}>Como Escolher a Roupa Fitness Ideal para a Primavera: Dicas de Estilo e Conforto</Text>
                    <Text>TEAM LIVE!</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 180, height: 180 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://blog.liveoficial.com.br/wp-content/uploads/2024/09/SaveClip.App_461259581_869777821475104_1997755766220596861_n.jpg'
                        }}
                    />
                    <Text style={{ fontWeight: 500, fontSize: 12 }}>Como Escolher a Roupa Fitness Ideal para a Primavera: Dicas de Estilo e Conforto</Text>
                    <Text>TEAM LIVE!</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 180, height: 180 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://blog.liveoficial.com.br/wp-content/uploads/2024/09/SaveClip.App_461259581_869777821475104_1997755766220596861_n.jpg'
                        }}
                    />
                    <Text style={{ fontWeight: 500, fontSize: 12 }}>Como Escolher a Roupa Fitness Ideal para a Primavera: Dicas de Estilo e Conforto</Text>
                    <Text>TEAM LIVE!</Text>
                </View>
            </ScrollView>



        </Page>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: '100%',
      height: '50%',
    },
})