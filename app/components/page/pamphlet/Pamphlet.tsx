import { Box, Paper } from "@mantine/core";
import { PamphletHeader } from "./PamphletHeader";
import { PamphletContent } from "./PamphletContent";

export const Pamphlet = () => {
    return (
        <Box className="pamphlet">
            <Box className="header">
                <Paper withBorder style={{ borderBottom: "unset" }} className="contain frost">
                    <PamphletHeader />
                </Paper>
            </Box>
            <Paper withBorder style={{
                borderTop: "unset",
                borderRadius: "0 0 16px 16px",
            }} className="frost" px="sm" pb="sm">
                <PamphletContent />
            </Paper>
            <Box h="40vh" />
        </Box>
    );
};
