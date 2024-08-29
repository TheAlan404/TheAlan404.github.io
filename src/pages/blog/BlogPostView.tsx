import { CollapsingButton } from "@/src/components/misc/CollapsingButton";
import { Group, Stack, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { BlogPost } from "./types";
import { Section } from "@/src/components/misc/Section";

export const BlogPostView = ({
    post,
    onBack,
}: {
    post: BlogPost;
    onBack: () => void;
}) => {
    return (
        <Stack>
            <Section p="sm" ta="start">
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
                        <Text>{post.date}</Text>
                    </Group>
                </Group>
            </Section>

            <BlogRender {...post} />
        </Stack>
    )
};

export const BlogRender = ({
    component: Component,
}: BlogPost) => {
    return (
        <Section>
            <Stack ta="start" align="start">
                <TypographyStylesProvider>
                    <Component />
                </TypographyStylesProvider>
            </Stack>
        </Section>
    )
};
