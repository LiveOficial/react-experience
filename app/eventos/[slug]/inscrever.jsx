import { Text, View, ScrollView, Pressable, Image } from "react-native";
import { Chevron, Cart, CalendarCheck } from "@/components/Icons";
import { secondary, body, primary, grey, borderColor } from "@/constants/Colors";
import { CheckBox, HighlightedButton, Input } from "@/components/LiveExperience";
import { useEffect, useMemo, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import api from "@/hooks/api";

export default function Inscrever() {
    const { slug } = useLocalSearchParams()
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)
    const [coupon, setCoupon] = useState(null)
    const [couponApplied, setCouponApplied] = useState(false)
    const [customerXp, setCustomerXp] = useState(false)
    const [applingCoupon, setApplyingCoupon] = useState(false)
    const [isXp, setIsXp] = useState(false)
    const [category, setCategory] = useState('Adulto')
    const [modality, setModality] = useState(null)
    const [kits, setKits] = useState([])
    const [errors, setErrors] = useState({})

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

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        api.get(`event/${slug}/registration`)
            .then(({ data }) => {

                console.log(data)
                setEvent(data.event)

            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const fetchKits = () => {
        const data = {
            params: {
                schedule_id: 1,
                xp: customerXp,
                coupon: couponApplied ?? coupon,
            }
        }

        api.get(`event/${slug}/kit`, data)
            .then(({ data }) => setKits(data.kits))
            .catch(err => console.log(err))
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

    return (
        <>
        {loading ? <></> :
            <ScrollView style={{ backgroundColor: body,  paddingTop: 50, paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10, gap: 20 }}>
                    <Pressable onPress={() => router.back()}>
                        <Chevron rotate={270} size={25} color={primary} />
                    </Pressable>
                    <Text style={{ fontWeight: 500, fontSize: 23, flexShrink: 1, textAlign: 'center' }}>{event.name}</Text>
                    <Pressable>
                        <Cart />
                    </Pressable>
                </View>
    
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
                        .map(m => {
                            return (
                                <Button active={modality == m.id} onPress={() => setModality(m.id)}>
                                    {m.name}
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
                        <CheckBox value={isXp} setValue={setIsXp}>
                            <Text style={{ fontWeight: 500 }}>Sou cliente XP</Text>
                        </CheckBox>
                    </View>
                </View>
    
                <View style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
                    {kits.map(kit => {
                        return (
                            <View style={{ backgroundColor: '#fff', padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                                <Image
                                    style={{ width: '100%', height: 300 }}
                                    source={{
                                        uri: 'https://s3-alpha-sig.figma.com/img/ffba/7277/d82cc118c361b36e6851aae32fb52edd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrT31sDXXpzHuz2ZAG~~9tGiefi~~o-ezGJp9h~RTrMhxxDtUeASh0VlQNgtSGtdGpmjzOsiVGtCGFEYCzzIfLayEZr9KA6NE6Zwh6FU6KoR2STvLEUigfhZmOu1mbPebs79vdTvqoURyUTes~zVc7tADfwrgYxsMAC4xO7Mn57X3jD8GnDZ2tECEjKFVMshgtTaoUYcmcZ2Ycd03g6OJqsCFR9Zyvdr9zhYaHf1i7xi1I-pjRLNU5a05CFUVTeXDrSOOJFcHPHApSWY5zP~gdKgxEJ5Yin9bFRCzR~UFLtdB8hhDlHMmSdbbbEoWGEtboNSwBzj7OuLzbu9oI7i5A__',
                                    }}
                                />
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                                    <Text style={{ fontWeight: 500, fontSize: 20 }}>{kit.name}</Text>
                                    <Text style={{ fontWeight: 500, fontSize: 20 }}>{formatMoney(kit.price)}</Text>
                                </View>
                                <Text>Bolsa, camiseta Atleta, camiseta Finisher XP e medalha</Text>
                            </View>
                        )
                    })}
                </View>
    
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginVertical: 30 }}>
                    {[1,2].map(i => {
                        return (
                            <View>
                                <Text style={{ fontWeight: 500, fontSize: 15, marginBottom: 10 }}>Tamanho camiseta Atleta (unissex)</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button active={true}>Babylook</Button>
                                    <Button>P</Button>
                                    <Button>M</Button>
                                    <Button>G</Button>
                                    <Button>GG</Button>
                                </View>
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
    
    
            </ScrollView>
        }
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
