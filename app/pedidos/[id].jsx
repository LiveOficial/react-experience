import { Pressable, ScrollView, Text, View } from "react-native";
import { primary } from '@/constants/Colors'
import { Hr } from "@/components/LiveExperience";

export default function Pedidos() {
    return (
        <ScrollView style={{ backgroundColor: '#fff', padding: 10 }}>
            <Text>Seu pedido</Text>
            <Text># 1</Text>            
            <Text>LIVE! RUN XP São Jose do Vale do Rio Preto</Text>
            <Text>Data do evento</Text>
            <Text>24/11/2024</Text>
            <Text>Local da largada</Text>
            <Text>praça do lido s/n - RJ</Text>
            <Hr />
            <Text>Retira seu kit</Text>
            <Text>Local de retirada</Text>
            <Text>LIVE! São José do Vale do Rio Preto - Shopping RioMar</Text>
            <Pressable onPress={() => {}}>
                <Text>Ver local no mapa</Text>
            </Pressable>
            <Hr />
            <Text>Sua compra</Text>
            <DetailBox>
                <DetailTitle>Valor</DetailTitle>
                <DetailValue>160</DetailValue>
            </DetailBox>
        </ScrollView>
    );
}

export function Status({ status }) {
    const statuses = {
        finished: {
            color: 'green',
            text: 'Concluído',
        }
    }

    return (
        <Text style={[{ color: statuses[status].color }, { borderColor: statuses[status].color, borderWidth: 1, padding: 5, fontSize: 12, borderRadius: 10 }]}>
            {statuses[status].text}
        </Text>
    )
}

function DetailBox({ children }) {
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {children}
    </View>
}

function DetailTitle() {
    return (
        <Text style={{ fontWeight: 500 }}>Valor</Text>
    )
}

function DetailValue({ children }) {
    return (
        <Text>{children}</Text>
    )
}