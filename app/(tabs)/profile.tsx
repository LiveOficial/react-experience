import { Page, Button } from '@/components/LiveExperience';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <Page padding={10}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Felipe Chiodini Bona</Text>
      </View>
      <View style={{ display: 'flex', gap: 10 }}>
        <Link href={'/change-password'}>Alterar Senha</Link>
        <Button onPress={() => {}}>
          Sair
        </Button>
      </View>
    </Page>
  )
}
