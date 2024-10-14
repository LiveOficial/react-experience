import { Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar, Home, Mark, Profile } from "./Icons";
import { router, usePathname } from "expo-router";
import { primary } from "@/constants/Colors";

export default function TabBar() {
    const currentRoute = usePathname()

    return (
        <View horizontal style={[style.container, { display: currentRoute == '/perfil' ? 'none' : 'flex' }]}>
            <Button onPress={() => router.push('/')}>
                <Home />
                <Title active={currentRoute === '/'}>Home</Title>
            </Button>
            <Button onPress={() => router.push('/eventos')}>
                <Mark color={currentRoute === '/eventos' ? primary : 'black' } size={25} />
                <Title active={currentRoute === '/eventos'}>Eventos</Title>
            </Button>
            <Button onPress={() => router.push('/calendario')}>
                <Calendar />
                <Title active={currentRoute === '/calendario'}>Calendário</Title>
            </Button>
            <Button onPress={() => router.push('/perfil')}>
                <Profile />
                <Title active={currentRoute === '/perfil'}>Perfil</Title>
            </Button>
        </View>
    )
}

const Title = ({ children, active }) => <Text style={{ fontSize: 12, marginTop: 5, fontWeight: active ? 'bold' : 300, color: active ? primary : 'black' }}>{children}</Text>
const Button = ({ children, onPress }) => <Pressable onPress={onPress} style={{ alignItems: 'center', flexGrow: 1, paddingBottom: 40, paddingTop: 20 }}>{children}</Pressable>

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})