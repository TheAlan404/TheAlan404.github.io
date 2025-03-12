import { DataProjects } from "@/index";
import { Route } from "./+types/ProjectPage";
import { ActionIcon, Group, Stack, Text, Title } from "@mantine/core";
import { StatusRender } from "~/components/project/StatusRender";
import { ProjectTypePart } from "~/components/project/ProjectTypePart";
import { TechPart } from "~/components/project/TechPart";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { MdxComponents } from "~/components/ui/MdxComponents";

export async function clientLoader({ params }: Route.LoaderArgs) {
    return DataProjects[params.id];
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
    const navigate = useNavigate();

    if (!loaderData) return (
        <Text c="yellow" ta="center">
            404
        </Text>
    );

    const project = loaderData.data;

    return (
        <Stack>
            <Group wrap="nowrap">
                <ActionIcon
                    variant="light"
                    color="gray"
                    onClick={() => navigate(-1)}
                >
                    <IconArrowLeft />
                </ActionIcon>
                <Stack gap={0} flex={1}>
                    <Group justify="space-between">
                        <Group>
                            <Group gap={4}>
                                <Title order={4}>{project.name}</Title>
                            </Group>

                            <StatusRender status={project.status || "ok"} />

                            <Group gap={0}>
                                {project.types.map(type => (
                                    <ProjectTypePart type={type} key={type} />
                                ))}
                            </Group>
                        </Group>
                        <Group gap="0.1em">
                            {project.tech?.map((l, i) => (
                                <TechPart tech={l} key={i} />
                            ))}
                        </Group>
                    </Group>

                    <Text c="dimmed">
                        {project.shortDesc}
                    </Text>
                </Stack>
            </Group>

            <Stack>
                {loaderData.default && (
                    <loaderData.default
                        components={MdxComponents}
                    />
                )}
            </Stack>
        </Stack>
    );
}
