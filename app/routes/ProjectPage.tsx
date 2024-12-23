import { DataProjects } from "@/index";
import { Route } from "./+types/ProjectPage";
import { Stack, Text } from "@mantine/core";
import { ProjectHeader } from "~/components/project/ProjectHeader";
import { ProjectContent } from "~/components/project/ProjectContent";

export async function clientLoader({ params }: Route.LoaderArgs) {
    return DataProjects[params.id];
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
    if(!loaderData) return (
        <Text c="yellow" ta="center">
            404
        </Text>
    );

    return (
        <Stack>
            <ProjectHeader p={loaderData} />
            <ProjectContent p={loaderData} />
        </Stack>
    );
}
