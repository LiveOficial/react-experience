import { body, danger, greenText, primary, secondary } from '@/constants/Colors'
import { Link as NativeLink } from 'expo-router'
import { Dimensions, Pressable, ScrollView, Text, TextInput, View, ActivityIndicator, Modal as NativeModal, Platform } from 'react-native'
import { Logo, Times, Help } from "@/components/Icons"
import { LinearGradient } from 'expo-linear-gradient'

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

export function HighlightedButton({ children, loading = false, ...props }) {
    return (
        <Pressable style={{ backgroundColor: primary, paddingVertical: 13, width: '100%' }} {...props}>
            {
                loading ?
                <Loader color={secondary} /> : <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontWeight: 500, letterSpacing: .3 }}>{children}</Text>
            }
        </Pressable>
    )
}

export const Hr = (props) => <View style={{ width: '100%', height: 1, backgroundColor: '#EFEBE6' }} {...props} />

export function Input({ style, error, ...props }) {
    const readOnly = !!props?.readOnly
    const errorText = Array.isArray(error) ? error.join(', ') : error

    return (
        <>
            <TextInput
                placeholderTextColor='#6d6d6d'
                style={{ width: '100%', borderBottomWidth: 1, borderStyle: 'solid', padding: 10, paddingVertical: 20, backgroundColor: readOnly ? '#EFEBE6' : '#ffffff', borderColor: '#c4ad9f', ...style }}
                {...props}
            />
            {error && <Text style={{ fontSize: 11, color: danger, marginTop: 5 }}>{errorText}</Text>}
        </>
    )
}

export function Link({ children, href, style }) {
    return (
        <NativeLink href={href} style={{ color: primary, fontWeight: 500, ...style }}>
            {children}
        </NativeLink>
    )
}

export function Label({ children, style }) {
    return (
        <Text style={{ fontWeight: 500, ...style }}>
            {children}
        </Text>
    )
}

export function NeedHelp({ style }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, ...style }}>
            <Help color={primary} />
            <Link href='/ajuda'>
                Precisa de ajuda?
            </Link>
        </View>
    )
}

export function CheckBox({ children, value, setValue }) {
    return (
        <Pressable onPress={() => setValue(!value)} style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <View style={{ width: 20, height: 20, backgroundColor: value ? primary : 'transparent', borderRadius: 3, borderWidth: 1.5, borderColor: primary }} />
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

export function GradientRun({ height = 1 }) {
    return (
        <LinearGradient colors={['#A31F22', '#D3842C', '#D6892C', '#F3BA30', '#FFCD32', '#FFCD32']} start={{ x: 0, y: 0 }} style={{ height: height }} />
    )
}

export function Modal({ children, visible, setVisible }) {
    return (
      <>
        {visible && <Pressable onPress={() => setVisible(false)} style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', top: 0 }}></Pressable>}
        <NativeModal transparent={true} animationType='slide' visible={visible} onRequestClose={() => setVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 10, paddingBottom: 30 }}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Pressable onPress={() => setVisible(false)} style={{ padding: 20 }}>
                  <Times color={primary} size={25} />
                </Pressable>
              </View>
              {children}
            </View>
          </View>
        </NativeModal>
      </>
    )
}

export function ContentLoads({ children, loading }) {
    return (
        <>
            {loading ? <Loader /> : children}
        </>
    )
}

export function Loader(props) {
    return (
        <ActivityIndicator size="small" {...props} />
    )
}

export function Status({ status }) {
    const statuses = {
        1: {
            color: primary,
            text: 'Aguardando pagamento',
        },
        2: {
            color: greenText,
            text: 'Confirmado',
        },
        3: {
            color: danger,
            text: 'Cancelado',
        }
    }

    return (
        <Text style={[{ color: statuses[status].color }, { borderColor: statuses[status].color, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, fontSize: 12, borderRadius: 13, fontWeight: 500 }]}>
            {statuses[status].text}
        </Text>
    )
}

export const Radio = {
    Group: ({ children }) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                {children}
            </View>
        )
    },
    Option: ({ children, selected, onPress }) => {
        return (
            <Pressable style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center', paddingVertical: 5 }} onPress={onPress}>
                <View style={{ display:'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: 50, borderWidth: 1.5, borderColor: primary }}>
                    {selected && <View style={{ width: 13, height: 13, borderRadius: 50, backgroundColor: '#f38532' }} />}
                </View>
                {children}
            </Pressable>
        )
    }
}

export function SafeAreaView({ children, color = body }) {
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android'

    return (
        <ScrollView style={{ paddingTop: isMobile ? 50 : 0, backgroundColor: color, flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }} >
            {children}
        </ScrollView>
    )
}