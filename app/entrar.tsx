import { View } from 'react-native'
import { HighlightedButton, Hr, Input, Link, NeedHelp } from '@/components/LiveExperience'
import { useState } from 'react'
import { Container, FormBox, Header, Label, Title, TitleBox } from '@/components/CommomPages'
import { useAuth } from '@/context/auth'

export default function Enter() {
    const [email, setEmail] = useState('11048424910')
    const [password, setPassword] = useState('experience')
    const [loading, setLoading] = useState(false)

    const { login } = useAuth()

    const onSubmit = () => {
        setLoading(true)

        login(email, password)

        // fetch("https://api.appliveexperience.com.br/app/authentication/login?version=2150", {
        //     "headers": {
        //       "accept": "application/json",
        //       "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
        //       "content-type": "application/json",
        //       "priority": "u=1, i",
        //       "sec-fetch-dest": "empty",
        //       "sec-fetch-mode": "cors",
        //       "sec-fetch-site": "same-site",
        //       "Referer": "https://www.appliveexperience.com.br/",
        //       "Referrer-Policy": "strict-origin-when-cross-origin"
        //     },
        //     body: JSON.stringify({ email, password }),
        //     "method": "POST"
        //   })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false))
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
                    <Input value={password} setValue={setPassword} placeholder="Insira sua senha" secureTextEntry={true} />
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
