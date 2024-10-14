import { Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar, Home, Mark, Profile } from "./Icons";
import { router, usePathname } from "expo-router";
import { primary } from "@/constants/Colors";

export default function TabBar() {
    const currentRoute = usePathname()
    const iconSize = 22

    return (
        <View horizontal style={[style.container, { display: currentRoute == '/perfil' ? 'none' : 'flex' }]}>
            <Button onPress={() => router.push('/')}>
                <Home color={currentRoute === '/' ? primary : 'black' } size={iconSize} />
                <Title active={currentRoute === '/'}>Home</Title>
            </Button>
            <Button onPress={() => router.push('/eventos')}>
                <Mark color={currentRoute === '/eventos' ? primary : 'black' } size={iconSize} />
                <Title active={currentRoute === '/eventos'}>Eventos</Title>
            </Button>
            <Button onPress={() => router.push('/calendario')}>
                <Calendar color={currentRoute === '/calendario' ? primary : 'black' } size={iconSize} />
                <Title active={currentRoute === '/calendario'}>Calendário</Title>
            </Button>
            <Button onPress={() => router.push('/perfil')}>
                <Profile color={currentRoute === '/perfil' ? primary : 'black' } size={iconSize} />
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