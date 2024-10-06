import { primary } from '@/constants/Colors'
import { Pressable, Text } from 'react-native'

export default function BaseButton({ children, onPress, loading = false}) {
    return (
        <Pressable onPress={onPress} style={{ backgroundColor: primary, padding: 10, width: '100%' }}>
            {
                loading ?
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Loading...</Text> :
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>{children}</Text>
            }
        </Pressable>
    )
}