import { Avatar, Stack, Tooltip } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const DennisAvatar = () => {
    const [t] = useTranslation();

    return (
        <Stack align="center">
            <Tooltip
                withArrow
                events={{ touch: true, focus: true, hover: true }}
                label={t("header.avatarTooltip")}
                position="left"
            >
                <Avatar
                    src="/assets/img/me/dennis_ka_pfp.png"
                    size="lg"
                    draggable={false}
                    style={{ userSelect: "none" }}
                />
            </Tooltip>
        </Stack>
    )
};
