import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";

const URL = "https://skyrina.dev";

export const FriendSkyrina = () => {
    return (
        <Tooltip label={
            <Stack align="center">
                <img src="/assets/img/other/skylar-yamero.gif" alt="skylar doing the internet yamero dance, drawn by kurbii" style={{ height: '160px', imageRendering: 'pixelated' }} />
                <Text>skyrina.dev</Text>
            </Stack>
        }>
            <Box
                w="100%"
                h="100%"
                component="a"
                style={{ textDecoration: "none" }}
                href={URL}
                target="_blank"
                pos="relative"
            >
                <BackgroundImage
                    w="100%"
                    h="100%"
                    src="/assets/img/other/skylar.png"
                    className="hoverbgimg"
                >
                    <Stack h="100%" align="center" justify="center">
                        <Text span c="var(--mantine-color-blue-light-color)">
                            skyrina
                        </Text>
                    </Stack>
                </BackgroundImage>
            </Box>
        </Tooltip>
    )
}
