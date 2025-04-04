import { ActionIcon, Affix, Box, Stack, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconMusic } from "@tabler/icons-react";
import { useUIState } from "~/components/base/UIContext";
import { MusicPickerOverlay } from "~/components/features/music/MusicPicker";
import { Pamphlet } from "~/components/page/pamphlet/Pamphlet";

export default function Layout() {
    return (
        <Box>
            <Box className="pamphlet_container">
                <Pamphlet />
            </Box>

            <MusicPickerOverlay />

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
                        <Stack>
                            <ActionIcon
                                style={styles}
                                variant="light"
                                onClick={() => toggle("musicPopout")}
                            >
                                <IconMusic />
                            </ActionIcon>
                        </Stack>
                        <Box id="mobile-spacer" data-active={scroll.y < 5} />
                    </Stack>
                )}
            </Transition>
        </Affix>
    );
};


