import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { FormBox, Label, MessageBox, MessageBoxText } from "@/components/CommomPages";
import { Input, HighlightedButton, Hr } from "@/components/LiveExperience";
import { body } from "@/constants/Colors";
import { router } from "expo-router";

export default function EditarPerfil() {
    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingVertical: 60 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft />
                </Pressable>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Editar perfil</Text>
                </View>
                <View />
            </View>

            <MessageBox marginTop={40}>
                <MessageBoxText>
                    Dados atualizados com sucesso
                </MessageBoxText>
            </MessageBox>

            <Title>Seus dados</Title>
            <FormBox>
                <Label>Nome e sobrenome</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>E-mail</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>CPF</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Telefone</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Data de nascimento</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Gênero</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Nome e sobrenome</Label>
                <Input></Input>
            </FormBox>
            <Hr />
            <Title>Endereço</Title>
            <FormBox>
                <Label>CEP</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Estado</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Estado</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Cidade</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Bairro</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Logadouro</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Número</Label>
                <Input></Input>
            </FormBox>
            <FormBox>
                <Label>Complemento</Label>
                <Input></Input>
            </FormBox>
            <HighlightedButton>
                Salvar alterações
            </HighlightedButton>
        </ScrollView>
    )
}

const Title = ({ children }) => <Text style={{ fontSize: 20, marginVertical: 40 }}>{children}</Text>