import { Pressable, ScrollView, Text, View } from "react-native";
import { Label, FormBox } from "@/components/CommomPages";
import { Input } from "@/components/LiveExperience";
import { router } from "expo-router";
import { primary, body, text } from "@/constants/Colors";
import { ChevronLeft, Chat, Envelope } from "@/components/Icons";
import { useState } from "react";
import { HighlightedButton } from "@/components/LiveExperience";
import { Accordion, AccordionItem } from "@/components/Accordion";
import Select from '@/components/Select'

export default function Help() {
    const [section, setSection] = useState(0)

    return (
        <ScrollView style={{ backgroundColor: body, paddingTop: 60, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 50 }}>
                <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                    <ChevronLeft color={primary} />
                </Pressable>
                <Text style={{ fontSize: 20 }}>Ajuda</Text>
                <View />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                <Button active={section === 0} label='Perguntas frequentes' icon={<Chat color={text} />} onPress={() => setSection(0)} />
                <Button active={section === 1} label='Contato' icon={<Envelope color={text} />} onPress={() => setSection(1)} />
            </View>
            <View style={{ paddingVertical: 10 }}>
                {section === 0 ? <FrequentQuestions /> : <Contact />}
            </View>
        </ScrollView>
    )
}

function Button({ label, icon, onPress, active }) {
    return (
        <Pressable onPress={onPress} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: active ? 2 : 1, borderColor: 'red', borderBottomColor: active ? '#BCA292' : '#ccc', paddingHorizontal: 10 }}>
            {icon}
            <Text style={{ color: text, padding: 10, fontWeight: active ? 600 : 500 }}>{label}</Text>
        </Pressable>
    )
}

function Contact() {
    const [subject, setSubject] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [cellphone, setCellphone] = useState(null)
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)
        api.post('faq/contato', { subject, name, email, cellphone, message })
            .then()
            .catch()
            .finally(() => setLoading(false))
    }

    const handleSetSubject = (value) => {
        setSubject(value)
    }

    return (
        <View style={{ paddingTop: 15 }}>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>Quer tirar dúvidas ou está precisando de ajuda para resolver algum problema? Fale conosco, queremos que você tenha a melhor experiência possível aqui.</Text>
            <FormBox>
                <Label>Tipo de solicitação</Label>
                <Select.Root placeholder={'Selecionar tipo de solicitação'} value={subject} setValue={setSubject} backgroundColor='#fff'>
                    <Select.Option onPress={() => handleSetSubject('suporte')}>Suporte</Select.Option>
                    <Select.Option onPress={() => handleSetSubject('duvidas')}>Dúvidas</Select.Option>
                    <Select.Option onPress={() => handleSetSubject('feedback')}>Feedback</Select.Option>
                </Select.Root>
            </FormBox>
            <FormBox>
                <Label>Nome</Label>
                <Input value={name} setValue={setName} placeholder="Insira seu e-mail" />
            </FormBox>
            <FormBox>
                <Label>E-mail</Label>
                <Input value={email} setValue={setEmail} placeholder="Insira seu e-mail" />
            </FormBox>
            <FormBox>
                <Label>Telefone</Label>
                <Input value={cellphone} setValue={setCellphone} placeholder="Insira seu telefone" />
            </FormBox>
            <FormBox>
                <Label>Descrição</Label>
                <Input value={message} setValue={setMessage} placeholder="Descreva sua solicitação" />
            </FormBox>
            <HighlightedButton onPress={() => onSubmit()} loading={loading}>
                Enviar
            </HighlightedButton>
        </View>
    )
}

function FrequentQuestions() {

    const questions = [
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        },
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        },
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        },
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        },
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        },
        {
            title: 'Como faço para realizar meu cadastro no App?',
            answer: 'Baixe o app LIVE! Experience na Apple Store ou Play Store, clique em cadastrar-se, crie seu perfil com um e-mail e depois é só escolher o evento ou as aulas que deseja assistir.'
        }
    ]

    return (
        <Accordion>
            {questions.map((question) => {
                return (
                    <AccordionItem title={question.title}>
                        <Text>{question.answer}</Text>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}