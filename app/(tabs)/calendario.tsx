import { Page } from "@/components/LiveExperience";
import { Text } from "react-native";
import { Header } from "@/components/Header";

export default function Calendar() {
    const header = <Header>Meu Calendário</Header>

    return (
        <Page padding={10} header={header}>
            <Text>Calendar Page</Text>
        </Page>
    )
}