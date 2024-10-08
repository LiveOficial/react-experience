import { View, Text } from 'react-native'
import Title from '@/components/Title'
import { Page, HighlightedButton, Hr, Input, Label, Link, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Header } from '@/components/Header'

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

    const header = <Header>Esqueci minha senha</Header>

    return (
        <Page padding={10} header={header}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 7 }}>
                    <Title>Esqueci minha senha</Title>
                </View>
                <Text style={{ textAlign: 'center' }}>Você receberá um e-mail com as instruções para redefinir sua senha.</Text>
                <View style={{ marginBottom: 25, backgroundColor: '#f5f3ef', padding: 20 }}>
                    <Text style={{ color: '#587211', fontWeight: 500 }}>E-mail com as instruções para redefinir a senha foi enviado para</Text>
                </View>
                <View>
                    <Label>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail ou CPF" />
                </View>
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Enviar
                </HighlightedButton>
                <Link href="/entrar" style={{ alignSelf: 'center', marginVertical: 30 }}>Voltar para login</Link>
                <Hr />
                <NeedHelp />
            </View>
        </Page>
    )
}