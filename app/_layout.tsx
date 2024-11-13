import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import AuthContext from '@/context/auth';
import { StatusBar } from 'react-native';
import { version } from '../package.json';
import { Modal } from '@/components/TermPolicy';
import api from '@/hooks/api';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  const [loaded] = useFonts({
    ExtendedBold: require('../assets/fonts/extended/Bold.ttf'),
    ExtendedRegular: require('../assets/fonts/extended/Regular.ttf'),
    ExtendedSemiBold: require('../assets/fonts/extended/SemiBold.ttf'),
    TextBold: require('../assets/fonts/text/Bold.ttf'),
    TextLight: require('../assets/fonts/text/Light.ttf'),
    TextRegular: require('../assets/fonts/text/Regular.ttf'),
    TextSemiBold: require('../assets/fonts/text/SemiBold.ttf'),
    Icons: require('../assets/fonts/fontello/fontello.ttf'),
  });

  const checkForUpdates = () => {
    api.get('check-update', { params: { version } })
      .then(({ data: { updateAvailable } }) => {
        // if (updateAvailable) {
        //   Alert.alert('Atualização', 'Nova atualização disponível')
        // }
      })
  }

  const checkForPolicy = () => {
    api.get('legal/last-term-policy')
      .then(({ data }) => {
        
      })
  }

  useEffect(() => {
    checkForUpdates()
    checkForPolicy()
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <AuthContext>
        <StatusBar barStyle={"dark-content"} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="entrar" />
          <Stack.Screen name="cadastro" />
          <Stack.Screen name="ajuda" />
          <Stack.Screen name="playlists" />
          <Stack.Screen name="esqueci-minha-senha" />
          <Stack.Screen name="alterar-senha" />
          <Stack.Screen name="pedidos" />
          <Stack.Screen name="eventos/[slug]" />
          <Stack.Screen name="eventos/[slug]/inscrever" />
          <Stack.Screen name="eventos/[slug]/resultados" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthContext>
      <Modal visible={showModal} setVisible={setShowModal} />
    </>
  )
}
