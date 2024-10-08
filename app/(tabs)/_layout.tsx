import { secondary } from "@/constants/Colors"
import { Tabs } from "expo-router"
import { Dimensions } from "react-native"

export default function Layout() {
  const { width, height } = Dimensions.get('window')

  return (
    <Tabs screenOptions={{
        headerStyle: {
          backgroundColor: '#fff'
        },
        tabBarStyle: {
          display: width > 700 ? 'none' : 'flex',
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
        name="events"
        options={{
          title: 'Eventos',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
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