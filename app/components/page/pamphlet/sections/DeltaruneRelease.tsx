import { Anchor, Code, Divider, Group, Image, Stack, Text } from "@mantine/core";
import { useCountdown } from "~/components/features/events/useCountdown";

export const DeltaruneRelease = () => {
    const RELEASE_DATE = new Date("2025-06-05T00:00:00-04:00");
    const MAX_RETENTION = new Date("2025-06-10T00:00:00-04:00")

    const {
        countdownReached,
        timerText,
    } = useCountdown({
        countdownTime: RELEASE_DATE,
    });

    if (countdownReached && Date.now() > MAX_RETENTION.getTime()) {
        return null;
    }

    return (
        <Stack align="center" w="100%">
            <Divider
                w="80%"
                label="deltarune tomorrow"
            />

            <Group gap="xs">
                <Anchor
                    href="https://deltarune.com"
                    target="_blank"
                >
                    <Image
                        src="/assets/img/ico/deltarune.png"
                        h="1rem"
                        w="auto"
                    />
                </Anchor>
                <Text c="white" inline>Chapters 1-4</Text>
            </Group>

            <Stack gap={0} align="center">
                <Code fw="bold" fz="xl" ff="monospace">{timerText}</Code>
                <Text fz="xs" c="dimmed">June 5, 2025</Text>
            </Stack>
        </Stack>
    )
};
