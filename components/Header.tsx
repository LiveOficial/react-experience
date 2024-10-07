import { router } from "expo-router"
import { Image, Pressable, View } from "react-native"

export function Header({ children, right: string = null, left = null }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15 }}>
            {left && <ButtonBack />}
            {children}
            {right}
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