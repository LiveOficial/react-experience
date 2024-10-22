import { Pressable, Text, TextInput } from "react-native";
import { View } from "react-native";
import { Point, Search, Order, Filter } from "@/components/Icons";
import { text, greenText, secondary, borderColor } from "@/constants/Colors";
import { primary } from "@/constants/Colors";

export function ResultsTitle({ name, resultsNumber, marginVertical = 30 }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: marginVertical }}>
            <Text style={{ fontWeight: 400, fontSize: 16, color: text }}>{name}</Text>
            <Point />
            <Text style={{ fontWeight: 400, fontSize: 16, color: text }}>{resultsNumber} {resultsNumber > 1 ? 'resultados' : 'resultado' }</Text>
        </View>
    )
}

export function CardSubTitle({ children }) {
    return (
        <Text style={{ color: greenText, fontWeight: 600, fontSize: 15 }}>{children}</Text>
    )
}

export function SearchInput({ value, setValue, placeholder }) {
    return (
        <>
            <TextInput value={value} onChangeText={setValue} placeholder={placeholder} placeholderTextColor='#6d6d6d' style={{ backgroundColor: '#fff', flexGrow: 1, paddingVertical: 15, width: '80%', paddingHorizontal: 10 }} />
            <View style={{ paddingHorizontal: 10 }}>
                <Search />
            </View>
        </>
    )
}
