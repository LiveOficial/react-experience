import { View, Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link, Page } from '@/components/LiveExperience'
import { useState } from 'react'

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
        <Page padding={10}>
            <Title>Esqueceu sua senha?</Title>
            <Text>Informe seu e-mail ou CPF para recuperar o acesso a sua conta:</Text>
            <BaseInput value={email} setValue={setEmail} placeholder="E-mail ou CPF" />
            <BaseButton onPress={onSubmit} loading={loading}>Enviar</BaseButton>
            <Text>Você receberá um e-mail com as instruções para
                <Text style={{ fontWeight: 'bold' }}>redefinir sua senha</Text>
            </Text>
            <View>
                <Text>{response}</Text>
            </View>
            <Link href="/home">Voltar ao menu principal</Link>
        </Page>
    )
}