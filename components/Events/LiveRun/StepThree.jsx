import { Pressable, Text, View } from "react-native";
import { Input, Radio, Hr, HighlightedButton } from "@/components/LiveExperience";
import { EditProfile } from "@/components/Icons";
import { primary } from "@/constants/Colors";
import { useEffect } from "react";
import { Title } from "../Components";

export default function StepThree({ slug, event, setFloatingBox, nextStep }) {
    useEffect(() => setFloatingBox(null), [])

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <Title>Seus dados</Title>
                <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, padding: 10 }}>
                    <EditProfile color={primary} />
                    <Text style={{ color: primary, fontWeight: 500 }}>Editar</Text>
                </Pressable>
            </View>

            <Box>
                <Item.Title>Nome e sobrenome</Item.Title>
                <Text>Taís Lime</Text>
            </Box>
            <Box>
                <Item.Title>Idade</Item.Title>
                <Text>30 anos</Text>
            </Box>
            <Box>
                <Item.Title>CPF</Item.Title>
                <Text>052.000.000-00</Text>
            </Box>
            <Box>
                <Item.Title>Gênero</Item.Title>
                <Text>Feminino</Text>
            </Box>

            <Hr marginBottom={20} />

            <Title>Sua inscrição</Title>

            <Text>Evento</Text>
            <Text>LIVE! RUN XP São José do Vale do Rio Preto</Text>

            <Text>Data</Text>
            <Text>01/01/2023</Text>

            <Text>Modalidade</Text>
            <Text>5 km</Text>


            <HighlightedButton>
                Finalizar pagamento
            </HighlightedButton>

        </View>
    )
}

const Box = ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 20 }}>{children}</View>

const Item = {
    Title: ({ children }) => <Text style={{ fontWeight: 500 }}>{children}</Text>,
    Value: ({ children }) => <Text>{children}</Text>
}