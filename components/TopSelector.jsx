import { View, Text as ReactText, StyleSheet } from "react-native";

export function Container({ children, style = {} }) {
    return (
        <View style={[styles.container, style]}>
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
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
    }
})