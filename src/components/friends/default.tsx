import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";

import "./styles.css"

export const StockFriendRenderer = ({
    url,
    image,
    tooltip,
    children,
}: {
    tooltip: string,
    url: string,
    image: string,
} & React.PropsWithChildren) => {
    return (
        <Tooltip label={tooltip}>
            <Box
                w="100%"
                h="100%"
                component="a"
                style={{ textDecoration: "none" }}
                href={url}
                target="_blank"
                pos="relative"
            >
                <BackgroundImage
                    w="100%"
                    h="100%"
                    src={image}
                    className="hoverbgimg"
                >
                    <Stack h="100%" align="center" justify="center">
                        {children}
                    </Stack>
                </BackgroundImage>
            </Box>
        </Tooltip>
    )
};
