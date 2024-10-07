import { Page } from "@/components/LiveExperience";
import { Container, Text as TextType } from '@/components/TopSelector'
import { Image, Text, View } from "react-native";

export default function Events() {
    return (
        <Page padding={10}>
            <Container>
                {['Corrida', 'yoga', 'bike', 'luta', 'pilates'].map((type) => (
                    <TextType>{type}</TextType>
                ))}
            </Container>
            <Image style={{ width: '50%', height: 100 }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />
            <Text>LIVE! RUN XP JOÃO PESSOA 2024</Text>
        </Page>
    )
}