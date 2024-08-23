import { Box, Image, MantineStyleProp, Tooltip } from "@mantine/core"

export const Decor = ({
    style,
    img,
    label,
}: {
    style?: MantineStyleProp,
    img: string,
    label?: string,
}) => {
    return (
        <Box style={{
            position: "relative",
            userSelect: "none",
        }}>
            <Tooltip label={label} disabled={!label}>
                <Image
                    draggable={false}
                    style={{ 
                        ...style,
                        position: "absolute"
                    }}
                    src={`/img/cats/${img}`}
                />
            </Tooltip>
        </Box>
    )
}
