import { HighlightedButton, Input } from "@/components/LiveExperience"
import { useState } from "react";
import { View } from "react-native";
import { Container, Header, Title, TitleBox, FormBox, Label, Alert } from '@/components/CommomPages'
import api from '@/hooks/api'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [changed, setChanged] = useState(false);

    const onSubmit = () => {
        setLoading(true)
        api.post('change-password', { currentPassword, newPassword })
            .then(() => {
                setChanged(true)
            })
            .finally(() => setLoading(false))
    }

    return (
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TitleBox>
                    <Title>Alterar senha</Title>
                </TitleBox>
                <View style={{ marginVertical: 30 }}>
                    <Alert.Box>
                        <Alert.Message>Senha atualizada com sucesso</Alert.Message>
                    </Alert.Box>
                </View>
                <FormBox>
                    <Label>Senha atual</Label>
                    <Input value={currentPassword} setValue={setCurrentPassword} placeholder="Insira a senha" />
                </FormBox>
                <FormBox>
                    <Label>Nova senha</Label>
                    <Input value={newPassword} setValue={setNewPassword} placeholder="Insira a senha" />
                </FormBox>
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Alterar Senha
                </HighlightedButton>
            </View>
        </Container>
    )
}
