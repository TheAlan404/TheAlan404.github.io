import { Anchor, Button, ButtonProps, Group, Tooltip } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

export const Link = ({
    url,
    text,
    icon,
    size,
    variant,
    color,
    tooltip,
    ...rest
}: {
    url?: string,
    text: string,
    tooltip?: string,
    icon?: React.ReactNode,
} & ButtonProps) => {
    return (
        <Tooltip label={tooltip} disabled={!tooltip}>
            <Button
                variant={variant || "subtle"}
                color={color}
                size={size || "compact-md"}
                leftSection={icon}
                rightSection={url && <IconExternalLink size="1.2em" />}
                component="a"
                href={url}
                target="_blank"
                {...rest}
            >
                {text}
            </Button>
        </Tooltip>
        
    )
}
