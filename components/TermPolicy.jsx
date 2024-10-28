import { Text, Modal as NativeModal, View, Pressable } from 'react-native'
import { Times } from './Icons'
import { primary } from '@/constants/Colors'

export function Modal({ visible, setVisible }) {
    return (
        <NativeModal animationType='slide' visible={visible}>
            <Text>ddddddd</Text>
        </NativeModal>
    )
}