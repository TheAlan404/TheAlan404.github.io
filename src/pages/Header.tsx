import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar } from '@mantine/core';
import { PersonalIcons } from "./projects/PersonalIcons";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";

export const Header = () => {
    const [t] = useTranslation();
    const [preview, { toggle }] = useDisclosure();

    return (
        <Stack
            align="center"
            justify="center"
            gap={0}
            my={preview ? "calc((100vh / 2) - 36px)" : "md"}
            style={{
                //height: preview ? "100vh" : "auto",
                transition: "all .5s ease-in-out",
            }}
        >
            <Group wrap="nowrap" align="center" justify="center" className="header" p="sm" px="lg">
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
                <Stack align="center" gap={0}>
                    <Group align="center" wrap="nowrap" gap="xs">
                        <Image
                            onClick={toggle}
                            className="hoverable"
                            style={{
                                transform: `rotate(${preview ? 360 : 0}deg)`,
                                transition: "transform .1s",
                            }}
                            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2728.png"
                            h="1.5rem"
                            w="1.5rem"
                        />
                        <Title>deniz.blue</Title>
                        <Image
                            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f338.png"
                            h="1.5rem"
                            w="1.5rem"
                        />
                    </Group>
                    <PersonalIcons />
                </Stack>
            </Group>
        </Stack>
    )
}
