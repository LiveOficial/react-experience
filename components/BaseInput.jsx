import { primary } from '@/constants/Colors'
import { TextInput, StyleSheet, View, Text } from 'react-native'

export default function BaseInput({ value, setValue, placeholder, error = '' }) {
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor='#757575'
                style={styles.input}
            />
            {error && <Error>{error}</Error>}
        </View>
    )
}

export function Error({ children }) {
    return (
        <Text style={{ fontSize: 12, color: primary }}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        marginBottom: 3,
    }
})