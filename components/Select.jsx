import { useEffect, useState } from "react";
import { body, primary, text } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Chevron } from "@/components/Icons";

export default {
    Root: ({ children, placeholder, value, backgroundColor = body }) => {
        const [modalVisible, setModalVisible] = useState(false)

        useEffect(() => {
            setModalVisible(false)
        }, [value])

        return (
            <>
                <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }]} onPress={() => setModalVisible(!modalVisible)}>
                    {value ? <Text>{value}</Text> : <Text style={{ color: modalVisible ? 'black' : '#BCA292' }}>{placeholder}</Text>}
                    <Chevron fontSize={25} color={primary} rotate={ modalVisible ? 0 : 180} />
                </TouchableOpacity>
                <View style={{ display: modalVisible ? 'flex' : 'none', backgroundColor: body, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, elevation: 5  }}>
                    <View style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        {children}
                    </View>
                </View>
            </>
        )
    },
    Label: ({ children }) => {
        return (
            <Text style={{ color: text, fontWeight: 500 }}>
                {children}
            </Text>
        )
    },
    Option: ({ children, onPress, icon = null }) => {
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, padding: 15 }} onPress={onPress}>
                {icon}
                <Text style={{ color: primary, fontWeight: 500 }}>
                    {children}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#BCA292',
        paddingVertical: 15,
        paddingHorizontal: 10,
        gap: 5
    },
    text: {
        color: '#BCA292'
    }
})