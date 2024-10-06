import { ScrollView, StyleSheet } from "react-native";

export default function BasePage({ children, style = {} }) {
    return (
        <ScrollView style={[styles.container, style]}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'scroll',
    },
})