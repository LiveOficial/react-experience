import { Text } from 'react-native';

export function Title({ children }) {
    return (
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            {children}
        </Text>
    );
}