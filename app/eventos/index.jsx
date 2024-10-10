import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { ChevronLeft, Point, Search, Order, Filter } from "@/components/Icons";
import { primary, secondary, body } from "@/constants/Colors";
import { Button } from "@/components/LiveExperience";
import { router } from "expo-router";

export default function Events() {
    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 40 }}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Button onPress={() => router.back()}>
                        <ChevronLeft />
                    </Button>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Eventos</Text>
                    </View>
                    <View />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 25 }}>
                    <SearchInput />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomButton icon={<Filter />} onPress={() => {}}>
                        Filtrar
                    </CustomButton>
                    <CustomButton icon={<Order />} onPress={() => {}}>
                        Ordenar
                    </CustomButton>
                </View>
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <Text>Eventos</Text>
                    <Point />
                    <Text>25 resultados</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {[1,2,3,4,5,6].map(() => <Card title='LIVE! RUN XP Rio de Janeiro' onPress={() => { router.push('/eventos/1')   }} />)}
                </View>
            </View>
        </ScrollView>
    )
}

export function Card({ title, onPress }) {
    return (
        <Pressable onPress={onPress} style={{ width: '100%' }}>
            <Image
                style={{ width: '100%', height: 220 }}
                source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/9821/6eb6/dae7668912b66a4de8a4cd76096bb28f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i4f8yautv4KZ4pxO7vuPwUjnUlB1BibBklElgmhO7idXtalbNkuIBWPgzv9q~hJBzVthqCXydF9zVIoHzAQhraKuJl9U81XsMD0F~xt~vlknTzWyfAYFy1~RSjS2Iuv793Bbmo6k7I78XCFXYlp6CwFKVoPiHVMcHTQsY8OWppJEMSeM-dDoPPWJSfOJIfOZlNL0lNZqx4xihPQTsP1-1jxIavGmqvggqhhWFQfe1dpRJe9piHqsGys~eISBBnDh5W0DjGpnXQtXBJBi6VDl1BHA~BrrKP7u6O5sEqAGhfNjH80eJTMhXlQdxCpwcqkZZz6pKOz~g5iLivMUzJvTyw__'
                }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                <View>
                    <Text style={{ fontWeight: 500, fontSize: 20 }}>{title}</Text>
                    <Text>Rio de Janeiro</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontSize: 22, fontWeight: 500 }}>30</Text>
                    <Text style={{ fontWeight: 500 }}>SET</Text>
                </View>
            </View>
        </Pressable>
    )
}

export function Title({ children }) {
    return (
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>
            {children}
        </Text>
    )
}

export function CustomButton({ children, icon, onPress }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }} onPress={onPress}>
            {icon}
            <Text style={{ color: primary, fontWeight: 500 }}>{children}</Text>
        </Pressable>
    )
}

export function SearchInput() {
    return (
        <>
            <TextInput placeholder="Eventos ou localização" placeholderTextColor={'#6d6d6d'} style={{ backgroundColor: '#fff', flexGrow: 1, paddingVertical: 15, width: '80%', paddingHorizontal: 10 }} />
            <View style={{ paddingHorizontal: 10 }}>
                <Search />
            </View>
        </>
    ) 
}