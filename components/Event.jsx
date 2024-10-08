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
        <Pressable onPress={onPress} style={{ backgroundColor: '#fff', width: '100%' }}>
            <Image
                style={{ width: '100%', height: 220 }}
                source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/9821/6eb6/dae7668912b66a4de8a4cd76096bb28f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i4f8yautv4KZ4pxO7vuPwUjnUlB1BibBklElgmhO7idXtalbNkuIBWPgzv9q~hJBzVthqCXydF9zVIoHzAQhraKuJl9U81XsMD0F~xt~vlknTzWyfAYFy1~RSjS2Iuv793Bbmo6k7I78XCFXYlp6CwFKVoPiHVMcHTQsY8OWppJEMSeM-dDoPPWJSfOJIfOZlNL0lNZqx4xihPQTsP1-1jxIavGmqvggqhhWFQfe1dpRJe9piHqsGys~eISBBnDh5W0DjGpnXQtXBJBi6VDl1BHA~BrrKP7u6O5sEqAGhfNjH80eJTMhXlQdxCpwcqkZZz6pKOz~g5iLivMUzJvTyw__'
                }}
            />
            <View style={{ padding: 5 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View>
                        <Text style={{ fontWeight: 500, fontSize: 20 }}>{title}</Text>
                        <Text>Rio de Janeiro</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column'}}>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>30</Text>
                        <Text style={{ fontWeight: 500 }}>SET</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}