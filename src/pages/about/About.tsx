import { Accordion, Space, Stack } from "@mantine/core";
import { Hero } from "./Hero";
import { DeveloperBackground } from "./sections/DeveloperBackground";

export const About = () => {
    return (
        <Stack w="100%" align="center">
            <Space />
            <Hero />
            <DeveloperBackground />
            <Space h="xl" />
        </Stack>
    );
};
