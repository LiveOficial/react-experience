import { primary } from "@/constants/Colors";
import { Text } from "react-native";

export default function BaseError({ children }) {
    return (
        <Text style={{ fontSize: 12, color: primary }}>
            {children}
        </Text>
    )
}