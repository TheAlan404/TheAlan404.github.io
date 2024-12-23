import { Project } from "~/types";
import { Badge, Group, Stack, Text, Title } from "@mantine/core";
import { StatusRender } from "./StatusRender";
import { ProjectTypePart } from "./ProjectTypePart";
import { TechPart } from "./TechPart";

export const ProjectHeader = ({
    p,
}: {
    p: Project;
}) => {
    return (
        <Stack gap={0}>
            <Group justify="space-between">
                <Group>
                    <Group gap={4}>
                        <Title order={4}>{p.name}</Title>
                    </Group>

                    {p.new && (
                        <Badge
                            variant="light"
                            color="green"
                        >
                            NEW
                        </Badge>
                    )}

                    <StatusRender status={p.status || "ok"} />

                    <Group gap={0}>
                        {p.types.map(type => (
                            <ProjectTypePart type={type} key={type} />
                        ))}
                    </Group>
                </Group>
                <Group gap="0.1em">
                    {p.tech?.map((l, i) => (
                        <TechPart tech={l} key={i} />
                    ))}
                </Group>
            </Group>

            <Text c="dimmed">
                {p.shortDesc}
            </Text>
        </Stack>
    )
};

export const ProjectHeaderCompact = ({
    p,
}: {
    p: Project;
}) => {
    return (
        <Stack gap={0}>
            <Group gap={4} align="end">
                <Text>{p.name}</Text>

                <Group gap={0}>
                    {p.types.map(type => (
                        <ProjectTypePart type={type} key={type} />
                    ))}
                </Group>
            </Group>

            <Text c="dimmed" fz="xs">
                {p.shortDesc}
            </Text>
        </Stack>
    )
};
