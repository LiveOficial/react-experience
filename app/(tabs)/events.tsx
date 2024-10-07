import { Page } from "@/components/LiveExperience";
import { Card, Title } from "@/components/Event";
import { Container, Text as TextType } from '@/components/TopSelector'
import { Image, Text, View } from "react-native";

export default function Events() {
    return (
        <Page padding={10}>
            <Container style={{ marginBottom: 10 }}>
                {['Corrida', 'yoga', 'bike', 'luta', 'pilates'].map((type) => <TextType>{type}</TextType>)}
            </Container>

            <Title>Eventos para você</Title>
            <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>

                {
                    [1,2,3].map(() => <Card title='LIVE! RUN XP NATAL 2024' />)
                }

              


            </View>

        </Page>
    )
}