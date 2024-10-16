import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import AuthContext from '@/context/auth';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
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
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthContext>
  )
}
