import { Header } from '@/components/LiveExperience';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="sing-in" 
        options={{ 
          header: () => <Header title={'Meu PErfil'} right={'teste'} left={'teste'} />
        }}
      />
      <Stack.Screen
        name="sing-up" 
        options={{ 
          header: () => <Header title={'Cadastro'} right={'teste'} left={'teste'} />
        }}
      />
      <Stack.Screen
        name="ajuda"
        options={{
          header: () => <Header title={'Ajuda'} right={'teste'} left={'teste'} />
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
