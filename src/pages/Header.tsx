import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar } from '@mantine/core';
import { PersonalIcons } from "./projects/PersonalIcons";

export const Header = () => {
    return (
        <Stack align="center" pt="xl">
            <Group wrap="nowrap" align="center" justify="center">
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
                        <Text span fz={22}>✨</Text>
                        <Title>deniz.blue</Title>
                        <Text span fz={22}>🌸</Text>
                    </Group>
                    <PersonalIcons />
                </Stack>
            </Group>
            <Group gap={5} align="center" className="transText">
                {/* {["0.2em", "0.4em", "1em", null, "1em", "0.4em", "0.2em"].map((w, i) => (
                    w ? (
                        <Divider
                            w={w}
                            key={i}
                        />
                    ) : (
                        <Text className="rainbowText" span key={i} fz="sm" style={{ top: "-0.05em", position: "relative" }}>
                            ☆
                        </Text>
                    )
                ))} */}
            </Group>
        </Stack>
    )
}
