import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { FormBox, Label, Alert } from "@/components/CommomPages";
import { Input, HighlightedButton, Hr } from "@/components/LiveExperience";
import { body } from "@/constants/Colors";
import { router } from "expo-router";
import { useAuth } from "@/context/auth";

export default function EditarPerfil() {
    const { user } = useAuth()

    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingVertical: 60 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Editar perfil</Text>
                <View />
            </View>

            <Alert.Box marginTop={40}>
                <Alert.Message>
                    Dados atualizados com sucesso
                </Alert.Message>
            </Alert.Box>

            <Title>Seus dados</Title>
            <FormBox>
                <Label>Nome e sobrenome</Label>
                <Input value={user?.name} />
            </FormBox>
            <FormBox>
                <Label>E-mail</Label>
                <Input value={user?.email} />
            </FormBox>
            <FormBox>
                <Label>CPF</Label>
                <Input value={user?.document} />
            </FormBox>
            <FormBox>
                <Label>Telefone</Label>
                <Input value={user?.cellphone} />
            </FormBox>
            <FormBox>
                <Label>Data de nascimento</Label>
                <Input value={user?.birthday} />
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