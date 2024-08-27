import { Text } from "@mantine/core";
import { StockFriendRenderer } from "./default";

export const FriendSparkles = () => {
    return (
        <StockFriendRenderer
            image="/assets/img/other/sparkles.jpg"
            tooltip="namsis.gayest.systems"
            url="https://namsis.gayest.systems/"
        >
            <Text span c="white">
                Sparkles ✨
            </Text>
        </StockFriendRenderer>
    )
}
