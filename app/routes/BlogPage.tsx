import { DataBlogPosts } from "@/index";
import { Route } from "./+types/BlogPage";
import { Stack, Group, Title, Text, Divider, TypographyStylesProvider } from "@mantine/core";

export async function clientLoader({ params }: Route.LoaderArgs) {
    return DataBlogPosts[params.id];
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
    if(!loaderData) return (
        <Text c="yellow" ta="center">
            404
        </Text>
    );

    return (
        <Stack>
            <Group wrap="nowrap" justify="space-between">
                <Title order={4} visibleFrom="xs">{loaderData.title}</Title>
                <Text>{loaderData.date}</Text>
            </Group>

            <Divider
            />

            <loaderData.default />
        </Stack>
    );
}
