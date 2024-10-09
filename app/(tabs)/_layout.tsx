import { secondary } from "@/constants/Colors"
import { Tabs } from "expo-router"

export default function Layout() {
  return (
    <Tabs screenOptions={{
        headerStyle: {
          backgroundColor: '#fff'
        },
        tabBarStyle: {
          display: 'none',
          backgroundColor: secondary,
          height: 60,
          padding: 10
        },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#000',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="eventos/index"
        options={{
          title: 'Eventos',
        }}
      />
      <Tabs.Screen
        name="calendario"
        options={{
          title: 'Calendário',
        }}
      /> 
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
        }}
      />
    </Tabs>
  )
} 