import { View, Text, StyleSheet} from 'react-native'
import Title from '@/components/Title'
import BaseInput from '@/components/BaseInput'
import { HighlightedButton, Hr, Page } from '@/components/LiveExperience'
import { useState } from 'react'
import { Link } from 'expo-router'

export default function SingIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)

        fetch('https://api.appliveexperience.com.br/app/authentication/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    return (
        <Page padding={10}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Title size={30}>Bem-Vindo!</Title>
                <Text style={{ marginVertical: 20 }}>Faça o login ou cadastre-se:</Text>
                <BaseInput value={email} setValue={setEmail} placeholder="E-mail ou CPF" />
                <BaseInput value={password} setValue={setPassword} placeholder="Senha" />
                <Link href="/forgot-password" style={[style.link, { marginVertical: 5 }]}>Esqueci minha senha</Link>
                <HighlightedButton loading={loading} onPress={onSubmit}>Fazer Login</HighlightedButton>
                <View style={{ display: 'flex', gap: 20, marginTop: 50, marginBottom: 20 }}>
                    <Text style={{ textAlign: 'center' }}>Não tem uma conta?</Text>
                    <Link href="/sing-up" style={style.link}>Cadastre-se</Link>
                </View>
                <Hr />
                <Link href={'/ajuda'} style={{ textDecorationLine: 'underline', fontSize: 12 }}>? Ajuda</Link>
            </View>
        </Page>
    );
}

const style = StyleSheet.create({
    link: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 13
    }
})