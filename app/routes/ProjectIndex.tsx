import { DataProjects } from "@/index";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import { ProjectCard } from "~/components/project/ProjectCard";

export default function ProjectIndex() {
    return (
        <Stack>
            <Stack align="center">
                <Title order={2}>
                    Projects
                </Title>
            </Stack>
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
                {Object.values(DataProjects)
                    .sort((a, b) => Number(b.data.year) - Number(a.data.year))
                    .filter(x => !x.data.hide)
                    .map((p => (
                        <ProjectCard
                            value={p.data}
                            key={p.data.id}
                        />
                    )))}
            </SimpleGrid>
        </Stack>
    )
};
