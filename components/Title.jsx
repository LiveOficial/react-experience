import { Text } from 'react-native'
import { primary } from '@/constants/Colors'

export default function Title({ children, size = 24 }) {
    return (
        <Text style={{ fontSize: size, color: primary, fontWeight: 'bold' }}>
            {children}
        </Text>
    );
}

