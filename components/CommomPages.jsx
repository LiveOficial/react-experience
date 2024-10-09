import { ScrollView, Text, View } from "react-native";
import { Logo } from "@/components/Icons"
import { body } from "@/constants/Colors";
import { Label as BaseLabel } from '@/components/LiveExperience'

export function Container({ children }) {
    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingTop: 50 }}>
            {children}
        </ScrollView>
    )
}

export function TitleBox({ children }) {
    return (
        <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 13 }}>
            {children}
        </View>
    )
}

export function Title({ children }) {
    return (
        <Text style={{ fontSize: 20 }}>
            {children}
        </Text>
    )
}

export function Header() {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginVertical: 60 }}>
            <Logo />
        </View>
    );
}

export function FormBox({ children }) {
    return (
        <View style={{ marginBottom: 15 }}>
            {children}
        </View>
    )
}

export function Label({ children }) {
    return (
        <BaseLabel style={{ marginBottom: 10 }}>
            {children}
        </BaseLabel>
    )
}

export function MessageBox({ children }) {
    return (
        <View style={{ marginBottom: 25, backgroundColor: '#f5f3ef', padding: 20 }}>
            {children}
        </View>
    )
}

export function MessageBoxText({ children }) {
    return (
        <Text style={{ color: '#587211', fontWeight: 500 }}>
            {children}
        </Text>
    )
}