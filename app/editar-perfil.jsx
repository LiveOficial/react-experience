import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { FormBox, Label, Alert } from "@/components/CommomPages";
import { Input, HighlightedButton, Hr, Radio } from "@/components/LiveExperience";
import { body, primary } from "@/constants/Colors";
import { router } from "expo-router";
import { useAuth } from "@/context/auth";
import { useState } from "react";
import api from "@/hooks/api";

export default function EditarPerfil() {
    const { user, saveUser } = useAuth()

    const [name, setName] = useState(user.name)
    const [document, setDocument] = useState(user.document)
    const [email, setEmail] = useState(user.email)
    const [cellphone, setCellphone] = useState(user.cellphone)
    const [birthDate, setBirthDate] = useState(user.birth_date)
    const [gender, setGender] = useState(user.gender)
    const [cep, setCep] = useState(user.address.cep)
    const [state, setState] = useState(user.address.state)
    const [city, setCity] = useState(user.address.city)
    const [district, setDistrict] = useState(user.address.district)
    const [street, setStreet] = useState(user.address.street)
    const [number, setNumber] = useState(user.address.number)
    const [complement, setComplement] = useState(user.address.complement)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [errors, setErrors] = useState({})

    const onSubmit = () => {
        setLoading(true)

        const data = {
            name: name,
            email: email,
            document: document,
            cellphone: cellphone,
            birth_date: birthDate,
            gender: gender,
            cep: cep,
            state: state,
            city: city,
            district: district,
            street: street,
            number: number,
            complement: complement
        }

        api.post('user/update-profile', data)
            .then(({ data: { message } }) => {
                setTimeout(() => setMessage(null), 3000)
                setMessage(message)
                saveUser({
                    name: name,
                    photo: user.photo,
                    email: user.email,
                    document: user.document,
                    cellphone: cellphone,
                    birth_date: birthDate,
                    gender: gender,
                    address: {
                        cep: cep,
                        state: state,
                        city: city,
                        district: district,
                        street: street,
                        number: number,
                        complement: complement
                    }
                })
            })
            .catch(e => {


                console.log(e.response.data.errors)
                setErrors(e.response.data.errors)

            })
            .finally(() => setLoading(false))
    }

    const handleSetDocument = (value) => {
        setDocument(value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"))
    }

    const handleSetCellphone = (value) => {
        setCellphone(value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingVertical: 60 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Editar perfil</Text>
                <View style={{ padding: 10 }} />
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
                    <Input error={errors.name} value={name} onChangeText={setName} />
                </FormBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input value={email} onChangeText={setEmail} readOnly={true} />
                </FormBox>
                <FormBox>
                    <Label>CPF</Label>
                    <Input value={document} onChangeText={handleSetDocument} readOnly={true} />
                </FormBox>
                <FormBox>
                    <Label>Telefone</Label>
                    <Input error={errors.cellphone} value={cellphone} onChangeText={handleSetCellphone} />
                </FormBox>
                <FormBox>
                    <Label>Data de nascimento</Label>
                    <Input error={errors.birth_date} value={birthDate} onChangeText={setBirthDate} />
                </FormBox>
                <FormBox>
                    <Label>Gênero</Label>
                    <Radio.Group>
                        <Radio.Option selected={gender === 'masculino'} onPress={() => setGender('masculino')}>
                            <Text style={{ fontSize: 13, fontWeight: 600 }}>Masculino</Text>
                        </Radio.Option>
                        <Radio.Option selected={gender === 'feminino'} onPress={() => setGender('feminino')}>
                            <Text style={{ fontSize: 13, fontWeight: 600 }}>Feminino</Text>
                        </Radio.Option>
                    </Radio.Group>
                </FormBox>
                <Hr />
                <Title>Endereço</Title>
                <FormBox>
                    <Label>CEP</Label>
                    <Input value={cep} onChangeText={setCep} />
                </FormBox>
                <FormBox>
                    <Label>Estado</Label>
                    <Input value={state} onChangeText={setState} />
                </FormBox>
                <FormBox>
                    <Label>Cidade</Label>
                    <Input value={city} onChangeText={setCity} />
                </FormBox>
                <FormBox>
                    <Label>Bairro</Label>
                    <Input value={district} onChangeText={setDistrict} />
                </FormBox>
                <FormBox>
                    <Label>Logadouro</Label>
                    <Input value={street} onChangeText={setStreet} />
                </FormBox>
                <FormBox>
                    <Label>Número</Label>
                    <Input value={number} onChangeText={setNumber} />
                </FormBox>
                <FormBox>
                    <Label>Complemento</Label>
                    <Input value={complement} onChangeText={setComplement} />
                </FormBox>
                <HighlightedButton onPress={() => onSubmit()} loading={loading}>
                    Salvar alterações
                </HighlightedButton>
            </View>
        </ScrollView>
    )
}

const Title = ({ children }) => <Text style={{ fontSize: 20, marginVertical: 20 }}>{children}</Text>