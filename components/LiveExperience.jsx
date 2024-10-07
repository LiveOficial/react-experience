import { primary } from '@/constants/Colors'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export function Page({ children, padding = 0 }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'column' }} style={{ backgroundColor: '#fff', padding: padding }}>
            {children}
        </ScrollView>
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

export function Header({ title, right, left }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15 }}>
            {right}
            <Text style={{ fontWeight: 500, textTransform: 'uppercase' }}>{title}</Text>
            {left}
        </View>
    )
}

export function Logo() {
    return (
        <Image
            source={{
                uri: 'https://imagens.liveoficial.com.br/app-experience/banners/31puFoRvKD920Ji5Hm0TggWnKu6GvhPM4psf8DNO.jpg',
                width: 300,
                height: 100
            }}
        />
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