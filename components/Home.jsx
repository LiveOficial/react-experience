import { Pressable, Text, TextInput, View } from 'react-native';

export function Title({ children }) {
    return (
        <Text style={{ fontSize: 17, fontWeight: 400 }}>
            {children}
        </Text>
    );
}

export function Button({ children, active = false }) {
    return (
        <Pressable style={{ backgroundColor: active ? 'transparent' : '#fff', borderColor: active ? 'black' : 'transparent', borderWidth: 1, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 30 }}>
            <Text style={{ fontSize: 12 }}>
                {children}
            </Text>
        </Pressable>
    );
}

export function Welcome() {
    return (
        <View style={{ position: 'fixed', top: 0, left: 0, zIndex: 1, height: '100%', width: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Text>ddddddd</Text>
        </View>
    )
}

export function SearchInput() {
    return (
        <TextInput style={{ backgroundColor: '#fff', padding: 10 }} placeholderTextColor={'#6d6d6d'} placeholder='Eventos, localização ou aulas' />
    )
}