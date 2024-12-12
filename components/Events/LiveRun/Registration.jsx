import { Text as RNText, View } from "react-native"
import { Lightning } from "@/components/Icons"
import { useState } from "react"
import { Hr } from "@/components/LiveExperience"
import { black, borderColor, primary, text } from "@/constants/Colors"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"

export default function Registration(props) {
    const [step, setStep] = useState(1)

    const steps = {
        1: (props) => <StepOne { ...props } nextStep={() => setStep(2)} />,
        2: (props) => <StepTwo { ...props } nextStep={() => setStep(3)} />,
        3: (props) => <StepThree { ...props } />
    }

    return (
        <>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 }}>
                {step === 1 && <Circle icon={<Lightning color='white' />} />}
                <Text active={step === 1} done={step > 1}>Evento</Text>
                <Dash />
                {step === 2 && <Circle icon={<Lightning color='white' />} />}
                <Text active={step === 2} done={step > 2}>Cadastro</Text>
                <Dash />
                {step === 3 && <Circle icon={<Lightning color='white' />} />}
                <Text active={step === 3} done={step > 3}>Pagamento</Text>
            </View>
            <Hr marginVertical={20} />
            {steps[step](props)}
        </>
    )
}

const Text = ({ children, active, done }) => <RNText style={{ fontSize: 15, fontWeight: 500, color: done ? primary : active ? black : text }}>{children}</RNText>
const Circle = ({ icon }) => <View style={{ borderRadius: 50, backgroundColor: primary, padding: 7 }}>{icon}</View>
const Dash = () => <View style={{ flexGrow: 1, borderBottomColor: borderColor, borderBottomWidth: 2, alignSelf : 'center' }} />
