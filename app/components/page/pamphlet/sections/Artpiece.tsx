import { Box, Image, Stack, Text } from "@mantine/core";
import { IconTriangle } from "@tabler/icons-react";
import { ThetaDeltaSvg } from "../ThetaDeltaSvg";

export const ArtPiece = () => {
    return (
        <Stack align="center">
            <Stack pos="relative" w="10rem" h="2rem" style={{ pointerEvents: "none", userSelect: "none" }}>
                <Box pos="absolute" style={{ top: "-10%", left: "69%" }}>
                    🍂
                </Box>
                <Box pos="absolute" style={{ top: "-30%", left: "57%" }}>
                    🌸
                </Box>
                <Box pos="absolute" style={{ top: "-22%", left: "29%" }}>
                    ✨
                </Box>
                <Box pos="absolute" style={{ top: "50%", left: "62%" }}>
                    🖤
                </Box>
                <Box pos="absolute" style={{ top: "-25%", left: "10%" }}>
                    💜
                </Box>
                <Box pos="absolute" style={{ top: "30%", left: "30%" }}>
                    <Text fw="bold" fz="xl">&</Text>
                </Box>
                <Box pos="absolute" style={{ top: "40%", left: "25%" }}>
                    <Box style={{ transform: "translate(-50%, -50%)" }}>
                        <Text fz="h2">∞</Text>
                    </Box>
                </Box>
                <Box pos="absolute" style={{ top: "50%", left: "50%" }}>
                    <Box style={{ transform: "translate(-50%, -50%)" }}>
                        <ThetaDeltaSvg height="2.5rem" fill="white" />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};
