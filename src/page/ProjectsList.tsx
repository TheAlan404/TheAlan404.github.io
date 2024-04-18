import { Stack, Title, Text, Space, TextInput, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ProjectRender } from "../components/ProjectRender";
import { Projects } from "../data";
import { EasterEgg } from "../components/EasterEgg";

export const ProjectsList = () => {
    let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    let [search, setSearch] = useState("");

    let filteredProjects = (!!search ? (
        Projects.filter(p => [
            p.name,
            p.desc,
            p.repo,
        ].filter(x => x).join(" ").toLowerCase().includes(search.toLowerCase()))
    ) : Projects);

    return (
        <Stack gap={0} align="center" w="100%">
            <Space h="xl" />
            <Title order={3}>My Projects</Title>

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
                    <Text>
                        No results found :(
                    </Text>
                )}
            </Stack>
            <Space h="20vh" />
        </Stack>
    );
};
