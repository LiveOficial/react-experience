import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { FormBox, Label, Alert } from "@/components/CommomPages";
import { Input, HighlightedButton, Hr } from "@/components/LiveExperience";
import { body, primary } from "@/constants/Colors";
import { router } from "expo-router";
import { useAuth } from "@/context/auth";
import api from "@/hooks/api";
import { useState } from "react";

export default function EditarPerfil() {
    const { user } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [document, setDocument] = useState(user.document)
    const [email, setEmail] = useState(user.email)
    const [cellphone, setCellphone] = useState(user.cellphone)
    const [birthDate, setBirthDate] = useState(user.birth_date)
    const [gender, setGender] = useState(user.gender)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const onSubmit = () => {
        setLoading(true)

        const data = {
            name: name,
            email: email,
            document: document,
            cellphone: cellphone,
            birth_date: birthDate,
            gender: gender
        }

        api.post('user/update-profile', data)
            .then(({ data: { message } }) => setMessage(message))
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingVertical: 60 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Editar perfil</Text>
                <View />
            </View>
            <View style={{ paddingBottom: 100, marginTop: 40 }}>
                {message && <View style={{ marginVertical: 10 }}>
                    <Alert.Box marginTop={40}>
                        <Alert.Message>
                            {message}
                        </Alert.Message>
                    </Alert.Box>
                </View>}
                <Title>Seus dados</Title>
                <FormBox>
                    <Label>Nome e sobrenome</Label>
                    <Input value={name} />
                </FormBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input value={email} />
                </FormBox>
                <FormBox>
                    <Label>CPF</Label>
                    <Input value={document} />
                </FormBox>
                <FormBox>
                    <Label>Telefone</Label>
                    <Input value={cellphone} />
                </FormBox>
                <FormBox>
                    <Label>Data de nascimento</Label>
                    <Input value={birthDate} />
                </FormBox>
                <FormBox>
                    <Label>Gênero</Label>
                    <Input value={gender} />
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
                <HighlightedButton onPress={() => onSubmit()} loading={loading}>
                    Salvar alterações
                </HighlightedButton>
            </View>
        </ScrollView>
    )
}

const Title = ({ children }) => <Text style={{ fontSize: 20, marginVertical: 20 }}>{children}</Text>