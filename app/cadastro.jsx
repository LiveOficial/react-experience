import { Pressable, Text, View } from 'react-native'
import { HighlightedButton, Hr, Input, NeedHelp, Modal } from '@/components/LiveExperience'
import { primary } from '@/constants/Colors'
import { Container, Header, Title, Label, TitleBox } from '@/components/CommomPages'
import { useState } from 'react'
import { useAuth } from '@/context/auth'
import { router } from 'expo-router'
import api from '@/hooks/api'

export default function SingIn() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [document, setDocument] = useState(null)
    const [cellphone, setCellphone] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [terms, setTerms] = useState(true)

    const { setToken, saveToken } = useAuth()

    const onSubmit = () => {
        setLoading(true)

        const data = {
            name,
            email,
            document,
            cellphone,
            password
        }

        api.post('user/register', data)
            .then(({ data: { token, user } }) => {
                setToken(token)
                saveToken(token)
                router.push('/perfil')
            })
            .catch(({ response: { data: { errors } } }) => setErrors(errors))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <Container>
                <Header />
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <TitleBox>
                        <Title>Faça seu cadastro</Title>
                    </TitleBox>
                    <FormBox>
                        <Label>Nome completo</Label>
                        <Input error={errors.name} value={name} onChangeText={setName} placeholder="Insira seu nome completo" />
                    </FormBox>
                    <FormBox>
                        <Label>CPF</Label>
                        <Input error={errors.document} value={document} onChangeText={setDocument} placeholder="000.000.000-00" />
                    </FormBox>
                    <FormBox>
                        <Label>E-mail</Label>
                        <Input error={errors.email} value={email} onChangeText={setEmail} placeholder="Insira seu e-mail" />
                    </FormBox>
                    <FormBox>
                        <Label>Celular</Label>
                        <Input error={errors.cellphone} value={cellphone} onChangeText={setCellphone} placeholder="Insira seu número de celular" />
                    </FormBox>
                    <FormBox>
                        <Label>Senha</Label>
                        <Input error={errors.password} value={password} onChangeText={setPassword} placeholder="Insira sua senha" secureTextEntry={true} />
                    </FormBox>
                    <View style={{ marginVertical: 5 }}>
                        <HighlightedButton onPress={onSubmit} loading={loading}>
                            Criar Conta
                        </HighlightedButton>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 20 }}>
                        <Text style={{ fontSize: 13 }}>Ao assinar nossos serviços, você concorda com nossos</Text>
                        <Pressable onPress={() => setTerms(true)}>
                            <Text style={{ fontSize: 12, marginTop: 7, fontWeight: 500, fontSize: 14, color: primary }}>Termos de Uso e Políticas de Privacidade</Text>
                        </Pressable>
                    </View>
                    <Hr marginVertical={15} />
                    <NeedHelp style={{ marginVertical: 20 }} />
                </View>
            </Container>
            <Modal visible={terms} setVisible={setTerms}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text>wwwwwwwwwwwwwwwwww</Text>
                </View>
            </Modal>
        </>
    )
}

const FormBox = ({ children, ...props }) => <View style={{ marginBottom: 20 }} {...props}>{children}</View>