import { Header } from "@/components/Header";
import { HighlightedButton, Input, Label as BaseLabel, Page, BoxMessage, BoxMessageTitle } from "@/components/LiveExperience"
import Title from '@/components/Title'
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

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

    const header = <Header>dddddd</Header>

    return (
        <Page padding={10} header={header}>
            <View style={{ display: 'flex', flexDirection: 'column', margin: 'auto', minWidth: 350, maxWidth: 500 }}>
                <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 7 }}>
                    <Title>Alterar senha</Title>
                </View>
                {!changed ? (
                    <>
                        <Row>
                            <Label>Senha atual</Label>
                            <Input value={currentPassword} setValue={setCurrentPassword} placeholder="Insira a senha" />
                        </Row>
                        <Row>
                            <Label>Nova senha</Label>
                            <Input value={newPassword} setValue={setNewPassword} placeholder="Insira a senha" />
                        </Row>
                        <HighlightedButton onPress={onSubmit} loading={loading}>
                            Alterar Senha
                        </HighlightedButton>
                    </>
                ) : (
                    <>
                        <BoxMessage style={{ alignItems: 'center', marginTop: 30, marginBottom: 7 }}>
                            <BoxMessageTitle>Senha alterada com sucesso!</BoxMessageTitle>
                        </BoxMessage>
                        <HighlightedButton onPress={() => { router.push('/') } }>
                            Voltar 
                        </HighlightedButton>
                    </>
                )}
            </View>
        </Page>
    )
}

function Label({ children }) {
    return (
        <BaseLabel style={{ marginBottom: 10 }}>
            {children}
        </BaseLabel>
    )
}

function Row({ children }) {
    return (
        <View style={{ marginBottom: 15 }}>
            {children}
        </View>
    )
}