import { View, Text } from 'react-native'
import { HighlightedButton, Hr, Input, Link, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Container, Header, Title, Label, FormBox, TitleBox, MessageBox, MessageBoxText } from '@/components/CommomPages'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)
        fetch('https://api.appliveexperience.com.br/app/event?version=2150', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(response => response.json())
            .then(json => setResponse(json))
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
                <MessageBox>
                    <MessageBoxText>E-mail com as instruções para redefinir a senha foi enviado para</MessageBoxText>
                </MessageBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail ou CPF" />
                </FormBox>
                <HighlightedButton onPress={onSubmit} loading={loading}>
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