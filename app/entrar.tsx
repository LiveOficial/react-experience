import { View } from 'react-native'
import { HighlightedButton, Hr, Input, Link, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Container, FormBox, Header, Label, Title, TitleBox } from '@/components/CommomPages'

export default function Enter() {
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
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TitleBox>
                    <Title>Faça seu login</Title>
                </TitleBox>
                <FormBox>
                    <Label>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail ou CPF" />
                </FormBox>
                <FormBox>
                    <Label>Senha</Label>
                    <Input value={password} setValue={setPassword} placeholder="Insira sua senha" />
                </FormBox>
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
        </Container>
    )
}
