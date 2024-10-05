import { primary } from '@/constants/Colors'
import { Pressable, Text } from 'react-native'

export default function BaseButton({ children, loading = false }) {
    return (
        <Pressable style={{ backgroundColor: primary, padding: 10, width: '100%' }}>
            {
                loading ?
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Loading...</Text> :
                <Text style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>{children}</Text>
            }
        </Pressable>
    )
}