import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Hr } from '@/components/LiveExperience'
import { body, primary, text } from '@/constants/Colors'
import { Pressable } from 'react-native'
import { ChevronLeft, Plus, Playlist, Download, Clock, Lightning, Chart } from '@/components/Icons'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import api from '@/hooks/api'
import { Video, ResizeMode } from 'expo-av';

export default function Treino() {
    const { slug } = useLocalSearchParams()
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const videoo = useRef(null);

    const [status, setStatus] = useState({});

    console.log(slug)

    const fetchData = () => {
        setLoading(true)
        api.get(`classes/${'introducao'}`)
            .then(({ data: { video } }) => setVideo(video))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const onAddToPlaylist = () => {
        console.log('adding to playlist...')
        api.post(`classes/${slug}/add-to-playlist`)
            .then(({ data: { message } }) => alert(message))
            .catch(err => console.log(err))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Treino</Text>
                <View style={{ padding: 20 }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50, borderWidth: 1, borderRadius: 50, borderColor: primary }} source={{ uri: video?.trainer?.photo }} />
                    <Text style={{ fontSize: 25 }}>{video?.trainer?.name}</Text>
                </View>
                <View>
                    <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Plus color={primary} size={20} />
                        <Text style={{ color: primary, fontWeight: 600 }}>Seguir</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ color: text, fontWeight: 600 }}>{video?.category}</Text>
                <Text style={{ fontSize: 30, fontWeight: 500 }}>{video?.name}</Text>
            </View>
            <View>
                <Video
                    ref={videoo}
                    style={styles.video}
                    source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                <ButtonTeste icon={<Playlist color={primary} />} onPress={() => onAddToPlaylist()}>
                    <Text>Adicionar à playlist</Text>
                </ButtonTeste>
                <ButtonTeste icon={<Download color={primary} />} onPress={() => router.push('/treino')}>
                    <Text>Download</Text>
                </ButtonTeste>
            </View>
            <View style={{ marginVertical: 30}}>
                <Hr />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Clock color={text} size={25} />
                    <Text style={{ fontWeight: 500 }}>Duração</Text>
                    <Text style={{ fontSize: 15 }}>{video?.duration}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Lightning color={text} size={25} />
                    <Text style={{ fontWeight: 500 }}>Intensidade</Text>
                    <Text style={{ fontSize: 15 }}>{video?.intensity}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Chart color={text} size={25} />
                    <Text style={{ fontWeight: 500 }}>Dificuldade</Text>
                    <Text style={{ fontSize: 15 }}>{video?.dificulty}</Text>
                </View>
            </View>
            <Text style={{ marginVertical: 20 }}>{video?.description}</Text>
            <View style={{ marginVertical: 30}}>
                <Hr />
            </View>
            <Text>WorkCAUt</Text>
        </ScrollView>
    )
}

function ButtonTeste({ children, onPress, icon }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10 }} onPress={onPress}>
            {icon}
            <Text style={{ color: primary, fontWeight: 600 }}>{children}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: '100%',
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  