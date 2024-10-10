import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronLeft } from "@/components/Icons";
import { FormBox, Label } from "@/components/CommomPages";
import { Input } from "@/components/LiveExperience";
import { body } from "@/constants/Colors";
import { router } from "expo-router";

export default function EditarPerfil() {
    return (
        <ScrollView style={{ backgroundColor: body, paddingHorizontal: 20, paddingTop: 50 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <ChevronLeft />
                </Pressable>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Editar perfil</Text>
                </View>
                <View />
            </View>

            <View>
                <Text>Seus dados</Text>


            </View>

            <FormBox>
                <Label>Nome e sobrenome</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>E-mail</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>CPF</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>Telefone</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>Data de nascimento</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>Gênero</Label>
                <Input></Input>
            </FormBox>

            <FormBox>
                <Label>Nome e sobrenome</Label>
                <Input></Input>
            </FormBox>

        </ScrollView>
    )
}