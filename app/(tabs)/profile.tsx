import BasePage from '@/components/BasePage';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Profile() {
  return (
    <BasePage style={{ padding: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Felipe Chiodini Bona</Text>
      </View>

      <View style={{ display: 'flex', gap: 10 }}>
        <Link href="/change-password">Alterar Senha</Link>
        <Pressable>
          <Text>Sair</Text>
        </Pressable>
      </View>
    </BasePage>
  );
}
