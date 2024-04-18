import { Box, Image, ImageProps, LoadingOverlay } from "@mantine/core";
import { useState } from "react";

export const ImageWithLoader = (imageProps: ImageProps) => {
    let [isLoaded, setLoaded] = useState(false);

    return (
        <Box>
            <LoadingOverlay visible={!isLoaded} overlayProps={{ backgroundOpacity: 0 }} />
            <Image
                onLoad={() => setLoaded(true)}
                {...imageProps}
            />
        </Box>
    );
};
