import { Stack, Group, Avatar, Title, Text } from "@mantine/core";
import { Socials } from "~/components/page/pamphlet/Socials";

export const PamphletHeader = () => {
    return (
        <Stack p="sm" gap="sm">
            <Group wrap="nowrap" gap="xs" justify="center">
                <Avatar
                    size="lg"
                    src="/assets/img/me/dennis_yagiz_rust_pfp.jpg"
                    style={{
                        imageRendering: "auto",
                    }}
                />
                <Stack gap={0}>
                    <CoolName />
                    <Text c="dimmed">
                        fullstack software developer
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

