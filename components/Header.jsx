import { secondary } from "@/constants/Colors"
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import Logo from "./Logo"

export function Header({ children }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: secondary, paddingVertical: 25 }}>
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
