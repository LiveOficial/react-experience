import { Text, View } from "react-native";

export default function Treinadores() {
    const { slug } = this.params

    return (
        <View>
            <Text>Treinador: {slug}</Text>
        </View>
    )
}