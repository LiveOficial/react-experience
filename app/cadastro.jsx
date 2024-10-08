import { Text, View } from 'react-native'
import Title from '@/components/Title'
import { useState } from 'react'
import { HighlightedButton, Hr, Input, Label as BaseLabel, Page, NeedHelp } from '@/components/LiveExperience'
import { Header } from '@/components/Header'
import { primary } from '@/constants/Colors'

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

    const header = <Header>Cadastro</Header>

    return (
        <Page padding={10} header={header}>
            <View style={{ display: 'flex', flexDirection: 'column', margin: 'auto', minWidth: 350, maxWidth: 500 }}>
                <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 13 }}>
                    <Title>Faça seu cadastro</Title>
                </View>
                <Row>
                    <Label>Nome completo</Label>
                    <Input value={name} setValue={setName} placeholder="Insira seu nome completo" />
                </Row>
                <Row>
                    <Label>CPF</Label>
                    <Input value={cpf} setValue={setCpf} placeholder="000.000.000-00" />
                </Row>
                <Row>
                    <Label>E-mail</Label>
                    <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail" />
                </Row>
                <Row>
                    <Label>Celular</Label>
                    <Input value={phone} setValue={setPhone} placeholder="Insira seu número de celular" />
                </Row>
                <Row>
                    <Label>Senha</Label>
                    <Input value={password} setValue={setPassword} placeholder="Insira sua senha" />
                </Row>
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Criar Conta
                </HighlightedButton>
                <View style={{ alignItems: 'center', marginTop: 7 }}>
                    <Text style={{ fontSize: 13 }}>Ao assinar nossos serviços, você concorda com nossos</Text>
                    <Text style={{ fontSize: 12, marginTop: 7, fontWeight: 500, fontSize: 14, color: primary }}>Termos de Uso e Políticas de Privacidade</Text>
                </View>
                <Hr marginVertical={10} />
                <NeedHelp />
            </View>
        </Page>
    );
}

function Row({ children }) {
    return (
        <View style={{ marginBottom: 15 }}>
            {children}
        </View>
    )
}

function Label({ children }) {
    return (
        <BaseLabel style={{ marginBottom: 10 }}>
            {children}
        </BaseLabel>
    )
}