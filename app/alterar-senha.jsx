import { HighlightedButton, Input } from "@/components/LiveExperience"
import { useState } from "react";
import { View } from "react-native";
import { Container, Header, Title, TitleBox, FormBox, Label, MessageBox, MessageBoxText } from '@/components/CommomPages'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [changed, setChanged] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        setChanged(true);
        setLoading(false);
    }

    return (
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TitleBox>
                    <Title>Alterar senha</Title>
                </TitleBox>
                <MessageBox style={{ alignItems: 'center', marginTop: 30, marginBottom: 7 }}>
                    <MessageBoxText>Senha atualizada com sucesso</MessageBoxText>
                </MessageBox>
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
