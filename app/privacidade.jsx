import { Pressable, ScrollView, Text, View } from "react-native";
import { Hr } from "@/components/LiveExperience";
import { ChevronLeft, Help } from '@/components/Icons'
import { body, primary, text } from '@/constants/Colors';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import api from "@/hooks/api"

export default function Privacy() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        setLoading(true)
        api.get('user/data-usage')
            .then(({ data }) => setData(data.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} size={25} />
                </Pressable>
                <Text style={{ fontSize: 20 }}>Privacidade</Text>
                <View style={{ padding: 10 }} />
            </View>

            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 40, marginBottom: 10 }}>Central de Privacidade</Text>
            <Text style={{ marginBottom: 30 }}>Reunimos aqui tudo o que você precisa saber sobre os dados que coletamos no app:</Text>

            <View style={{ display: 'flex', justifyContent: 'column', gap: 10 }}>
                <Box icon={<Help size={22} color={text} />} label='Termos de uso' />
                <Box icon={<Help size={22} color={text} />} label='Politica de privacidade' />
                <Box icon={<Help size={22} color={text} />} label='Rastreio de uso do App' />
                <Box icon={<Help size={22} color={text} />} label='Excluir minha conta e dados' />
            </View>

            <Text style={{ fontSize: 18, marginTop: 25, marginBottom: 15 }}>Veja onde seus dados serão utilizados:</Text>
            <Hr/>
            <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 10 }}>Dados pessoais</Text>
            <Text>Como nome, gênero e data de nascimento: utilizados para personalizar sua experiência e nossa comunicação.</Text>
            <View style={{ display: 'flex', justifyContent: 'column', gap: 10, marginTop: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Label>Nome e sobrenome</Label>
                    <Text>{data?.name}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Label>Data nascimento</Label>
                    <Text>{data?.birth_date}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Label>Sexo</Label>
                    <Text>{data?.gender}</Text>
                </View>
            </View>

            <Button>Ver menos</Button>
            <Hr />

            <View style={{ display: 'flex', justifyContent: 'column', gap: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 10 }}>Meios de comunicação</Text>
                    <Text>E-mail e celular: para envio de avisos, confirmações e marketing.</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Label>E-mail</Label>
                    <Text>{data?.email}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Label>Telefone</Label>
                    <Text>{data?.cellphone}</Text>
                </View>
            </View>

            <Button>Ver menos</Button>
            <Hr />

            <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 10 }}>Endereço</Text>
            <Text>Utilizado para entrega de kits de eventos e para definir de onde é o atleta.</Text>

            <View style={{ display: 'flex', justifyContent: 'column', gap: 5, marginTop: 15 }}>
                <Label>Localização</Label>
                <Text>Utilizada para buscar eventos perto de você e registrar suas atividades como corridas e pedaladas. Estes dados são de leitura temporária, não salvamos sua localização.</Text>
            </View>

            <Button>Ver menos</Button>
            <Hr />

            <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 10 }}>Utilização do APP</Text>
            <Text style={{ marginBottom: 5, fontSize: 15 }}>Como registrar seu progresso nos vídeos e até mesmo sua navegação no APP: Para personalizar sua experiência e analisar possíveis melhorias.</Text>
            <Text style={{ fontWeight: 300 }}>Estes dados contêm diversas informações sobre o conteúdo relacionado a eles, para facilitar o entendimento resumiremos eles em números.</Text>

            <View style={{ marginTop: 20 }}>
                <Text>0 Treinos assistidos</Text>
                <Text>0 Playlists criadas</Text>
                <Text>0 Eventos ao vivo assistidos</Text>
                <Text>0 Treinos avaliados</Text>
                <Text>3 Inscrições em eventos</Text>
                <Text>0 Resultados sincronizados</Text>
                <Text>0 Assinatura / Renovações realizadas</Text>
                <Text>3 Dispositivos já registrados</Text>
            </View>

            <Hr marginTop={30} marginBottom={15} />
            <Text style={{ fontWeight: 600, fontSize: 18, marginBottom: 5 }}>Localização</Text>
            <Text>Utilizada para buscar eventos perto de você e registrar suas atividades como corridas e pedaladas. Estes dados são de leitura temporária, não salvamos sua localização.</Text>

            <Info.External.Container>
                <Text style={{ fontSize: 18, marginTop: 25 }}>Veja com quem os seus dados são compartilhados:</Text>
                <Hr />
                <Info.External.Box>
                    <Info.External.Title style={{ fontWeight: 600 , fontSize: 18 }}>Paypal</Info.External.Title>
                    <Info.External.Text>Enviamos as informações dos produtos adquiridos (Inscrições em eventos ou assinaturas) e guardamos um número de recibo enviado pela PayPal em sua conta. Os dados do cartão não são salvos pelo APP.</Info.External.Text>
                </Info.External.Box>
                <Hr />
                <Info.External.Box >
                    <Info.External.Title>DITO</Info.External.Title>
                    <Info.External.Text>Enviamos o seu comportamento dentro do APP, utilizado para realizar campanhas de marketing.</Info.External.Text>
                </Info.External.Box>
                <Hr />
                <Info.External.Box>
                    <Info.External.Title>Google Analytics</Info.External.Title>
                    <Info.External.Text>Assim como a Dito, é utilizado principalmente para entendermos como você utiliza o APP.</Info.External.Text>
                </Info.External.Box>
            </Info.External.Container>
        </ScrollView>
    )
}

function Box({ label, icon }) {
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 15, borderWidth: 1, borderColor: '#ccc', borderColor: '#BCA292' }}>
            {icon}
            <Text style={{ color: text, fontWeight: 600 }}>{label}</Text>
        </Pressable>
    )
}

function Label({ children }) {
    return (
        <Text style={{ fontSize: 14, fontWeight: 500, color: text }}>
            {children}
        </Text>
    )
}

const Info = {
    User: {
        // Container: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</View>,
    },
    External: {
        Container: ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</View>,
        Box: ({ children }) => <View style={{ display: 'flex', justifyContent: 'column', gap: 7 }}>{children}</View>,
        Title: ({ children }) => <Text style={{ fontSize: 18, fontWeight: 600 }}>{children}</Text>,
        Text: ({ children }) => <Text style={{ fontSize: 15 }}>{children}</Text>
    }
}

function Button({ children, onPress }) {
    return (
        <Pressable style={{ padding: 20 }} onPress={onPress}>
            <Text style={{ color: primary, fontWeight: 600 }}>{children}</Text>
        </Pressable>
    )
}