import { View, Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link } from 'expo-router'

export default function ForgotPassword() {
    return (
        <View>
            <Title>Esqueceu sua senha?</Title>
            <Text>Informe seu e-mail ou CPF para recuperar o acesso a sua conta:</Text>
            <BaseInput placeholder="E-mail ou CPF" />
            <BaseButton>Enviar</BaseButton>
            <Text>Você receberá um e-mail com as instruções para
                <Text style={{ fontWeight: 'bold' }}>redefinir sua senha</Text>
            </Text>
            <Link href="/home">Voltar ao menu principal</Link>
        </View>
    )
}