import { TextInput, StyleSheet, View } from 'react-native'
import BaseError from '@/components/BaseError'

export default function BaseInput({ value, setValue, placeholder, error = '' }) {
    return (
        <>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor='#757575'
                style={styles.input}
            />
            {
                error &&
                <View style={{ marginVertical: 5 }}>
                    <BaseError>
                        {error}
                    </BaseError>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
    },
})