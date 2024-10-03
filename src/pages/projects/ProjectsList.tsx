import { Stack, Title, Text, Space, TextInput, em, Group, Divider, Accordion } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ProjectComponent } from "./ProjectComponent";
import { Projects } from "./data";
import { Decor } from "../../components/misc/Decor";
import { Project } from "@/src/types";
import { Section } from "@/src/components/misc/Section";
import { IconAlertTriangle } from "@tabler/icons-react";

export const ProjectsList = () => {
    const filteredProjects = Projects;

    const categories = (Object.entries(Object.groupBy(filteredProjects, (p) => p.year)) as [string, Project[]][])
        .toSorted(([a], [b]) => Number(b) - Number(a));

    return (
        <Stack>
            <Section ta="center" py="xl">
                <Stack gap={0} c="yellow" align="center">
                    <IconAlertTriangle />

                    <Text fw="bold">
                        PROJECTS LIST OVERHAUL WORK IN PROGRESS
                    </Text>
                </Stack>
            </Section>

            <Accordion chevronPosition="left">
                {categories.map(([year, list]) => (
                    <Stack key={year}>
                        <Divider
                            label={(
                                <Title order={4}>
                                    {year}
                                </Title>
                            )}
                            my="md"
                        />

                        <Stack w="100%" gap="xl">
                            {list.map((p) => (
                                <ProjectComponent
                                    p={p}
                                    key={p.name}
                                />
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </Accordion>
        </Stack>
    );
};
