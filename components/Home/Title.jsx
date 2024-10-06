import { Text } from 'react-native';

export default function Title({ children }) {
    return (
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
            {children}
        </Text>
    );
}