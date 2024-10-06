import { Page } from "@/components/LiveExperience";
import { Container, Text as TextType } from '@/components/TopSelector'
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export default function Events() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://api.appliveexperience.com.br/app/event?version=2150')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    return (
        <Page padding={10}>
            <Container>
                {['Corrida', 'yoga', 'bike', 'luta', 'pilates'].map((type) => (
                    <TextType>{type}</TextType>
                ))}
            </Container>
            <Text>{data}</Text>
            <Image style={{ width: '50%', height: 100 }} source={{ uri: 'https://imagens.liveoficial.com.br/app-experience/events/Ftlp253d7E8b1gn2LrI8urf60ZaaJ0OSM6yyHJi3.jpg' }} />
            <Text>LIVE! RUN XP JOÃO PESSOA 2024</Text>
        </Page>
    )
}