import { Text, Pressable } from 'react-native'

export default function SmallButton({ children }) {
    return (
        <Pressable>
            <Text style={{ textTransform: 'uppercase', fontSize: 11 }}>
                {children}
            </Text>
        </Pressable>
    )
}