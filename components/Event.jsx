import { Image, Pressable, Text, View } from "react-native";

export function Title({ children }) {
    return (
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>
            {children}
        </Text>
    )
}

export function Card({ title, onPress }) {
    return (
        <Pressable onPress={onPress} style={{ backgroundColor: '#fff', width: '48%' }}>
            <Image
                style={{ width: '100%', height: 120 }}
                source={{
                    uri: 'https://imagens.liveoficial.com.br/app-experience/events/2Y73DVXV8iCcFJc7rNGWQw9YLqW51nM2U405sh8k.jpg'
                }}
            />
            <View style={{ padding: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                <Text>Corrida</Text>
                <Text>13/10 - Domingo</Text>
                <Text>Natal - RN</Text>
                <Text>LIVE!</Text>
            </View>
        </Pressable>
    )
}