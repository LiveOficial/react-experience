import { View } from 'react-native'
import { HighlightedButton, Hr, Input, Link, NeedHelp } from '@/components/LiveExperience'
import { useEffect, useState } from 'react'
import { Container, FormBox, Header, Label, Title, TitleBox } from '@/components/CommomPages'
import { useAuth } from '@/context/auth'
import { router } from 'expo-router'

export default function Enter() {
    const [email, setEmail] = useState('11048424910')
    const [password, setPassword] = useState('experience')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const { login, token } = useAuth()

    useEffect(() => {
        console.log(token)
        if (token !== null) {
            router.push('/perfil')
        }
    }, [token])


    const onSubmit = async () => {
        setError({})
        setLoading(true)
        const success = await login(email, password)
        setLoading(false)

        if (success === true) {
            router.push('/')
        } else {
            setError({ password: 'Credenciais inválidas' })
        }
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
                    <Input error={error.password} value={password} setValue={setPassword} placeholder="Insira sua senha" secureTextEntry={true} />
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
