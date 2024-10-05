import { View, Text, StyleSheet } from 'react-native'
import Title from '@/components/Title'
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
import { Link } from 'expo-router'

export default function SingIn() {
    return (
        <View style={{ display: 'flex', gap: 16, padding: 10 }}>
            <Title size={30}>Bem-Vindo!</Title>
            <Text style={{ marginVertical: 30 }}>Faça o login ou cadastre-se:</Text>
            <BaseInput placeholder="E-mail ou CPF" />
            <BaseInput placeholder="Senha" />
            <Link href="/forgot-password" style={styles.link}>Esqueci minha senha</Link>
            <BaseButton>Fazer Login</BaseButton>
            <View style={{ display: 'flex', gap: 20, marginTop: 50 }}>
                <Text style={{ textAlign: 'center' }}>Não tem uma conta?</Text>
                <Link href="/sing-up" style={styles.link}>Cadastre-se</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});