import { Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar, Home, Mark, Profile } from "./Icons";
import { router, usePathname } from "expo-router";

export default function TabBar() {
    const route = usePathname()

    return (
        <View horizontal blurAmount={10} style={[style.container, { display: route == '/perfil' ? 'none' : 'flex' }]}>
            <Button onPress={() => router.push('/')}>
                <Home />
                <Title>Home</Title>
            </Button>
            <Button onPress={() => router.push('/eventos')}>
                <Mark />
                <Title>Eventos</Title>
            </Button>
            <Button onPress={() => router.push('/calendario')}>
                <Calendar />
                <Title>Calendário</Title>
            </Button>
            <Button onPress={() => router.push('/perfil')}>
                <Profile />
                <Title>Perfil</Title>
            </Button>
        </View>
    )
}

const Title = ({ children, active }) => <Text style={{ fontSize: 12, marginTop: 5, fontWeight: active ? 'bold' : 300 }}>{children}</Text>
const Button = ({ children, onPress }) => <Pressable onPress={onPress} style={{ alignItems: 'center' }}>{children}</Pressable>

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 40
    }
})