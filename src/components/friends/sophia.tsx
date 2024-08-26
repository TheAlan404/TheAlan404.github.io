import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../misc/Link";
import { StockFriendRenderer } from "./default";

export const FriendSophia = () => {
    return (
        <StockFriendRenderer
            image="https://avigail.me/sophia/0.png"
            tooltip="avigail.me"
            url="https://avigail.me"
        >
            <Text span c="white">
                Sophia
            </Text>
        </StockFriendRenderer>
    )
}
