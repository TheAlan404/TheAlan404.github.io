import { DataProjects } from "@/src/data/projects";
import { Stack, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectContent } from "./ProjectContent";

export const ProjectPage = () => {
    const { id } = useParams();

    const p = DataProjects.find(x => x.id == id);

    if(!p) return (
        <Text c="yellow" ta="center">
            404
        </Text>
    );

    return (
        <Stack>
            <ProjectHeader p={p} />
            <ProjectContent p={p} />
        </Stack>
    );
};
