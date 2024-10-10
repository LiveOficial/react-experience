import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import AuthContext from '../context/auth';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    ExtendedBold: require('../assets/fonts/extended/Bold.ttf'),
    ExtendedRegular: require('../assets/fonts/extended/Regular.ttf'),
    ExtendedSemiBold: require('../assets/fonts/extended/SemiBold.ttf'),
    TextBold: require('../assets/fonts/text/Bold.ttf'),
    TextLight: require('../assets/fonts/text/Light.ttf'),
    TextRegular: require('../assets/fonts/text/Regular.ttf'),
    TextSemiBold: require('../assets/fonts/text/SemiBold.ttf'),
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
    <AuthContext.Provider value={{ authenticated: false }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="entrar" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="ajuda" />
        <Stack.Screen name="esqueci-minha-senha" />
        <Stack.Screen name="alterar-senha" />
        <Stack.Screen name="pedidos" />
        <Stack.Screen name="eventos/[slug]" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthContext.Provider>
  )
}
