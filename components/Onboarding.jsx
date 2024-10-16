import { useEffect, useState } from "react"
import { ImageBackground, Modal, Pressable, Text } from "react-native"
import { getItemAsync, setItemAsync } from "expo-secure-store"

export default function OnBoarding() {
    const [show, setShow] = useState(false)
    const [backgroundIndex, setBackgroundIndex] = useState(0)

    useEffect(async () => {
        const onboarding = await getItemAsync('onboarding')
        setShow(onboarding !== 'seen')
    }, [])

    const backgrounds = [
        require('../assets/onboarding/1.png'),
        require('../assets/onboarding/2.jpg'),
        require('../assets/onboarding/3.jpg'),
        require('../assets/onboarding/4.jpg')
    ]

    const close = () => {
        setItemAsync('onboarding', 'seen')
        setShow(false)
    }

    const previousImage = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length)
    }

    const nextImage = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
    }

    return (
        <Modal visible={show}>
            <ImageBackground style={{ display: 'flex', position: 'fixed', top: 0, left: 0, zIndex: 1, height: '100%', width: '100%', backgroundColor: '#fff' }} source={backgrounds[backgroundIndex]}>
                <Pressable style={{ top: 0, left: 0,  display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                    <Pressable onPress={previousImage} style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%' }} />
                    <Pressable onPress={nextImage} style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%' }} />
                    <Pressable style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#e5e2e0', marginTop: 60, marginRight: 20 }} onPress={close}>
                        <Text style={{ fontWeight: 600, color: 'black' }}>Pular</Text>
                    </Pressable>
                </Pressable>
            </ImageBackground>
        </Modal>
    )
}