import { Box, Image, ImageProps, LoadingOverlay } from "@mantine/core";
import { useState } from "react";

export const ImageWithLoader = (imageProps: ImageProps) => {
    let [isLoaded, setLoaded] = useState(false);

    return (
        <Box pos="relative">
            <LoadingOverlay visible={!isLoaded} pos="absolute" overlayProps={{ backgroundOpacity: 0 }} />
            <Image
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                {...imageProps}
            />
        </Box>
    );
};
