import { Image, Pressable, ScrollView, Text, View, Share as NativeShare } from "react-native"
import { body, primary, secondary } from '@/constants/Colors'
import { Share, ChevronLeft, Calendar, Flag, Label, Folks } from "@/components/Icons";
import { router } from "expo-router";
import { Accordion, AccordionItem } from "@/components/Accordion";
import { Gradient, GradientRun } from "@/components/LiveExperience";

export default function Event() {
    return (
        <>
            <ScrollView style={{ backgroundColor: body, paddingTop: 60 }} showsVerticalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                        <Pressable style={{ padding: 10 }} onPress={() => router.back()}>
                            <ChevronLeft />
                        </Pressable>
                        <View>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>Evento</Text>
                        </View>
                        <Pressable style={{ padding: 10 }} onPress={() => NativeShare.share({ message: 'React Native | A framework for building native apps using React' }) }>
                            <Share />
                        </Pressable>
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20, marginTop: 50 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 500 }}>24</Text>
                            <Text style={{ fontSize: 18, fontWeight: 500 }}>NOV</Text>
                        </View>
                        <Title>LIVE! RUN XP São Jose do Vale do Rio Preto</Title>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 35 }}>
                        <DetailBox icon={<Calendar />}>
                            <DetailTitle>Data</DetailTitle>
                            <DetailValue>Domingo, 24 de novembro de 2024</DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Flag />}>
                            <DetailTitle>Local da largada</DetailTitle>
                            <DetailValue>Praça do Livedo s/n - Bairro dos Ipês, 22020-030 - RJ dwadwadijdawddddddddddddd </DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Label />}>
                            <DetailTitle>Tipo de evento</DetailTitle>
                            <DetailValue>Corrida</DetailValue>
                        </DetailBox>
                        <DetailBox icon={<Folks />}>
                            <DetailTitle>Público</DetailTitle>
                            <DetailValue>Adulto, Kids</DetailValue>
                        </DetailBox>
                    </View>

                    <Accordion>
                        <AccordionItem title="Kits">
                            <ScrollView horizontal>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 20 }}>
                                    <Gradient>
                                        <Image
                                            style={{ width: 250, height: 250, borderRadius: 10 }}
                                            source={{
                                                uri: 'https://s3-alpha-sig.figma.com/img/ffba/7277/d82cc118c361b36e6851aae32fb52edd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrT31sDXXpzHuz2ZAG~~9tGiefi~~o-ezGJp9h~RTrMhxxDtUeASh0VlQNgtSGtdGpmjzOsiVGtCGFEYCzzIfLayEZr9KA6NE6Zwh6FU6KoR2STvLEUigfhZmOu1mbPebs79vdTvqoURyUTes~zVc7tADfwrgYxsMAC4xO7Mn57X3jD8GnDZ2tECEjKFVMshgtTaoUYcmcZ2Ycd03g6OJqsCFR9Zyvdr9zhYaHf1i7xi1I-pjRLNU5a05CFUVTeXDrSOOJFcHPHApSWY5zP~gdKgxEJ5Yin9bFRCzR~UFLtdB8hhDlHMmSdbbbEoWGEtboNSwBzj7OuLzbu9oI7i5A__',
                                            }}
                                        />
                                    </Gradient>
                                    <Gradient>
                                        <Image
                                            style={{ width: 250, height: 250, borderRadius: 10 }}
                                            source={{
                                                uri: 'https://s3-alpha-sig.figma.com/img/ffba/7277/d82cc118c361b36e6851aae32fb52edd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrT31sDXXpzHuz2ZAG~~9tGiefi~~o-ezGJp9h~RTrMhxxDtUeASh0VlQNgtSGtdGpmjzOsiVGtCGFEYCzzIfLayEZr9KA6NE6Zwh6FU6KoR2STvLEUigfhZmOu1mbPebs79vdTvqoURyUTes~zVc7tADfwrgYxsMAC4xO7Mn57X3jD8GnDZ2tECEjKFVMshgtTaoUYcmcZ2Ycd03g6OJqsCFR9Zyvdr9zhYaHf1i7xi1I-pjRLNU5a05CFUVTeXDrSOOJFcHPHApSWY5zP~gdKgxEJ5Yin9bFRCzR~UFLtdB8hhDlHMmSdbbbEoWGEtboNSwBzj7OuLzbu9oI7i5A__',
                                            }}
                                        />
                                    </Gradient>
                                </View>
                            </ScrollView>
                        </AccordionItem>
                        <AccordionItem title="Percursos">
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    {['16km','8km','4km'].map((i) => (
                                        <Pressable style={{ backgroundColor: secondary, flexGrow: 1 }} onPress={() => {}}>
                                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 10, }}>
                                                {i}
                                            </Text>
                                            <GradientRun />
                                        </Pressable>
                                    ))}
                                </View>
                            </View>
                        </AccordionItem>
                        <AccordionItem title="Inscrições">
                            <Text>Descricão</Text>
                        </AccordionItem>
                    </Accordion>
                </View>
            </ScrollView>
            <FloatingBox />
        </>
    )
}

function DetailBox({ children, icon }) {
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
}

function DetailTitle({ children }) {
    return (
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
            {children}
        </Text>
    )
}

function DetailValue({ children }) {
    return (
        <Text style={{ fontSize: 14 }}>
            {children}
        </Text>
    )
}

function Title({ children }) {
    return (
        <Text style={{ fontSize: 35, fontWeight: 500, flexShrink: 1 }}>
            {children}
        </Text>
    )
}

function FloatingBox() {
    return (
        <View onPress={() => router.back()} style={{ position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: secondary, paddingTop: 20, paddingBottom: 30, paddingHorizontal: 30 }}>
            <View style={{ width: '60%' }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>LIVE! RUN XP São José do Vale do Rio Preto</Text>
                <Text>Domingo, 24/11</Text>
            </View>
            <View>
                <Pressable style={{ backgroundColor: primary, padding: 15 }} onPress={() => router.push('/eventos/[slug]/inscrever')}>
                    <Text style={{ color: '#fff', fontSize: 15 }}>Inscrever-se</Text>
                </Pressable>
            </View>
        </View>
    )
}