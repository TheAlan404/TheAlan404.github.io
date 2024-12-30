import { Center, Code, Group, Space, Stack, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useBeatdrop } from "./useBeatdrop";

export const NewYearEvent = () => {
    const {
        beatDidDrop,
        startPlaybackOn,
        isPlaying,
        timer,
    } = useBeatdrop({
        // beatDropOn: new Date("2024-12-20T21:25"),
        beatDropOn: new Date("2025-01-01T00:00"),
        audioSrc: "/assets/audio/events/Opus.mp4",
        beatDropPosition: 3*60+43,
    });

    return (
        <Stack m="xl" p="xl" ta="center" align="center">
            <Title order={2}>{beatDidDrop ? "Welcome to 2024!" : "Time until 2025:"}</Title>
            {!beatDidDrop && (
                <Group>
                    <Code fz="xl">{timer}</Code>
                </Group>
            )}
            {isPlaying && (
                <Text c="dimmed" fs="italic">
                    Now playing: Opus - Eric Prydz
                </Text>
            )}
            {beatDidDrop && (
                <Text>happy new year everyone</Text>
            )}
            {!beatDidDrop && !isPlaying && (
                <Text>come back when 5 mins left for something interesting</Text>
            )}
        </Stack>
    )
}
