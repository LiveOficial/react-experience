import { primary } from '@/constants/Colors';
import { Tabs } from 'expo-router'

export default function TabLayout() {
  const tabSettings = {
    headerStyle: {
      backgroundColor: 'white',
    },
    tabBarStyle: {
      backgroundColor: primary,
    }
  }

  return (
    <Tabs screenOptions={tabSettings}>
      <Tabs.Screen
        name="home"
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
    </Tabs>
  );
}
