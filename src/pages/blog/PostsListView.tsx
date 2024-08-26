import { Paper, Stack, Text, Title } from "@mantine/core"
import { BlogPosts } from "./posts"
import { Section } from "@/src/components/misc/Section";

export const PostsListView = ({
    onSelect,
}: {
    onSelect: (id: string) => void;
}) => {
    return (
        <Stack>
            {BlogPosts.map(({ title, desc, id }) => (
                <Section
                    key={id}
                    onClick={() => onSelect(id)}
                    withBorder
                    className="hoverable"
                    style={{ cursor: "pointer" }}
                    p="md"
                >
                    <Stack align="start" ta="start">
                        <Title order={3}>{title}</Title>
                        <Text>{desc}</Text>
                    </Stack>
                </Section>
            ))}
        </Stack>
    )
}