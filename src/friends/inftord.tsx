import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../components/Link";
import { StockFriendRenderer } from "./default";

export const FriendInftord = () => {
    return (
        <StockFriendRenderer
            image="/img/other/inftord.png"
            tooltip="inftord.tech"
            url="https://inftord.tech"
        >
            <Text span c="white">
                InF
            </Text>
        </StockFriendRenderer>
    )
}
