import { Tabs } from "expo-router"
import TabBar from '@/components/TabBar'

export default function Layout() {
  return (
    <Tabs
      tabBar={(e) => <TabBar teste={e} />}
      screenOptions={{ headerShown: false }}
    >
    </Tabs>
  )
}