import { Text } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { useState } from 'react'
import { Page } from '@/components/LiveExperience'

export default function SingIn() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)
    }

    return (
        <Page padding={10}>
            <Title size={30}>Cadastre-se</Title>
            <Text style={{ marginVertical: 40 }}>Junte-se a nós e faça parte dessa experiência!</Text>
            <BaseInput value={name} setValue={setName} placeholder="Nome Completo" />
            <BaseInput value={cpf} setValue={setCpf} placeholder="CPF" />
            <BaseInput value={email} setValue={setEmail} placeholder="E-mail" />
            <BaseInput value={phone} setValue={setPhone} placeholder="Celular" />
            <BaseInput value={password} setValue={setPassword} placeholder="Senha" />
            <BaseButton onPress={onSubmit}>Criar Conta</BaseButton>
        </Page>
    );
}