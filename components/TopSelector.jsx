import { View, Text as ReactText, StyleSheet } from "react-native";

export function Container({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export function Text({ children }) {
    return (
        <ReactText style={styles.text}>
            {children}
        </ReactText>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',    
        gap: 10,
        marginBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'uppercase',
    }
})