import { ActionIcon, Affix, Box, Button, Center, Group, Paper, SimpleGrid, Slider, Stack } from "@mantine/core";
import code from "../../assets/package_goddrinksjava";
import { useEffect, useMemo, useRef, useState } from "react";
import { IconPlayerStop } from "@tabler/icons-react";
import { IconVolume } from "@tabler/icons-react";

export const GodDrinksJava = ({
    close
}: {
    close: () => void,
}) => {
    let [yOffset, setYOffset] = useState(0);
    let [volume, setVolume] = useState(0.5);

    let audioRef = useRef(useMemo(() => new Audio("/assets/audio/events/worldexecuteme.webm"), []));

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        audioRef.current.play();
        audioRef.current.volume = volume;
        audioRef.current.onended = () => close();

        let handle;
        let update = () => {
            setYOffset(audioRef.current.currentTime * 5);
            handle = requestAnimationFrame(update);
        }
        handle = requestAnimationFrame(update);

        return () => {
            audioRef.current.pause();
            cancelAnimationFrame(handle);
        }
    }, []);

    return (
        <>
            <Affix position={{ bottom: "1em", left: "1em" }}>
                <Group>
                    <Button
                        variant="light"
                        color="gray"
                        leftSection={<IconPlayerStop />}
                        onClick={() => close()}
                    >
                        Stop
                    </Button>
                    <Paper withBorder h="2em" w="10em">
                        <Stack align="center" justify="center" h="100%" px="sm">
                            <Slider
                                w="100%"
                                value={volume}
                                onChange={(v) => setVolume(v)}
                                min={0}
                                max={1}
                                step={0.05}
                            />
                        </Stack>
                    </Paper>
                    <Box w="12em" h="2em" />
                </Group>
            </Affix>
            <div
                style={{
                    position: "fixed",
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                    width: "100vw",
                    height: "100vh",
                    overflow: "visible",
                    animation: "100s linear execution",
                    left: "0%",
                    padding: "1em",
                    color: "var(--mantine-color-dimmed)",
                    fontFamily: "monospace",
                    top: `${-yOffset}%`,
                    transition: "transform 100ms linear",
                }}
            >
                {code}
            </div>
        </>
    )
}
