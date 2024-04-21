import { Stack, Title, Text, Space, TextInput, em, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ProjectRender } from "../components/ProjectRender";
import { Projects } from "../data";

export const ProjectsList = () => {
    let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    let [search, setSearch] = useState("");

    let filteredProjects = (!!search ? (
        Projects.filter(p => [
            p.name,
            p.desc,
        ].filter(x => x).join(" ").toLowerCase().includes(search.toLowerCase()))
    ) : Projects);

    return (
        <Stack gap={0} align="center" w="100%">
            <Space h="xl" />
            <Group>
                <Title order={3}>My Projects</Title>
                <Text c="dimmed" span>
                    ({Projects.length})
                </Text>
            </Group>

            <Stack w={isMobile ? "100%" : "80%"} py="md">
                <TextInput
                    m="md"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)} />
                {filteredProjects.map((p, i) => (
                    <ProjectRender
                        p={p}
                        key={i} />
                ))}
                {!filteredProjects.length && (
                    <Text w="100%">
                        No results found :(
                    </Text>
                )}
            </Stack>
            <Space h="20vh" />
        </Stack>
    );
};
