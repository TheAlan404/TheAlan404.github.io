import { Anchor, Group } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

export const Link = ({
    url,
    text,
}: {
    url: string,
    text: string,
}) => {
    return (
        <Anchor href={url} target="_blank">
            <Group gap="xs" align="center">
                {text}
                <IconExternalLink size="1.2em" />
            </Group>
        </Anchor>
    )
}
