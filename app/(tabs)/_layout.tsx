import { primary } from "@/constants/Colors"
import { Tabs } from "expo-router"

export default function Layout() {
  return (
    <Tabs screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        tabBarStyle: { backgroundColor: primary, height: 60, padding: 10 },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#000',
        headerShown: false
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Eventos',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Meu Calendário',
        }}
      /> 
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
        }}
      />
      <Tabs.Screen
        name="entrar"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
} 