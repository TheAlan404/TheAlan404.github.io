import { Anchor, Button, ButtonProps, Group } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

export const Link = ({
    url,
    text,
    icon,
    size,
}: {
    url: string,
    text: string,
    icon?: React.ReactNode,
    size?: ButtonProps["size"],
}) => {
    return (
        <Button
            variant="subtle"
            size={size || "compact-md"}
            leftSection={icon}
            rightSection={<IconExternalLink size="1.2em" />}
            component="a"
            href={url}
            target="_blank"
        >
            {text}
        </Button>
    )
}
