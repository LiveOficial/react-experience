import { Header, Page } from "@/components/LiveExperience";
import { Card, Title } from "@/components/Event";
import { Container, Text as TextType } from '@/components/TopSelector'
import { View } from "react-native";

export default function Events() {
    const header = <Header left={'teste'} right={'teste'}>Eventos</Header>

    return (
        <Page padding={10} header={header}>
            <Container style={{ marginBottom: 10 }}>
                {['Corrida', 'yoga', 'bike', 'luta', 'pilates'].map((type) => <TextType>{type}</TextType>)}
            </Container>

            <Title>Eventos para você</Title>
            <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                {[1,2,3,4,5,6].map(() => <Card title='LIVE! RUN XP NATAL 2024' onPress={() => {}} />)}
            </View>

        </Page>
    )
}