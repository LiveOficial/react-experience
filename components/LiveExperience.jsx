import { Link as ExpoLink } from 'expo-router'
import { ScrollView, Text } from 'react-native'

export function Link({ children, href }) {
    return (
        <ExpoLink style={{ color: '#000', textTransform: 'uppercase', textAlign: 'center' }} href={href}>
            {children}
        </ExpoLink>
    )
}

export function Page({ children, padding = 0 }) {
    return (
        <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column', gap: 16 }} style={{ backgroundColor: '#fff', padding: padding }}>
            {children}
        </ScrollView>
    )
}

export function PageTitle({ children }) {
    return (
        <Text style={{ fontSize: 10 }}>{children}</Text>
    )
}