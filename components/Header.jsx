import { secondary } from "@/constants/Colors"
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import Logo from "./Logo"

export function Header({ children, style = { display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingVertical: 25, padding: 0 } }) {
    return (
        <View style={[{ backgroundColor: secondary }, style]}>
            <Logo />
        </View>
    )
}

export function ButtonBack() {
    const onPress = () => {
        router.back()
    }

    return (
        <Pressable onPress={onPress}>
            <Text>Voltar</Text>
        </Pressable>
    )
}
