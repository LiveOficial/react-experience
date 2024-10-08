import { primary } from '@/constants/Colors'
import { Link as NativeLink } from 'expo-router'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Page({ children, header, padding = 0 }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fafafa' }}>
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
        <Pressable onPress={onPress} style={{ backgroundColor: primary, padding: 10, width: '100%' }}>
            {
                loading ?
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase', fontSize: 13 }}>Loading...</Text> :
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: 500, letterSpacing: .3 }}>{children}</Text>
            }
        </Pressable>
    )
}

export function Hr({ marginVertical = 0 }) {
    return (
        <View style={[styles.hr, { marginVertical: marginVertical }]} />
    )
}

export function Input({ value, setValue, placeholder }) {
    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor='#6d6d6d'
            style={styles.input}
        />
    )
}

export function Link({ children, href, style = {} }) {
    return (
        <NativeLink href={href} style={[{ color: primary, fontWeight: 500 }, style]}>
            {children}
        </NativeLink>
    )
}

export function Label({ children, style = {} }) {
    return (
        <Text style={[style, { fontWeight: 500 }]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        paddingVertical: 15,
        marginBottom: 3,
        backgroundColor: '#ffffff',
        borderColor: '#c4ad9f',
    }
})

export function NeedHelp() {
    return (
        <Link href={'/ajuda'} style={{ textAlign: 'center', marginTop: 30 }}>
            Precisa de ajuda?
        </Link>
    )
}