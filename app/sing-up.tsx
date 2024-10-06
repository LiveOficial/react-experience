import { Alert, Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import BasePage from '@/components/BasePage'
import { useState } from 'react'

export default function SingIn() {
    const errors = useState([])

    const onSubmit = () => {
        Alert.alert('submit')
    }

    return (
        <BasePage style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 16  }}>
            <Title size={30}>Cadastre-se</Title>
            <Text style={{ marginVertical: 40 }}>Junte-se a nós e faça parte dessa experiência!</Text>
            <BaseInput placeholder="Nome Completo" />
            <BaseInput placeholder="CPF" />
            <BaseInput placeholder="E-mail" />
            <BaseInput placeholder="Celular" />
            <BaseInput placeholder="Senha" />
            <BaseButton onPress={onSubmit}>
                Criar Conta
            </BaseButton>
        </BasePage>
    );
}