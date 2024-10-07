import BaseInput from "@/components/BaseInput";
import { HighlightedButton, Page } from "@/components/LiveExperience";
import { useState } from "react";
import { View } from "react-native";

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
    }

    return (
        <Page padding={10}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <BaseInput value={currentPassword} setValue={setCurrentPassword} placeholder="Senha atual" />
                <BaseInput value={newPassword} setValue={setNewPassword} placeholder="Nova senha" />
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Alterar Senha
                </HighlightedButton>
            </View>
        </Page>
    )
}