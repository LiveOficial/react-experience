import { HighlightedButton, Input } from "@/components/LiveExperience"
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Container, Header, Title, TitleBox, FormBox, Label } from '@/components/CommomPages'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [changed, setChanged] = useState(true);

    const onSubmit = () => {
        setLoading(true);
        setChanged(true);
        setLoading(false);
    }

    return (
        <Container>
            <Header />
            <View style={{ display: 'flex', flexDirection: 'column', margin: 'auto', minWidth: 350, maxWidth: 500 }}>
                <TitleBox>
                    <Title>Alterar senha</Title>
                </TitleBox>
                {!changed ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <MessageBox style={{ alignItems: 'center', marginTop: 30, marginBottom: 7 }}>
                            <MessageBoxText>Senha alterada com sucesso!</MessageBoxText>
                        </MessageBox>
                        <HighlightedButton onPress={() => { router.push('/') } }>
                            Voltar 
                        </HighlightedButton>
                    </>
                )}
            </View>
        </Container>
    )
}
