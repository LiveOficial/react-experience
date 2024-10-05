import { View, Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link } from 'expo-router'

export default function SingIn() {
    return (
        <View style={{ display: 'flex', gap: 16, padding: 10 }}>
            <Title size={30}>Cadastre-se</Title>
            <Text>Junte-se a nós e faça parte dessa experiência!</Text>
            <BaseInput placeholder="Nome Completo" />
            <BaseInput placeholder="CPF" />
            <BaseInput placeholder="E-mail" />
            <BaseInput placeholder="Celular" />
            <BaseInput placeholder="Senha" />
            <BaseButton>Criar Conta</BaseButton>
            <Text style={{ textAlign: 'center' }}>Não tem uma conta?</Text>
            <Link style={{ textAlign: 'center', textTransform: 'uppercase' }} href="/sing-up">Cadastre-se</Link>
        </View>
    );
}