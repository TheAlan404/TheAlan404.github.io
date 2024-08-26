import { Paper, Stack, TypographyStylesProvider } from "@mantine/core";
import { BlogPost } from "./types";

export const BlogRender = ({
    component: Component,
}: BlogPost) => {
    return (
        <Paper p="sm" bg="rgba(255, 255, 255, 0.05)">
            <Stack ta="start" align="start">
                <TypographyStylesProvider>
                    <Component />
                </TypographyStylesProvider>
            </Stack>
        </Paper>
    )
};
