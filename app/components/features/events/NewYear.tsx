import { Center, Code, Collapse, Group, Slider, Space, Stack, Text, Title, Transition } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useBeatdrop } from "./useBeatdrop";
import { Section } from "../../ui/Section";
import { IconVolume } from "@tabler/icons-react";

const explode = {
    in: { opacity: 1, transform: 'scale(1)' },
    out: { opacity: 0, transform: 'scale(5)' },
    common: { transformOrigin: 'center' },
    transitionProperty: 'transform, opacity',
};

export const NewYearEvent = () => {
    const {
        beatDidDrop,
        startPlaybackOn,
        isPlaying,
        timer,
        volume,
        setVolume,
        err,
    } = useBeatdrop({
        // beatDropOn: new Date("2024-12-30T22:02"),
        beatDropOn: new Date("2025-01-01T00:00"),
        audioSrc: "/assets/audio/events/Opus.mp4",
        beatDropPosition: 3*60+42,
    });

    return (
        <Stack m="xl" p="xl" ta="center" align="center">
            {beatDidDrop && (
                <Title c="dimmed">Welcome to 2025!</Title>
            )}
            {!beatDidDrop && (
                <Title order={2}>Time until 2025:</Title>
            )}
            <Transition
                mounted={!beatDidDrop}
                // mounted={false}
                transition={explode}
                timingFunction="ease"
                duration={700}
            >
                {(styles) => (
                    <Group style={styles} justify="center" ta="center">
                        <Section>
                            <Text fz={36} w="12rem" ta="center">
                                {timer}
                            </Text>
                        </Section>
                    </Group>
                )}
            </Transition>
            {beatDidDrop && (
                <Text>happy new year!!!</Text>
            )}
            <Collapse in={!!err}>
                <Text c="yellow" fw="bold">can't play audio - click anywhere please!</Text>
            </Collapse>
            <Collapse in={!!isPlaying}>
                <Stack>
                    <Text c="dimmed" fs="italic">
                        Now playing: Opus - Eric Prydz
                    </Text>
                    <Group c="dimmed">
                        <IconVolume />
                        <Slider
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={setVolume}
                            w="10em"
                        />
                    </Group>
                </Stack>
            </Collapse>
            
            {!beatDidDrop && !isPlaying && !err && (
                <Text>come back when timer has 4 mins left for something fun</Text>
            )}
        </Stack>
    )
}
