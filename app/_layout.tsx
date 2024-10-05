import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="sing-in" />
      <Stack.Screen name="sing-up" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
