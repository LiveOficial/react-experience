import { Header, Page } from "@/components/LiveExperience";
import { Text } from "react-native";

export default function Calendar() {
    const header = <Header right={'teste'} left={'teste'}>Meu Calendário</Header>

    return (
        <Page padding={10} header={header}>
            <Text>Calendar Page</Text>
        </Page>
    )
}