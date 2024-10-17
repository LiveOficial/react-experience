import { View, Text } from 'react-native'
import { HighlightedButton, Hr, Input, Link, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Container, Header, Title, Label, FormBox, TitleBox, Alert } from '@/components/CommomPages'
import api from '@/hooks/api'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState({})

    const onSubmit = () => {
        setError({})
        setLoading(true)
        api.post('user/mail-password-reset', { email })
            .then(({ data }) => setMessage(data.message))
            .catch((e) => {
                try {
                    setError(e.response.data.errors)
                } catch (error) {
                    
                }
            })
            .finally(() => setLoading(false))
    }

    return (
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column', minWidth: 350, maxWidth: 500 }}>
                <TitleBox>
                    <Title>Esqueci minha senha</Title>
                </TitleBox>
                <Text style={{ textAlign: 'center' }}>Você receberá um e-mail com as instruções para redefinir sua senha.</Text>
                <View style={{ display: 'flex', marginVertical: 25 }}>
                    {message && <Alert.Box>
                        <Alert.Message>{message}</Alert.Message>
                    </Alert.Box>}
                </View>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input error={error?.email} value={email} setValue={setEmail} placeholder="Insira seu e-mail ou CPF" />
                </FormBox>
                <HighlightedButton onPress={() => onSubmit()} loading={loading}>
                    Enviar
                </HighlightedButton>
                <Link href="/entrar" style={{ alignSelf: 'center', marginVertical: 30 }}>
                    Voltar para login
                </Link>
                <Hr />
                <NeedHelp />
            </View>
        </Container>
    )
}