import { View } from 'react-native'
import Title from '@/components/Title'
import { HighlightedButton, Hr, Input, Label, Link, Page, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Header } from '@/components/Header'

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

    const header = <Header>Meu Perfil</Header>

    return (
        <Page padding={10} header={header}>
            <View style={{ display: 'flex', flexDirection: 'column', margin: 'auto', minWidth: 350, maxWidth: 500 }}>
                <View style={{ alignItems: 'center', marginVertical: 30 }}>
                    <Title>Faça seu login</Title>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <Label style={{ marginBottom: 5 }}>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail ou CPF" />
                </View>
                <View style={{ marginBottom: 7 }}>
                    <Label>Senha</Label>
                    <Input value={password} setValue={setPassword} placeholder="Insira sua senha" />
                </View>
                <Link href="/esqueci-minha-senha" style={{ textAlign: 'right', marginRight: 15, marginBottom: 25 }}>
                    Esqueci minha senha
                </Link>
                <HighlightedButton loading={loading} onPress={onSubmit}>
                    Entrar
                </HighlightedButton>
                <Link href="/cadastro" style={{ textAlign: 'center', marginTop: 15, marginBottom: 40 }}>
                    Primeira vez aqui? Cadastre-se
                </Link>
                <Hr />
                <NeedHelp />
            </View>
        </Page>
    )
}
