import { Group, Paper, Stack } from "@mantine/core";
import { PlayPauseButton } from "./PlayPauseButton";
import { MusicProgressBar } from "./MusicProgressBar";
import { MusicVolume } from "./MusicVolume";

export const MusicControls = () => {
    return (
        <Paper className="frost">
            <Stack gap={0}>
                <Group p={4} justify="space-between" w="100%">
                    <Group gap={4}>
                        <PlayPauseButton />
                    </Group>
                    <Group pr="xs">
                        <MusicVolume />
                    </Group>
                </Group>
                <MusicProgressBar />
            </Stack>
        </Paper>
    )
};
