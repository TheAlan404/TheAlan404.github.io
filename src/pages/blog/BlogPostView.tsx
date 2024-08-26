import { CollapsingButton } from "@/src/components/misc/CollapsingButton";
import { Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { BlogPost } from "./types";
import { BlogRender } from "./BlogRender";

export const BlogPostView = ({
    post,
    onBack,
}: {
    post: BlogPost;
    onBack: () => void;
}) => {
    return (
        <Stack>
            <Stack bg="dark" p="sm" ta="start" justify="start">
                <Title order={4} hiddenFrom="xs">{post.title}</Title>
                <Group wrap="nowrap" justify="space-between">
                    <Group wrap="nowrap">
                        <CollapsingButton
                            variant="light"
                            icon={<IconArrowLeft />}
                            color="violet"
                            onClick={onBack}
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

            <BlogRender {...post} />
        </Stack>
    )
};
