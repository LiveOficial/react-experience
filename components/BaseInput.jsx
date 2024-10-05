import { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function BaseInput({ placeholder }) {
    const [value, setValue] = useState(null)

    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
        />
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