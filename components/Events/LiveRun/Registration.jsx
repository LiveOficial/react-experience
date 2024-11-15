import { Text, View } from "react-native";
import { CheckBox, HighlightedButton, Input, Gradient } from "@/components/LiveExperience";
import { Chevron, Cart, CalendarCheck } from "@/components/Icons";
import { useEffect, useMemo, useState } from "react";
import api from "@/hooks/api";
import { secondary, body, primary, grey, borderColor } from "@/constants/Colors";

export default function Registration({ slug, event }) {
    const [loading, setLoading] = useState(true)
    const [coupon, setCoupon] = useState(null)
    const [couponApplied, setCouponApplied] = useState(false)
    const [customerXp, setCustomerXp] = useState(false)
    const [applingCoupon, setApplyingCoupon] = useState(false)
    const [category, setCategory] = useState('Adulto')
    const [selectedModality, setSelectedModality] = useState(null)
    const [schedule, setSchedule] = useState(null)
    const [selectedKit, setSelectedKit] = useState(null)
    const [kits, setKits] = useState([])
    const [errors, setErrors] = useState({})
    const [loadingKits, setLoadingKits] = useState(false)

    useEffect(() => fetchKits(), [selectedModality, customerXp])


    const fetchKits = () => {
        const data = {
            params: {
                schedule_id: schedule,
                xp: customerXp,
                coupon: !couponApplied ? null : coupon
            }
        }

        setLoadingKits(true)
        api.get(`event/${slug}/kit`, data)
            .then(({ data: { kits } }) => setKits(kits))
            .catch(err => console.log(err.response.data))
            .finally(() => setLoadingKits(false))
    }
    
    const products = useMemo(() => {
        return kits.find(kit => kit.id === selectedKit)?.products
    }, [kits])


    const onPressModality = (modality) => {
        setSelectedModality(modality)

        if (modality.is_kids) {
            setCustomerXp(false)
        }

        if (modality.schedules.length === 1) {
            setSchedule(modality.schedules[0].id)
        }
    }

    const onPressApplyCoupon = () => {
        setApplyingCoupon(true)
        errors.coupon = null
        api.get(`event/${slug}/apply-coupon`, { params: { coupon } })
            .then(() => {
                setCustomerXp(false)
                setCouponApplied(true)
                fetchKits()
            })
            .catch(error => errors.coupon = error?.response?.data?.message)
            .finally(() => setApplyingCoupon(false))
    }

    
    const onSelectKit = (kit) => {
        setSelectedKit(kit.id)
    }

    const categories = useMemo(() => {
        const data = []

        if (event?.modalities.some(modality => !modality.is_kids)) {
            data.push('Adulto')
        }

        if (event?.modalities.some(modality => modality.is_kids)) {
            data.push('Kids')
        }

        return data
    }, [event])

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, padding: 20 }}>
                <View style={{ borderRadius: 50, backgroundColor: primary, padding: 10 }}>
                    <CalendarCheck size={20} color={'white'} />
                </View>
                <Text>Evento</Text>
                <Dash />
                <Text>Cadastro</Text>
                <Dash />
                <Text>Pagamento</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Hr />
            </View>

            <Title>Categoria</Title>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                {categories.map(i => <Button active={category == i} onPress={() => setCategory(i)}>{i}</Button>)}
            </View>
            <View style={{ marginVertical: 30 }}>
                <Hr />
            </View>
            <Title>Modalidade</Title>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {event.modalities
                    .filter(modality => category == 'Adulto' ? !modality.is_kids : modality.is_kids)
                    .map((modality, index) => {
                        return (
                            <Button key={index} active={modality.id === selectedModality?.id} onPress={() => onPressModality(modality)}>
                                {modality.name}
                            </Button>
                        )
                    })}
            </View>
            <View style={{ marginVertical: 30 }}>
                <Hr />
            </View>
            <View>
                <Title>Cupom</Title>
                <View style={{ marginVertical: 15 }}>
                    <Input error={errors.coupon} value={coupon} setValue={setCoupon} placeholder="Insira o código do cupom" />
                </View>
                <HighlightedButton onPress={() => onPressApplyCoupon()} loading={applingCoupon}>
                    Aplicar cupom
                </HighlightedButton>
            </View>
            <View style={{ marginVertical: 30 }}>
                <Hr />
            </View>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title>Kits</Title>
                    {selectedModality?.is_kids === false && <CheckBox value={customerXp} setValue={setCustomerXp}>
                        <Text style={{ fontWeight: 500 }}>Sou cliente XP</Text>
                    </CheckBox>}
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {kits.map((kit, index) => {
                    const selected = kit.id === selectedKit

                    return (
                        <Pressable style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: selected ? borderColor : body }} key={index} onPress={() => onSelectKit(kit)}>
                            <Gradient>
                                <Image style={{ width: '100%', height: 350 }} source={{ uri: kit.image }} />
                            </Gradient>
                            <View style={{ backgroundColor: selected ? secondary : '#fff', padding: 20 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 500, fontSize: 20, marginBottom: 10 }}>{kit.name}</Text>
                                    <Text style={{ fontWeight: 500, fontSize: 20 }}>{formatMoney(kit.price)}</Text>
                                </View>
                                <Text>Bolsa, camiseta Atleta, camiseta Finisher XP e medalha</Text>
                            </View>
                        </Pressable>
                    )
                })}
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginVertical: 30 }}>
                {products && products.map((product, index) => {
                    return (
                        <View key={index}>
                            <Text style={{ fontWeight: 500, fontSize: 15, marginBottom: 10 }}>{product.name}</Text>
                            <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                {product.sizes && product.sizes.map((size, index) => {
                                    return (
                                        <Button key={index}>{size.name}</Button>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    ) 
                })}
            </View>

            <View>
                <Text style={{ fontWeight: 500, fontSize: 15, marginBottom: 10 }}>Retirada do kit</Text>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {
                        [1,2].map(i => {
                            return (
                                <Store name="LIVE! São José do Vale do Rio Preto - Shopping RioMar" selected={true} />
                            ) 
                        })
                    }
                </View>


            </View>
        </>
    )
}

function Button({ children, onPress, active = false }) {
    return (
        <Pressable style={{ padding: 10, borderColor: borderColor, backgroundColor: active ? secondary : '#fff', borderWidth: 1, borderRadius: 20, flexGrow: 1 }} onPress={onPress}>
            <Text style={{ textAlign: 'center', fontWeight: 500, fontSize: 15 }}>{children}</Text>
        </Pressable>
    )
}

function Store({ name, selected = false }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', gap: 10, borderWidth: 1, borderColor: borderColor, padding: 20, backgroundColor: selected ? secondary : '#fff' }}>
            <Text style={{ fontWeight: 500, fontSize: 17 }}>{name}</Text>
            <Text>Rua Santo Antônio, 1000, Papicu, RJ</Text>
        </View>
    )
}

const formatMoney = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const Title = ({ children }) => <Text style={{ fontSize: 20, marginVertical: 10 }}>{children}</Text>
const Dash = () => <View style={{ flexGrow: 1, borderBottomColor: borderColor, borderBottomWidth: 2, alignSelf : 'center' }} />
const Hr = () => <View style={{ width: '100%', borderColor: grey, borderBottomWidth: 1 }} />
