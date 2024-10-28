import { HighlightedButton, Input } from "@/components/LiveExperience"
import { Pressable, ScrollView, Text, View } from "react-native";
import { body, primary } from "@/constants/Colors"
import { FormBox, Label, Alert } from '@/components/CommomPages'
import { ChevronLeft } from '@/components/Icons'
import { useState } from "react";
import router from 'expo-router'
import api from '@/hooks/api'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('132567888888');
    const [newPassword, setNewPassword] = useState('132567');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        setLoading(true)

        const data = {
            current_password: currentPassword,
            new_password: newPassword
        }

        api.post('user/change-password', data)
            .then(({ data: { message } }) => setMessage(message))
            .catch(e => setErrors(e.response.data.errors))
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} />
                </Pressable>
                <Text style={{ fontSize: 20 }}>Alterar senha</Text>
                <View style={{ padding: 20 }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
                {message && <View style={{ marginVertical: 30 }}>
                    <Alert.Box>
                        <Alert.Message>{message}</Alert.Message>
                    </Alert.Box>
                </View>}
                <FormBox>
                    <Label>Senha atual</Label>
                    <Input error={errors?.current_password} value={currentPassword} setValue={setCurrentPassword} placeholder="Insira a senha" />
                </FormBox>
                <FormBox>
                    <Label>Nova senha</Label>
                    <Input error={errors?.new_password} value={newPassword} setValue={setNewPassword} placeholder="Insira a senha" />
                </FormBox>
                <HighlightedButton onPress={onSubmit} loading={loading}>
                    Alterar Senha
                </HighlightedButton>
            </View>
        </ScrollView>
    )
}
