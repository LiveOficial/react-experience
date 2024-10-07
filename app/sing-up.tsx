import { Text, View } from 'react-native'
import Title from '@/components/Title'
import BaseInput from '@/components/BaseInput'
import { useState } from 'react'
import { HighlightedButton, Hr, Page } from '@/components/LiveExperience'
import { Link } from 'expo-router'

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
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Title size={30}>Cadastre-se</Title>
                <Text style={{ marginVertical: 15 }}>Junte-se a nós e faça parte dessa experiência!</Text>
                <BaseInput value={name} setValue={setName} placeholder="Nome Completo" />
                <BaseInput value={cpf} setValue={setCpf} placeholder="CPF" />
                <BaseInput value={email} setValue={setEmail} placeholder="E-mail" />
                <BaseInput value={phone} setValue={setPhone} placeholder="Celular" />
                <BaseInput value={password} setValue={setPassword} placeholder="Senha" />
                <HighlightedButton onPress={onSubmit} loading={loading}>Criar Conta</HighlightedButton>
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 12 }}>Ao assinar nossos serviços, você concorda com nossos</Text>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 12 }}>Termos de Uso e Políticas de Privacidade.</Text>
                </View>
                <Hr marginVertical={10} />
                <Link href={'/ajuda'} style={{ textDecorationLine: 'underline', fontSize: 12 }}>? Ajuda</Link>
            </View>
        </Page>
    );
}