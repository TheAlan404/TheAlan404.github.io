import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar } from '@mantine/core';
import { PersonalIcons } from "./projects/PersonalIcons";

export const Header = () => {
    return (
        <Stack align="center" mt="sm">
            <Group wrap="nowrap" align="center" justify="center" className="header" p="sm" px="lg">
                <Stack align="center">
                    <Tooltip withArrow events={{ touch: true, focus: true, hover: true }} label={(
                        "made by @kiwi_asli on Instagram"
                    )} position="left">
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
