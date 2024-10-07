import { primary } from '@/constants/Colors'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export function Page({ children, header, padding = 0 }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
                {header}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'column' }} style={{ padding: padding }}>
                    {children}
                </ScrollView>
            </ScrollView>
        </>
    )
}

export function PageTitle({ children }) {
    return (
        <Text style={{ fontSize: 10 }}>{children}</Text>
    )
}

export function Button({ children, onPress, style = {} }) {
    return (
        <Pressable onPress={onPress}>
            <Text style={style}>
                {children}
            </Text>
        </Pressable>
    )
}

export function SmallButton({ children, onPress }) {
    return (
        <Button onPress={onPress} style={{ textTransform: 'uppercase', fontSize: 11 }}>
            {children}
        </Button>
    )
}

export function HighlightedButton({ children, onPress, loading = false }) {
    return (
        <Pressable onPress={onPress} style={{ backgroundColor: primary, padding: 7, width: '100%' }}>
            {
                loading ?
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase', fontSize: 13 }}>Loading...</Text> :
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase', fontSize: 13 }}>{children}</Text>
            }
        </Pressable>
    )
}

export function Hr({ marginVertical = 0 }) {
    return (
        <View style={[styles.hr, { marginVertical: marginVertical }]} />
    )
}

const styles = StyleSheet.create({
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
    }
})