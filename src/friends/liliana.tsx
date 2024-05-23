import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../components/Link";
import { StockFriendRenderer } from "./default";

const URL = "";

export const FriendLiliana = () => {
    return (
        <StockFriendRenderer
            image="/img/other/liliana.png"
            tooltip="parlesgosa.design"
            url="https://parlesgosa.design"
        >
            <Text span c="white">
                Liliana
            </Text>
        </StockFriendRenderer>
    )
}
