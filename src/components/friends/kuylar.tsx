import { Text } from "@mantine/core";
import { Link } from "../misc/Link";
import { StockFriendRenderer } from "./default";

export const FriendKuylar = () => {
    return (
        <StockFriendRenderer
            image="/assets/img/other/kuylar.png"
            tooltip="kuylar.dev"
            url="https://kuylar.dev"
        >
            <Text span c="white">
                kuylar
            </Text>
        </StockFriendRenderer>
    )
}
