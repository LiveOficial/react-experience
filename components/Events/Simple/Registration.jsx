import { Alert, Pressable, Text, View } from "react-native";
import { Input, HighlightedButton, Hr, Radio, CheckBox } from "@/components/LiveExperience";
import { useState } from "react";
import { primary } from "@/constants/Colors";
import { Profile } from "@/components/Icons";

export default function Registration({ event }) {
    const [step, setStep] = useState(1)

    return (
        <>
            {step === 1 && <StepOne nextStep={() => setStep(2)} event={event} />}
            {step === 2 && <StepTwo nextStep={() => setStep(3)} event={event} />}
            {step === 3 && <StepThree event={event} />}
        </>
    )
}

function StepOne({ nextStep }) {
    const [name, setName] = useState(null)
    const [document, setDocument] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [gender, setGender] = useState(null)
    const [accepted, setAccepted] = useState(false)

    const onPressConfirmation = () => {
        if (!accepted) {
            Alert.alert('Atenção', 'aceite os termos')
        } else {
            nextStep()
        }
    }

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 30, width: 30, backgroundColor: primary, borderRadius: 50 }}>
                        <Profile color="#fff" />
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 500 }}>Cadastro</Text>
                </View>

                <View style={{ height: 2, width: '20', backgroundColor: 'black' }} />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    {false && <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 30, width: 30, backgroundColor: primary, borderRadius: 50 }}>
                        <Profile color="#fff" />
                    </View>}
                    <Text style={{ fontSize: 17, fontWeight: 500 }}>Pagamento</Text>
                </View>
            </View>
            <Hr marginVertical={20} />
            <Text style={{ fontSize: 18 }}>Informe os dados do participante</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 20 }}>
                <CheckBox value={accepted} setValue={setAccepted} />
                <Text style={{ fontWeight: 500 }}>Preencher com meus dados</Text>
            </View>
            <View style={{ display: 'flex',  flexDirection: 'column', gap: 10 }}>
                <FormGroup>
                    <Label>Nome e sobrenome</Label>
                    <Input value={name} onChangeText={setName} placeholder="Insira seu nome e sobrenome" />
                </FormGroup>
                <FormGroup>
                    <Label>CPF</Label>
                    <Input value={document} onChangeText={setDocument} placeholder="000.000.000-00" />
                </FormGroup>
                <FormGroup>
                    <Label>Data de Nascimento</Label>
                    <Input value={birthDate} onChangeText={setBirthDate} placeholder="dd/mm/aaaa" />
                </FormGroup>
                <FormGroup>
                    <Label>Gênero</Label>
                    <Radio.Group>
                        <Radio.Option selected={gender === 'masculino'} onPress={() => setGender('masculino')}>
                            <Text style={{ fontSize: 13, fontWeight: 600 }}>Masculino</Text>
                        </Radio.Option>
                        <Radio.Option selected={gender === 'feminino'} onPress={() => setGender('feminino')}>
                            <Text style={{ fontSize: 13, fontWeight: 600 }}>Feminino</Text>
                        </Radio.Option>
                    </Radio.Group>
                </FormGroup>
            </View>
            <Hr marginTop={30} marginBottom={10} />
            <Text style={{ marginBottom: 10, fontSize: 18 }}>Termos e regulamento</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
                <CheckBox value={accepted} setValue={setAccepted} />
                <Pressable style={{ flex: 1 }} onPress={() => setAccepted(!accepted)}>
                    <Text style={{ fontSize: 15 }}>Concordo que os dados pessoais fornecidos acima serão utilizados para envio de conteúdo informativo, analítico e publicitário sobre produtos, serviços e assuntos gerais, nos termos da Lei Geral de Proteção de Dados. Ao clicar no botão e continuar com a sua inscrição, você autoriza a LIVE! a coletar seus dados pessoais de acordo com nosso Termos de Uso e Política de Privacidade</Text>
                </Pressable>
            </View>
            <Hr marginTop={20} />
            <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>Entrada</Text>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>R$ 90,00</Text>
            </View>
            <HighlightedButton onPress={onPressConfirmation}>Ir para confirmação</HighlightedButton>
        </>
    )
}

function StepTwo({ nextStep }) {
    return (
        <View>
            <Text>Seus dados</Text>

            <Text>Noem e sobrenome</Text>
            <Text>Tais Lima</Text>

            <Text>Idade</Text>
            <Text>22 anos</Text>

            <Text>CPF</Text>
            <Text>000.000.000-00</Text>

            <Text>Gênero</Text>
            <Text>Masculino</Text>

            <Hr />

            <Text>Sua inscrição</Text>

            <Text>Evento</Text>
            <Text>Clinica de Tênis LIVE! e XP com André Ghem</Text>

            <Text>Data</Text>
            <Text>01/01/2023</Text>

            <Text>Local</Text>
            <Text>Centro de Tênis de Papicu</Text>

            <Hr></Hr>
            <HighlightedButton onPress={nextStep}>Finalizar pagamento</HighlightedButton>
        </View>
    )
}

function StepThree({ }) {
    return (
        <View>
            <Text>Confirmação</Text>
            <Text>Pagamento realizado</Text>
            <Text>Enviaremos um e-mail de confirmação para exemplo@gmail.com</Text>
            <Hr></Hr>
            <Text>Sua compra</Text>
            <Text>Clinica de Tênis LIVE! e XP com André Ghem</Text>
            <Text>R$ 90,00</Text>
            <Text>Data do evento</Text>
            <Text>01/01/2023</Text>
            <Text>Local</Text>
            <Text>Centro de Tênis de Papicu</Text>
            <Hr></Hr>
            <Text>Pagamento</Text>
            <HighlightedButton>Meu pedidos</HighlightedButton>
        </View>
    )
}

const FormGroup = ({ children }) => <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>{children}</View>
const Label = ({ children, style }) => <Text style={{ fontWeight: 500, color: '#5E4738', ...style }}>{children}</Text>