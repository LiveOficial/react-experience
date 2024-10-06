import { View, Text} from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link, Page } from '@/components/LiveExperience'
import { useState } from 'react'

export default function SingIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)
    }

    return (
        <Page padding={10}>
            <Title size={30}>Bem-Vindo!</Title>
            <Text style={{ marginVertical: 20 }}>Faça o login ou cadastre-se:</Text>
            <BaseInput value={email} setValue={setEmail} placeholder="E-mail ou CPF" />
            <BaseInput value={password} setValue={setPassword} placeholder="Senha" />
            <Link href="/forgot-password">Esqueci minha senha</Link>
            <BaseButton loading={loading} onPress={onSubmit}>Fazer Login</BaseButton>
            <View style={{ display: 'flex', gap: 20, marginTop: 50 }}>
                <Text style={{ textAlign: 'center' }}>Não tem uma conta?</Text>
                <Link href="/sing-up">Cadastre-se</Link>
            </View>
        </Page>
    );
}
