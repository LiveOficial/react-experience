import { useState } from "react"
import { ImageBackground, Pressable, Text } from "react-native"

export default function Welcome() {
    const [show, setShow] = useState(true)
    const [backgroundIndex, setBackgroundIndex] = useState(0)

    const backgrounds = [
        require('../assets/onboarding/1.png'),
        require('../assets/onboarding/2.jpg'),
        require('../assets/onboarding/3.jpg'),
        require('../assets/onboarding/4.jpg')
    ]

    const skip = () => {
        setShow(false)
    }

    const previousImage = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length)
    }

    const nextImage = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
    }

    return (
        <ImageBackground style={{ display: show ? 'flex' : 'none', position: 'fixed', top: 0, left: 0, zIndex: 1, height: '100%', width: '100%', backgroundColor: '#fff' }} source={backgrounds[backgroundIndex]}>
            <Pressable style={{ top: 0, left: 0,  display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <Pressable onPress={previousImage} style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%' }} />
                <Pressable onPress={nextImage} style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%' }} />
                <Pressable style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#e5e2e0', marginTop: 60, marginRight: 20 }} onPress={skip}>
                    <Text style={{ fontWeight: 600, color: 'black' }}>Pular</Text>
                </Pressable>
            </Pressable>
        </ImageBackground>
    )
}