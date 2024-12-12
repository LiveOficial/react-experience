import { Text, View } from "react-native";
import { CheckBox, Hr, Input, Radio } from "@/components/LiveExperience";
import { Title, Label, RadioText } from "../Components";
import { useEffect } from "react";
import { primary } from "@/constants/Colors";

export default function StepTwo({ slug, event, setFloatingBox, nextStep }) {
    useEffect(() => setFloatingBox({ title: 'Kit atleta', button: { label: 'Ir para pagamento', onPress: () => nextStep() } }), [])

    return (
        <View>
            <Title>Informe os dados do participante</Title>

            <CheckBox style={{ marginVertical: 20 }}>
                <Text style={{ fontWeight: 500 }}>Preencher com meus dados</Text>
            </CheckBox>
            <Box>
                <Label>Nome e sobrenome</Label>
                <Input placeholder="Nome e sobrenome" />
            </Box>
            <Box>
                <Label>CPF</Label>
                <Input placeholder="000.000.000-00" />
            </Box>
            <Box>
                <Label>Data de nascimento</Label>
                <Input placeholder="00/00/0000" />
            </Box>
            <Box>
                <Label>Gênero</Label>
                <View>
                    <Radio>
                        <RadioText>Masculino</RadioText>
                    </Radio>
                    <Radio>
                        <RadioText>Feminino</RadioText>
                    </Radio>
                </View>
            </Box>
            <Box>
                <Label>Experiência</Label>
                <View>
                    <Radio>
                        <RadioText>Já sou runner</RadioText>
                    </Radio>
                    <Radio>
                        <RadioText>É minha primeira corrida</RadioText>
                    </Radio>
                </View>
            </Box>

            <Hr style={{ marginTop: 20, marginBottom: 15 }} />

            <Title>Termos e regulamento</Title>
            <View style={{ marginVertical: 20 }}>
                <CheckBox>
                    <Text>Li e concordo com o <Text style={{ fontWeight: 500, color: primary }}>regulamento da etapa.</Text></Text>
                </CheckBox>
            </View>
            <CheckBox style={{ alignItems: 'flex-start' }}>
                <Text style={{ flexShrink: 1 }}>Concordo que os dados pessoais fornecidos acima serão utilizados para envio de conteúdo informativo, analítico e publicitário sobre produtos, serviços e assuntos gerais, nos termos da Lei Geral de Proteção de Dados. Ao clicar no botão e continuar com a sua inscrição, você autoriza a LIVE! a coletar seus dados pessoais de acordo com nosso Termos de Uso e Política de Privacidade</Text>
            </CheckBox>
        </View>
    )
}

const Box = ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 20 }}>{children}</View>