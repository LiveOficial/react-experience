import { View, Text } from 'react-native'
import Title from '@/components/Title'
import BaseInput from '@/components/BaseInput'
import { Page, HighlightedButton, Hr } from '@/components/LiveExperience'
import { useState } from 'react'
import { Link } from 'expo-router'
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

    const header = <Header right={'teste'} left={'teste'}>Esqueci minha senha</Header>

    return (
        <Page padding={10} header={header}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Title>Esqueceu sua senha?</Title>
                <Text>Informe seu e-mail ou CPF para recuperar o acesso a sua conta:</Text>
                <BaseInput value={email} setValue={setEmail} placeholder="E-mail ou CPF" />
                <HighlightedButton onPress={onSubmit} loading={loading}>Enviar</HighlightedButton>
                <Text>Você receberá um e-mail com as instruções para
                    <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>redefinir sua senha</Text>
                </Text>
                <View>
                    <Text>{response}</Text>
                </View>
                <Link href="/" style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: 100 }}>Voltar ao menu principal</Link>
                <Hr />
                <Link href="/ajuda" style={{ textDecorationLine: 'underline' }}>? Ajuda</Link>
            </View>
        </Page>
    )
}