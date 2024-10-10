import { Pressable, ScrollView, Text, View } from "react-native";
import { Label, FormBox } from "@/components/CommomPages";
import { Input, Hr } from "@/components/LiveExperience";

export default function Privacy() {
    return (
        <ScrollView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Privacidade</Text>
            <Text>Cent</Text>
            <Text>Veja onde seus dados serão utilizados:</Text>
            <Hr/>
            <Text>Dados pessoais</Text>
            <Text>Como nome, gênero e data de nascimento: utilizados para personalizar sua experiência e nossa comunicação.</Text>
            <Label>Nome e sobrenome</Label>
            <Text>Taís Lima</Text>
            <Label>Data nascimento</Label>
            <Label>Sexo</Label>

            <Pressable>
                <Text>Ver menos</Text>
            </Pressable>
            <Text>Meios de comunicação</Text>
            <Text>E-mail e celular: para envio de avisos, confirmações e marketing.</Text>
            <Label>E-mail</Label>
            <Text>taislima@taislima</Text>
            <Label>Telefone</Label>
            <Text>(11) 99999-9999</Text>
        </ScrollView>
    )
}
