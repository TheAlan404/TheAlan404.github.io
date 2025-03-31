import { Stack, Group, Avatar, Title, Text, Space, Box, Paper } from "@mantine/core";
import { Socials } from "~/components/page/pamphlet/Socials";

export const PamphletHeader = () => {
    return (
        <Stack px="xs" pb="xs" gap="sm">
            <Box style={{
                position: "absolute",
                top: "-2.1rem",
                left: "0.5rem",
            }}>
                <Paper
                    className="frost"
                    withBorder
                    w="6rem"
                    h="6rem"
                    pos="absolute"
                    style={{
                        top: 0,
                        borderRadius: "50%",
                        clipPath: "rect(0% 100% 2.09rem 0%)",
                    }}
                />
                <Avatar
                    pos="absolute"
                    size="5rem"
                    src="/assets/img/me/dennis_yagiz_rust_pfp.jpg"
                    style={{
                        top: "0.5rem",
                        left: "0.5rem",
                        imageRendering: "auto",
                    }}
                />
            </Box>


            <Group wrap="nowrap" gap="xs" justify="start">
                <Space w="5.5rem" />
                <Stack gap={0} pt="xs">
                    <CoolName />
                    <Text c="dimmed" inline span>
                        developer & cosplayer
                    </Text>
                </Stack>
            </Group>

            <Stack align="center">
                <Socials />
            </Stack>
        </Stack>
    )
};

export const CoolName = () => {
    return (
        <Title order={3}>
            <Group gap={8} align="center">
                <Text span inherit>
                    hi, i'm
                </Text>

                <Group gap={0} align="end" className="rainbowText">
                    {"Gökçe Deniz".split("").map((letter, i) => (
                        <Text
                            inherit
                            span
                            key={i}
                            className="name-letter"
                            style={{ "--i": i }}
                            w={letter == " " ? "8px" : undefined}
                        >
                            {letter}
                        </Text>
                    ))}
                </Group>
            </Group>
        </Title>
    );
};

