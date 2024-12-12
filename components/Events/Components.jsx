import { text } from "@/constants/Colors"
import { Text, View } from "react-native"

export const MainTitle = ({ children }) => <Text style={{ fontSize: 35, fontWeight: 500, flexShrink: 1 }}>{children}</Text>
export const Title = ({ children }) => <Text style={{ fontSize: 20, flexShrink: 1 }}>{children}</Text>
export const Label = ({ children, style }) => <Text style={{ fontWeight: 500, color: text, ...style }}>{children}</Text>
export const RadioText = ({ children }) => <Text style={{ fontWeight: 500 }}>{children}</Text>


export const Detail = {
    Container: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 35 }}>{children}</View>,
    Box: ({ children, icon }) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                <View style={{ width: 30 }}>
                    {icon}
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {children}
                </View>
            </View>
        )
    },
    Title: ({ children }) => <Text style={{ fontSize: 16, fontWeight: 500 }}>{children}</Text>,
    Value: ({ children }) => <Text style={{ fontSize: 14 }}>{children}</Text>
}