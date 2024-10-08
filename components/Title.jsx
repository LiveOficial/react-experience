import { Text } from 'react-native'

export default function Title({ children }) {
    return (
        <Text style={{ fontSize: 18 }}>
            {children}
        </Text>
    );
}

