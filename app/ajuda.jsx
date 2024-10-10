import { ScrollView, Text, View } from "react-native";
import { Label, FormBox } from "@/components/CommomPages";
import { Input } from "@/components/LiveExperience";

export default function Help() {
    return (
        <ScrollView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Ajuda</Text>

            <Text>
                dwas
            </Text>

            <Contact />


            

        </ScrollView>
    )
}


function Contact() {
    return (
        <>
            <Text>Quer tirar dpuvidas ou está precisando de ajuda para resolver algum problema? Fale conosco, queremos que você tenha a melhor experiencia possivel aqui.</Text>
            <Label>Tipo de solicitação</Label>
            <FormBox>
                <Label>Nome</Label>
                <Input />
            </FormBox>
            <FormBox>
                <Label>E-mail</Label>
                <Input />
            </FormBox>
            <FormBox>
                <Label>Telefone</Label>
                <Input />
            </FormBox>
            <FormBox>
                <Label>Descrição</Label>
                <Input placeholder="Descreva sua solicitação" />
            </FormBox>
            <HighlightedButton>
                Enviar
            </HighlightedButton>
        </>
    )
}