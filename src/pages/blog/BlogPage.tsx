import { ActionIcon, Box, Button, Group, Paper, Stack, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { useState } from "react";
import { BlogPost, BlogPosts } from "./posts";
import { IconArrowLeft } from "@tabler/icons-react";
import { CollapsingButton } from "@/src/components/misc/CollapsingButton";

export const BlogPage = () => {
    const [currentPost, setCurrentPost] = useState<string | null>(null);

    let post = BlogPosts.find(x => x.id == currentPost);

    return (
        <Stack>
            {post ? (
                <Stack>
                    <Stack bg="dark" p="sm" ta="start" justify="start">
                        <Title order={4} hiddenFrom="xs">{post.title}</Title>
                        <Group wrap="nowrap" justify="space-between">
                            <Group wrap="nowrap">
                                <CollapsingButton
                                    variant="light"
                                    icon={<IconArrowLeft />}
                                    color="violet"
                                    onClick={() => setCurrentPost(null)}
                                    breakpoint="xs"
                                    reverseBreakpoint
                                >
                                    Back
                                </CollapsingButton>

                                <Title order={4} visibleFrom="xs">{post.title}</Title>
                            </Group>
                            <Group>
                                <Text c="dimmed">{post.date}</Text>
                            </Group>
                        </Group>
                    </Stack>

                    <RenderBlog {...post} />
                </Stack>
            ) : (
                <Stack>
                    {BlogPosts.map(({ title, desc, id }) => (
                        <Paper
                            onClick={() => setCurrentPost(id)}
                            withBorder
                            className="hoverable"
                            style={{ cursor: "pointer" }}
                            p="md"
                        >
                            <Stack align="start" ta="start">
                                <Title order={3}>{title}</Title>
                                <Text>{desc}</Text>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            )}
        </Stack>
    )
};

export const RenderBlog = ({
    component: Component,
}: BlogPost) => {
    return (
        <Paper p="sm" bg="rgba(255, 255, 255, 0.05)">
            <Stack ta="start" align="start">
                <TypographyStylesProvider>
                    <Component />
                </TypographyStylesProvider>
            </Stack>
        </Paper>
    )
};
