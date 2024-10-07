import { Header } from "@/components/LiveExperience"
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
          header: () => <Header title="Eventos" right={'teste'} left={'teste'} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Meu Calendário',
          header: () => <Header title="Meu Calendário" right={'teste'} left={'teste'} />,
        }}
      /> 
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          header: () => <Header title="meu Perfil" right={'teste'} left={'teste'} />,
        }}
      />
      <Tabs.Screen
        name="sing-in"
        options={{
          header: () => <Header title="Meu Perfil" right={'teste'} left={'teste'} />,
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="change-password"
        options={{
          header: () => <Header title="Alterar Senha" right={'teste'} left={'teste'} />,
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
} 