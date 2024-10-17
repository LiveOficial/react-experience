import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from '@/components/Icons'
import { body, primary } from '@/constants/Colors'
import { router } from 'expo-router'
import { useEffect, useState } from "react";
import api from "@/hooks/api"

export default function Playlists() {
    const [playlists, setPlaylists] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchPlaylists()
    }, [])

    const fetchPlaylists = () => {
        setLoading(true)
        api.get('teste')
            .then(() => {})
            .catch(() => {})
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
            <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                <ChevronLeft color={primary} />
            </Pressable>
            <Text style={{ fontSize: 20 }}>Minhas playlists</Text>
            <View />
            </View>

            <View>
                
            </View>
        </ScrollView>
    )
}