import { Stack, Title, Text, Space, TextInput, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { randomEgg } from "../eggs";
import { useState } from 'react';
import { ProjectRender } from "../components/ProjectRender";
import { Projects } from "../App";


export const ProjectsList = () => {
    let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    let [search, setSearch] = useState("");
    let [easterEggText, setEasterEggText] = useState(randomEgg());

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

            <Stack w={isMobile ? "90%" : "50%"} py="md">
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
            </Stack>
            <Space h="20vh" />
            <Text onClick={() => setEasterEggText(randomEgg())}>{easterEggText}</Text>
            <Space h="20vh" />
        </Stack>
    );
};
