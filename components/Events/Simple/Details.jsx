import { Text, View } from "react-native"
import { Hr } from "@/components/LiveExperience"
import { CalendarCheck } from "@/components/Icons"

export default function Simple({ event }) {
    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 33, fontWeight: 500 }}>{event?.day}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>{event?.month}</Text>
                </View> 
                <Text>{event?.name}</Text>
            </View>
            <Detail.Wrap style={{ display: 'flex', gap: 10, marginHorizontal: 20 }}>
                <Detail.Box icon={<CalendarCheck size={28} />}>
                    <Detail.Title style={{ fontWeight: 500 }}>Valor de entrada</Detail.Title>
                    <Detail.Value>{event?.value}</Detail.Value>
                </Detail.Box>
                <Detail.Box icon={<CalendarCheck size={28} />}>
                    <Detail.Title style={{ fontWeight: 500 }}>Data</Detail.Title>
                    <Detail.Value>{event?.date}</Detail.Value>
                </Detail.Box>
                <Detail.Box icon={<CalendarCheck size={28} />}>
                    <Text style={{ fontWeight: 500 }}>Local</Text>
                    <Text>{event?.location}</Text>
                </Detail.Box>
                <Detail.Box icon={<CalendarCheck size={28} />}>
                    <Text style={{ fontWeight: 500 }}>Tipo de evento</Text>
                    <Text>Tênis</Text>
                </Detail.Box>
            </Detail.Wrap>
            <Hr marginBottom={20} />
            <Text>LIVE! e XP convidam: Em especial ao dia dos pais, venha para a Clinica de Tenis com o ex profissional de tênis, André Ghe André Ghem é um ex tenista profissional sendo top 118 do mundo em simples e 88 em duplas. Em sua carreira, conquistou 9 titulos e atualmente é comentarista de tênis na ESPN e Disney+. Vagas Limitadas! Lembre-se: faça a sua inscrição e da sua dupla.</Text>
        </>
    )
}

const Detail = {
    Box: ({ children, icon }) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                <View style={{ width: 30 }}>
                    {icon}
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {children}
                </View>
            </View>
        )
    },
    Wrap: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 35 }}>{children}</View>,
    Title: ({ children }) => <Text style={{ fontSize: 16, fontWeight: 500 }}>{children}</Text>,
    Value: ({ children }) => <Text style={{ fontSize: 14 }}>{children}</Text>
}