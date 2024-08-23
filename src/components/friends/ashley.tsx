import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../misc/Link";
import { StockFriendRenderer } from "./default";

export const FriendAshley = () => {
    return (
        <StockFriendRenderer
            image="https://cdn.glitch.global/302c6ee0-629f-453b-9024-bad1f8d7be36/ashley.png"
            tooltip="ashley0143.xyz"
            url="https://ashley0143.xyz/"
        >
            <Text span c="white">
                Ashley
            </Text>
        </StockFriendRenderer>
    )
}
