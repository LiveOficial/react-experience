import { Text, View } from 'react-native'
import { HighlightedButton, Hr, Input, NeedHelp } from '@/components/LiveExperience'
import { primary } from '@/constants/Colors'
import { Container, Header, Title, FormBox, Label, TitleBox } from '@/components/CommomPages'
import { useState } from 'react'
import api from '@/hooks/api'
import { useAuth } from '@/context/auth'

export default function SingIn() {
    const [name, setName] = useState(null)
    const [document, setDocument] = useState(null)
    const [email, setEmail] = useState(null)
    const [cellphone, setCellphone] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)

    const { setUser, setToken } = useAuth()

    const onSubmit = () => {
        setLoading(true)
        api.post('register', { name, document, email, cellphone, password })
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }

    return (
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TitleBox>
                    <Title>Faça seu cadastro</Title>
                </TitleBox>
                <FormBox>
                    <Label>Nome completo</Label>
                    <Input value={name} setValue={setName} placeholder="Insira seu nome completo" />
                </FormBox>
                <FormBox>
                    <Label>CPF</Label>
                    <Input value={document} setValue={setDocument} placeholder="000.000.000-00" />
                </FormBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail" />
                </FormBox>
                <FormBox>
                    <Label>Celular</Label>
                    <Input value={cellphone} setValue={setCellphone} placeholder="Insira seu número de celular" />
                </FormBox>
                <FormBox>
                    <Label>Senha</Label>
                    <Input value={password} setValue={setPassword} placeholder="Insira sua senha" />
                </FormBox>
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Criar Conta
                </HighlightedButton>
                <View style={{ alignItems: 'center', marginTop: 7 }}>
                    <Text style={{ fontSize: 13 }}>Ao assinar nossos serviços, você concorda com nossos</Text>
                    <Text style={{ fontSize: 12, marginTop: 7, fontWeight: 500, fontSize: 14, color: primary }}>Termos de Uso e Políticas de Privacidade</Text>
                </View>
                <Hr marginVertical={10} />
                <NeedHelp />
            </View>
        </Container>
    )
}