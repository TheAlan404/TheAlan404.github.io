import { CollapsingButton } from "@/src/components/misc/CollapsingButton";
import { Divider, Group, Stack, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Section } from "@/src/components/misc/Section";
import { useParams } from "react-router-dom";
import { BlogPost, DataBlogPosts } from "@/src/data/DataBlogPosts";

export const BlogPage = () => {
    const { id } = useParams();

    const post = DataBlogPosts.find(x => x.id == id);

    if(!post) return (
        <Text c="yellow">
            404
        </Text>
    );

    const { component: Component } = post;

    return (
        <Stack>
            <Group wrap="nowrap" justify="space-between">
                <Title order={4} visibleFrom="xs">{post.title}</Title>
                <Text>{post.date}</Text>
            </Group>

            <Divider
            />

            <TypographyStylesProvider>
                    <Component />
            </TypographyStylesProvider>
        </Stack>
    )
};
