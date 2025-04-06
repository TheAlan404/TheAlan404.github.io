import { Box, Divider, Group, Image, Stack, Text, Tooltip } from "@mantine/core"

export const Motd = () => {
    if(!new Date().toISOString().startsWith("2025-04-06")) return null;

    return (
        <Stack align="center" w="100%" px="sm">
            <Divider
                label="Message of the Day"
                w="80%"
            />

            <Stack gap={0}>
                <Group gap={4}>
                    <Image
                        src="/assets/img/ico/aceflag.svg"
                        radius="xs"
                        h="2rem"
                        w="auto"
                    />
                    <Stack gap={0}>
                        <Text fz="xs" c="dimmed" inline>6th April</Text>
                        <Text ff="heading" inline>International Asexuality Day</Text>
                    </Stack>
                </Group>
            </Stack>
        </Stack>
    );
}

