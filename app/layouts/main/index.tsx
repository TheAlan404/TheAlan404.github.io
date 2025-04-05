import { ActionIcon, Affix, Box, Stack, Tooltip, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp, IconLanguage, IconMusic } from "@tabler/icons-react";
import { useUIState } from "~/components/base/UIContext";
import { MusicSeekbarOverlay } from "~/components/features/music/components/MusicDebugSeekbar";
import { MusicPickerOverlay } from "~/components/features/music/components/MusicPicker";
import { useAudioState } from "~/components/features/music/hooks/useAudioState";
import { Pamphlet } from "~/components/page/pamphlet/Pamphlet";

export default function Layout() {
    return (
        <Box>
            <Box className="pamphlet_container">
                <Pamphlet />
            </Box>

            <MusicPickerOverlay />
            <MusicSeekbarOverlay />

            <PageControlsOverlay />
        </Box>
    )
};

export const PageControlsOverlay = () => {
    const { toggle, musicPopout } = useUIState();
    const [scroll, scrollTo] = useWindowScroll();

    const mounted = !musicPopout;

    return (
        <Affix position={{ bottom: 5, right: 5 }}>
            <Transition
                mounted={mounted}
                transition={"fade-up"}
            >
                {(styles) => (
                    <Stack gap={0} style={styles}>
                        <Stack gap={5}>
                            <Transition
                                mounted={scroll.y > 50}
                                transition="fade"
                            >
                                {(styles) => (
                                    <Box style={styles}>
                                        <Tooltip
                                            label="Back to top"
                                            position="left"
                                            withArrow
                                            withinPortal={false}
                                        >
                                            <ActionIcon
                                                onClick={() => scrollTo({ y: 0 })}
                                                variant="light"
                                                size="lg"
                                            >
                                                <IconArrowUp />
                                            </ActionIcon>
                                        </Tooltip>
                                    </Box>
                                )}
                            </Transition>
                            <LanguagePickerButton />
                            <MusicPopoutButton />
                        </Stack>
                        <Box id="mobile-spacer" data-active={scroll.y < 5} />
                    </Stack>
                )}
            </Transition>
        </Affix>
    );
};

export const LanguagePickerButton = () => {
    return (
        <Tooltip
            label="Work in Progress"
            position="left"
            withArrow
            withinPortal={false}
        >
            <ActionIcon
                variant="light"
                size="lg"
            >
                <IconLanguage />
            </ActionIcon>
        </Tooltip>
    );
};

export const MusicPopoutButton = () => {
    const { toggle } = useUIState();

    const paused = useAudioState(
        true,
        (a) => a.paused,
        ["pause", "playing"]
    );

    return (
        <Tooltip
            label={"Music"}
            position="left"
            withArrow
            withinPortal={false}
        >
            <ActionIcon
                variant="light"
                size="lg"
                onClick={() => toggle("musicPopout")}
            >
                <IconMusic />
            </ActionIcon>
        </Tooltip>
    );
};

