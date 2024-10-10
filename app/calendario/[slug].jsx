import { Pressable, Text, View } from "react-native"
import { Mark } from "@/components/Icons"

export default function Calendario() {
    return (
        <View>
            <Text>Seu evento</Text>
            <Text>#78654</Text>
            <Text>LIVE! RUN XP São José do Vale do Rio Preto</Text>
            <Text>Data do Evento</Text>
            <Text>24/11/2024</Text>
            <Text>Local da largada</Text>
            <Text>Praça do Lido s/n - BAirro dos Jardins - RJ</Text>
            <Hr />
            <Text>Retire seu kit</Text>
            <Text>Local de retirada</Text>
            <Text>LIVE! São José do Vale do Rio Preto - Shopping RioMar</Text>
            <Pressable onPress={() => {}}>
                <Mark />
                <Text>Ver local no mapa</Text>
            </Pressable>
        </View>
    )
}