import { HighlightedButton, CheckBox as LiveExpCheckBox } from '@/components/LiveExperience'
import { borderColor, primary, secondary, textColor } from '@/constants/Colors'
import { Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Times, Filter, Search, Order } from './Icons'

export default function({ children, visible, setVisible, onPressApplyFilters, onPressClearFilters, loading }) {
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
            <ScrollView style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20, backgroundColor: 'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20, marginTop: 10 }}>
                    <Pressable style={{ paddingHorizontal: 10, paddingVertical: 20 }} onPress={() => setVisible(false)}>
                        <Times color={primary} size={25} />
                    </Pressable>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Title>Filtrar por</Title>
                    <ColoredButton onPress={onPressClearFilters}>Limpar filtros</ColoredButton>
                </View>
                {children}
            </ScrollView>
            <FloatingBox>
                <HighlightedButton onPress={() => onPressApplyFilters()} loading={loading}>
                    Aplicar filtros
                </HighlightedButton>
            </FloatingBox>
        </Modal>
    )
}

export function Title({ children }) {
    return (
        <Text style={{ fontWeight: 500, fontSize: 20 }}>
            {children}
        </Text>
    )
}

export function FloatingBox({ children }) {
    return (
        <View style={{ position: 'fixed', bottom: 0, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, padding: 20, paddingBottom: 40 }}>
            {children}
        </View>
    )
}

export const CheckBox = {
    Grid: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>{children}</View>,
    CheckBox: ({ children }) => <LiveExpCheckBox>{children}</LiveExpCheckBox>,
    Title: ({ children }) => <Text style={{ fontWeight: 500, fontSize: 15 }}>{children}</Text>
}

export function ColoredButton({ children, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Text style={{ color: primary, fontWeight: 500, fontSize: 15 }}>
                {children}
            </Text>
        </Pressable>
    )
}

export function BadgeContainer({ children }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
            {children}
        </View>
    )
}

export function FilterBadge({ children, onPressClose }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', backgroundColor: secondary, borderWidth: 1, borderColor: borderColor }}>
            <Text style={{ color: textColor, paddingLeft: 15 }}>
                {children}
            </Text>
            <Pressable style={{ padding: 15 }} onPress={onPressClose}>
                <Times color={textColor} size={17} />
            </Pressable>
        </View>
    )
}

export function FilterButton({ onPress, numberFilters = null }) {
    return (
        <HeaderButton icon={<Filter />} onPress={onPress}>
            <Text style={{ color: primary, fontWeight: 600 }}>Filtro</Text>
            {numberFilters && <Text style={{ color: primary, fontWeight: 600 }}>({numberFilters})</Text>}
        </HeaderButton>
    )
}

export function SortButton({ onPress }) {
    return (
        <HeaderButton icon={<Order />} onPress={onPress}>
            <Text style={{ color: primary, fontWeight: 600 }}>Ordenar</Text>
        </HeaderButton>
    )
}

function HeaderButton({ children, icon, onPress }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 7, padding: 10 }} onPress={onPress}>
            {icon}
            {children}
        </Pressable>
    )
}

export function SearchInput({ value, setValue, placeholder }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
            <TextInput value={value} onChangeText={setValue} placeholder={placeholder} placeholderTextColor='#6d6d6d' style={{ backgroundColor: '#fff', flexGrow: 1, paddingVertical: 15, width: '80%', paddingHorizontal: 10 }} />
            <View style={{ paddingHorizontal: 10 }}>
                <Search />
            </View>
        </View>
    )
}
