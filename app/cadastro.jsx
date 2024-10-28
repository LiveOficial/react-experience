import { Text, View } from 'react-native'
import { HighlightedButton, Hr, Input, NeedHelp } from '@/components/LiveExperience'
import { primary } from '@/constants/Colors'
import { Container, Header, Title, FormBox, Label, TitleBox } from '@/components/CommomPages'
import { useState } from 'react'
import api from '@/hooks/api'
import { useAuth } from '@/context/auth'
import { router } from 'expo-router'

export default function SingIn() {
    const [name, setName] = useState('Felipe Bona')
    const [email, setEmail] = useState('uqD6h@example.com')
    const [document, setDocument] = useState('979.776.890-22')
    const [cellphone, setCellphone] = useState('11999999999')
    const [password, setPassword] = useState('132567')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const { setUser, setToken, saveUser, saveToken } = useAuth()

    const onSubmit = () => {
        setLoading(true)

        const data = {
            name,
            email,
            document,
            cellphone,
            password
        }

        api.post('user/register', data)
            .then(({ data: { token, user } }) => {
                setToken(token)
                saveToken(token)
                setUser(user)
                saveUser(user)
                router.push('/perfil')
            })
            .catch(e => setErrors(e.response.data.errors))
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
                    <Input error={errors.name} value={name} setValue={setName} placeholder="Insira seu nome completo" />
                </FormBox>
                <FormBox>
                    <Label>CPF</Label>
                    <Input error={errors.document} value={document} setValue={setDocument} placeholder="000.000.000-00" />
                </FormBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input error={errors.email} value={email} setValue={setEmail} placeholder="Insira seu e-mail" />
                </FormBox>
                <FormBox>
                    <Label>Celular</Label>
                    <Input error={errors.cellphone} value={cellphone} setValue={setCellphone} placeholder="Insira seu número de celular" />
                </FormBox>
                <FormBox>
                    <Label>Senha</Label>
                    <Input error={errors.password} value={password} setValue={setPassword} placeholder="Insira sua senha" />
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