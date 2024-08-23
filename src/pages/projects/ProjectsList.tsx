import { Stack, Title, Text, Space, TextInput, em, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ProjectRender } from "./ProjectRender";
import { Projects } from "./data";
import { Decor } from "../../components/misc/Decor";

export const ProjectsList = () => {
    return (
        <Stack py="md" w="100%">
            {Projects.map((p, i) => (
                <ProjectRender
                    p={p}
                    key={i} />
            ))}
        </Stack>
    );
};
