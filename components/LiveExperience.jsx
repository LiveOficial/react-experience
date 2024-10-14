import { primary, secondary } from '@/constants/Colors'
import { Link as NativeLink } from 'expo-router'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native'
import { Logo } from "@/components/Icons"
import { LinearGradient } from 'expo-linear-gradient'
import { Help } from '@/components/Icons'

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
        <Pressable onPress={onPress}>
            <Text style={{ color: primary, fontSize: 14, fontWeight: 600 }}>{children}</Text>
        </Pressable>
    )
}

export function HighlightedButton({ children, onPress, loading = false }) {
    return (
        <Pressable onPress={onPress} style={{ backgroundColor: primary, paddingVertical: 13, width: '100%' }}>
            {
                loading ?
                <ActivityIndicator color={secondary} size="small" /> : <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: 500, letterSpacing: .3 }}>{children}</Text>
            }
        </Pressable>
    )
}

export function Hr({ marginVertical = 0 }) {
    return (
        <View style={[styles.hr, { marginVertical: marginVertical }]} />
    )
}

export function Input({ value, setValue, placeholder, secureTextEntry = false }) {
    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor='#6d6d6d'
            style={styles.input}
            secureTextEntry={secureTextEntry}
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

export function NeedHelp({ marginVertical = 30 }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, marginVertical: marginVertical }}>
            <Help />
            <Link href='/ajuda'>
                Precisa de ajuda?
            </Link>
        </View>
    )
}

export function CheckBox({ children, value, setValue }) {
    return (
        <Pressable onPress={() => setValue(!value)} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <View style={{ width: 20, height: 20, backgroundColor: value ? primary : 'transparent', borderRadius: 5, borderWidth: 1, borderColor: primary }} />
            {children}
        </Pressable>
    )
}

export function Footer() {
    const { width, height } = Dimensions.get('window')

    return (
        <View style={{ paddingHorizontal: '5%', padding: 20, backgroundColor: secondary }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <View>
                    <View style={{ marginBottom: 25 }}>
                        <Logo />
                    </View>
                    <Text>Baixe o nosso app LIVE! Experience</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 25 }}>
                        <Text>Google Play</Text>
                        <View style={{ borderRightWidth: 1, borderColor: '#ccc' }} />
                        <Text>App Store</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <View>
                        <Text>LIVE! Experience</Text>
                        <Text>Eventos</Text>
                        <Text>Aulas</Text>
                        <Text>Professores</Text>
                        <Text>Resultados</Text>
                    </View>
                    <View>
                        <Text>Suporte</Text>
                        <Text>Ajuda</Text>
                        <Text>Perguntas frequentes</Text>
                        <Text>Contato</Text>
                    </View>
                    <View>
                        <Text>Informações</Text>
                        <Text>Privacidade</Text>
                        <Text>Politica de privacidade</Text>
                        <Text>Rastreio do uso do App</Text>
                        <Text>Excluir minha conta</Text>
                    </View>
                </View>
            </View>
            <Hr />
            <Text>LIVE! Roupas Esportivas  Ltda. TODOS OS DIREITOS RESERVADOS</Text>
        </View>
    )
}

export function Gradient({ children }) {
    return (
        <LinearGradient colors={['#EFEBE6', '#FAFAFA']}>
            {children}
        </LinearGradient>
    )
}

export function GradientRun() {
    return (
        <LinearGradient colors={['#A31F22', '#D3842C', '#D6892C', '#F3BA30', '#FFCD32', '#FFCD32']} style={{ height: 1 }} />
    )
}
