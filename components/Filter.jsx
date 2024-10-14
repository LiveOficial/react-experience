import { CheckBox as LiveExpCheckBox } from '@/components/LiveExperience'
import { primary } from '@/constants/Colors'
import { Pressable, Text, View } from 'react-native'

export function Title({ children }) {
    return (
        <Text style={{ fontWeight: 500, fontSize: 20 }}>
            {children}
        </Text>
    )
}

export function FloatingBox({ children }) {
    return (
        <View style={{ position: 'fixed', bottom: 0, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, padding: 20, paddingBottom: 40 }}>
            {children}
        </View>
    )
}

export const CheckBox = {
    Grid: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>{children}</View>,
    CheckBox: ({ children }) => <LiveExpCheckBox>{children}</LiveExpCheckBox>,
    Title: ({ children }) => <Text style={{ fontWeight: 500, fontSize: 15 }}>{children}</Text>
}

export function FilterButton({ onPress }) {
    return (
        <HeaderButton icon={<Filter />} onPress={onPress}>
            Filtro
        </HeaderButton>
    )
}

export function ColoredButton({ children, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Text style={{ color: primary, fontWeight: 500, fontSize: 15 }}>
                {children}
            </Text>
        </Pressable>
    )
}