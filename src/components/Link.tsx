import { Anchor, Button, ButtonProps, Group } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

export const Link = ({
    url,
    text,
    icon,
    size,
    variant,
    color,
}: {
    url: string,
    text: string,
    icon?: React.ReactNode,
    size?: ButtonProps["size"],
    variant?: ButtonProps["variant"],
    color?: ButtonProps["color"],
}) => {
    return (
        <Button
            variant={variant || "subtle"}
            color={color}
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
