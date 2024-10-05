import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Profile() {
  return (
    <View style={{ padding: 10 }}>

      <View>
        <Text>Felipe Chiodini Bona</Text>
      </View>

      <Text>Profile Page</Text>
      <Link href="/change-password">Alterar Senha</Link>
      <Pressable>
        <Text>Sair</Text>
      </Pressable>
    </View>
  );
}
