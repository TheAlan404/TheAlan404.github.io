import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../components/Link";
import { StockFriendRenderer } from "./default";

export const FriendSophia = () => {
    return (
        <StockFriendRenderer
            image="https://finnacloud.s3.amazonaws.com/pfps/scross-red.jpg"
            tooltip="lesbians.lol"
            url="https://lesbians.lol"
        >
            <Text span c="white">
                S. Brooks
            </Text>
        </StockFriendRenderer>
    )
}
