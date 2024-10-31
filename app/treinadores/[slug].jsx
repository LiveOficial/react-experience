import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { body, secondary, primary, borderColor } from "@/constants/Colors"
import { Gradient, Hr, Loader } from "@/components/LiveExperience"
import { ChevronLeft } from "@/components/Icons"
import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import RenderHtml from 'react-native-render-html';
import api from "@/hooks/api"

export default function Treinadores() {
    const [trainer, setTrainer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [following, setFollowing] = useState(false)

    const { slug } = useLocalSearchParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get(`trainers/${slug}`)
            .then(({ data: { trainer } }) => setTrainer(trainer))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }

    const onRequestFollow = () => {
        setFollowing(true)
        api.post(`trainers/${slug}/follow`)
            .then(() => setTrainer({ ...trainer, following: true }))
            .catch((e) => console.log(e))
            .finally(() => setFollowing(false))
    }

    const onRequestUnfollow = () => {
        setFollowing(true)
        api.post(`trainers/${slug}/unfollow`)
            .then(() => setTrainer({ ...trainer, following: false }))
            .catch((e) => console.log(e))
            .finally(() => setFollowing(false))
    }

    return (
        <ScrollView style={{ backgroundColor: secondary, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: secondary, paddingHorizontal: 20, paddingVertical: 25 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={() => router.back()}>
                        <ChevronLeft color={primary} size={25} />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Professores</Text>
                    <View style={{ padding: 10 }} />
                </View>
            </View>
            <View style={{ backgroundColor: body, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', borderRadius: 100, overflow: 'hidden', marginHorizontal: 20, height: 200, width: 200, marginVertical: 40, marginHorizontal: 'auto' }}>
                    <Gradient>
                        <Image style={{ height: '100%', width: '100%' }} source={{ uri: trainer?.photo }} />
                    </Gradient>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 500, fontSize: 25 }}>{trainer?.name}</Text>
                    {trainer?.following === false ? <FollowButton onPress={onRequestFollow} loading={following} /> : <UnfollowButton onPress={onRequestUnfollow} loading={following} />}
                </View>
                <Text style={{ fontWeight: 500, marginTop: 10, marginBottom: 20 }}>{trainer?.video_numbers} vídeos</Text>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <RenderHtml source={{ html: trainer?.description }} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Hr />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable style={{ padding: 10, borderRadius: 100, borderColor: borderColor, backgroundColor: body, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text>Playlists (4)</Text>
                    </Pressable>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>WorCAUt</Text>
                    <Pressable>
                        <Text style={{ color: primary, fontWeight: 500 }}>
                            Ver tudo
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

function FollowButton({ onPress, loading }) {
    return (
        <BaseButton onPress={onPress} loading={loading} label='+ Seguir' />
    )
}

function UnfollowButton({ onPress, loading }) {
    return (
        <BaseButton onPress={onPress} loading={loading} label='- Deixa de seguir' />
    )
}

function BaseButton({ label, onPress, loading }) {
    return (
        <Pressable onPress={onPress}>
            {loading ? <Loader /> : <Text style={{ color: primary, fontWeight: 500, fontSize: 16 }}>{label}</Text>}
        </Pressable>
    )
}