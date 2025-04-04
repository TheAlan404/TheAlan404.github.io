import { ActionIcon, ActionIconProps, Badge, Box, Button, Group, Image, Modal, Paper, Progress, ScrollArea, Space, Stack, Text, UnstyledButton } from "@mantine/core";
import { MUSIC_DATA } from "./data";
import { Song, useMusicPlayer } from "./MusicPlayerContext";
import { useUIState } from "~/components/base/UIContext";
import { useHotkeys } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

export const MusicPickerOverlay = () => {
    const { musicPopout, disable, toggle } = useUIState();

    useHotkeys([["m", () => toggle("musicPopout")]])

    return (
        <Modal.Root
            opened={musicPopout}
            onClose={() => disable("musicPopout")}
            removeScrollProps={{ enabled: false }}
            yOffset={0}
            xOffset={0}
            transitionProps={{ transition: "fade-up" }}
        >
            <Modal.Overlay
                backgroundOpacity={0}
            />
            <Modal.Content
                classNames={{
                    content: "frost bordered",
                }}
                styles={{
                    inner: {
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        padding: "var(--mantine-spacing-md)",
                    },
                    content: {
                        padding: 0,
                    },
                }}
            >
                <Modal.Body p={0}>
                    <MusicPicker />
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )
};

export const MusicPicker = () => {

    return (
        <Stack gap="xs">
            <Group justify="space-between" pl="xs" pr={20} pt="xs">
                <Text fz="xs" fw="bold" span>
                    MUSIC
                    {" "}
                    <Text span inline inherit c="yellow">WIP</Text>
                </Text>
                <Modal.CloseButton size="sm" variant="light" />
            </Group>
            <Stack gap="xs" pt={4} px={4}>
                <ScrollArea.Autosize
                    mah="70dvh"
                    offsetScrollbars="y"
                >
                    <Stack px="xs">
                        <MusicPlaylist />
                    </Stack>
                </ScrollArea.Autosize>
            </Stack>

            <MusicControls />
        </Stack>
    )
};

export const MusicControls = () => {
    return (
        <Paper className="frost">
            <Stack gap={0}>
                <Group p={4} justify="center" w="100%">
                    <PlayPauseButton />
                </Group>
                <MusicSeekbar />
            </Stack>
        </Paper>
    )
};

export const MusicSeekbar = () => {
    const { ref } = useMusicPlayer();

    const [value, setValue] = useState(ref.current ? ref.current.currentTime / ref.current.duration : 0);

    useEffect(() => {
        if (!ref.current) return;

        const abort = new AbortController();
        const { signal } = abort;

        const update = () => setValue(ref.current ? ref.current.currentTime / ref.current.duration : 0);
        ref.current.addEventListener("timeupdate", update, { signal });

        return () => void abort.abort();
    }, [ref]);

    return (
        <Progress
            value={value * 100}
            size="xs"
        />
    );
};

export const PlayPauseButton = ({
    variant = "light",
}: {
    variant?: ActionIconProps["variant"];
}) => {
    const { ref, currentSong } = useMusicPlayer();

    const [paused, setPaused] = useState(ref.current?.paused ?? true);
    const [loading, setLoading] = useState(ref.current ? ref.current.readyState < HTMLMediaElement.HAVE_CURRENT_DATA : true);

    useEffect(() => {
        if (!ref.current) return;

        const abort = new AbortController();
        const { signal } = abort;

        const update = () => {
            if (!ref.current) return;
            setPaused(ref.current.paused);
            setLoading(ref.current.readyState < HTMLMediaElement.HAVE_CURRENT_DATA);
        };

        ref.current.addEventListener("pause", update, { signal });
        ref.current.addEventListener("playing", update, { signal });
        ref.current.addEventListener("loadstart", update, { signal });
        ref.current.addEventListener("waiting", update, { signal });

        update();

        return () => void abort.abort();
    }, [ref]);

    return (
        <ActionIcon
            variant={variant}
            color="gray"
            loading={currentSong ? loading : false}
            disabled={!currentSong}
            onClick={() => {
                if (paused) ref.current?.play();
                else ref.current?.pause();
            }}
        >
            {paused ? <IconPlayerPlay /> : <IconPlayerPause />}
        </ActionIcon>
    )
};

export const MusicPlaylist = () => {
    return (
        <Stack gap={4}>
            {MUSIC_DATA.map((song, i) => (
                <MusicPlaylistItem song={song} key={i} />
            ))}
        </Stack>
    )
}

export const MusicPlaylistItem = ({
    song,
}: {
    song: Song;
}) => {
    const { changeCurrentSong, currentSong } = useMusicPlayer();

    const isCurrent = currentSong === song;

    return (
        <UnstyledButton
            onClick={() => changeCurrentSong(song)}
            style={{ zIndex: 5 }}
        >
            <Paper
                p={4}
                withBorder
                className="grow shrinkonclick"
            >
                <Group gap={4} wrap="nowrap">
                    <Box
                        w="4px"
                        h="2rem"
                        bg="violet"
                        style={{
                            borderRadius: "2px",
                            opacity: +isCurrent,
                            transitionDuration: "250ms",
                        }}
                    />
                    <Box
                        w="2rem"
                        h="2rem"
                    >
                        <Image
                            src={`/assets/music/${song.cover}`}
                            w="100%"
                            h="100%"
                            style={{ imageRendering: "auto" }}
                        />
                    </Box>
                    <Stack gap={0}>
                        <Group gap={4}>
                            <Text inline>{song.title}</Text>
                            <Badge size="xs" color="gray">WIP</Badge>
                        </Group>
                        <Text c="dimmed" fz="sm" inline>{song.artist}</Text>
                    </Stack>
                </Group>
            </Paper>
        </UnstyledButton>
    );
};
