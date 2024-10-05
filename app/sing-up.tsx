import { View, Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link } from 'expo-router'

export default function SingIn() {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <Title>Bem-Vindo!</Title>
            <Text>Faça o login ou cadastre-se</Text>
            <BaseInput placeholder="E-mail ou CPF" />
            <BaseInput placeholder="Senha" />
            <Link href="/reset-password" style={{ textTransform: 'uppercase' }}>Esqueci minha senha</Link>
            <BaseButton>Fazer Login</BaseButton>
            <Text>Não tem uma conta?</Text>
            <Link href="/sing-up" style={{ textTransform: 'uppercase' }}>Cadastre-se</Link>
        </View>
    );
}