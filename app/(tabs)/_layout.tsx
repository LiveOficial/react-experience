import { PageTitle } from "@/components/LiveExperience"
import { Tabs } from "expo-router"

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#fff' },
          headerTitle: () => <PageTitle>Home</PageTitle>,
        }}
      />
      <Tabs.Screen name="events" options={{ title: 'Eventos' }} />
      <Tabs.Screen name="calendar" options={{ title: 'Calendário' }} /> 
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  )
} 