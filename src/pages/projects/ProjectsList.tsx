import { Stack, Title, Text, Space, TextInput, em, Group, Divider, Accordion } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ProjectComponent } from "./ProjectComponent";
import { DataProjects } from "../../../data/projects";
import { Decor } from "../../components/misc/Decor";
import { Project } from "@/src/types";
import { Section } from "@/src/components/misc/Section";
import { IconAlertTriangle } from "@tabler/icons-react";

export const ProjectsList = () => {
    const filteredProjects = DataProjects;

    const categories = (Object.entries(
        filteredProjects.reduce((acc, cur) => {
            if (!acc[cur.year]) acc[cur.year] = [];
            acc[cur.year].push(cur);
            return acc;
        }, {})
    ) as [string, Project[]][])
        .toSorted(([a], [b]) => Number(b) - Number(a));

    return (
        <Stack>
            <Section ta="center" py="xl">
                filters
            </Section>

            <Accordion chevron={false}>
                <Stack>
                    {categories.map(([year, list]) => (
                        <Stack key={year}>
                            <Divider
                                label={(
                                    <Title order={4}>
                                        {year}
                                    </Title>
                                )}
                            />

                            <Stack w="100%" align="center">
                                <Stack w={{
                                    base: "100%",
                                    xs: "80%",
                                }}>
                                    {list.map((p) => (
                                        <ProjectComponent
                                            p={p}
                                            key={p.name}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Accordion>
        </Stack>
    );
};
