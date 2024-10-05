import { Image, StyleSheet, Text, View } from "react-native"

export default function Home() {
    return (
        <View>
            <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Blog LIVE!</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://blog.liveoficial.com.br/wp-content/uploads/2024/09/SaveClip.App_461259581_869777821475104_1997755766220596861_n.jpg'
                    }}
                />
                <Text style={{ fontWeight: 500 }}>Como Escolher a Roupa Fitness Ideal para a Primavera: Dicas de Estilo e Conforto</Text>
                <Text>TEAM LIVE!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 100,
      height: 100,
    },
})