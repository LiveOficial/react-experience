import { ScrollView, Text, View } from "react-native";
import { Logo, SuccessCheck } from "@/components/Icons"
import { body, greenText } from "@/constants/Colors";
import { Label as BaseLabel } from '@/components/LiveExperience'

export function Container({ children }) {
    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20 }}>
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
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 120, paddingBottom: 40 }}>
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

export const Alert = {
    Box: ({ children }) => {
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f3ef',
                gap: 10,
                padding: 20,
            }}>
                <SuccessCheck color={greenText} />
                {children}
            </View>
        )
    },
    Message: ({ children }) => <Text style={{ color: greenText, fontWeight: 500, flexShrink: 1 }}>{children}</Text>
}