import { Accordion, Stack } from "@mantine/core";
import { Hero } from "./Hero";
import { DeveloperBackground } from "./sections/DeveloperBackground";
import { Fanart } from "./sections/Fanart";
import { Other } from "./sections/Other";

export const About = () => {
    return (
        <Stack w="100%" align="center">
            <Hero />
            <Accordion defaultValue={["dev", "other"]} multiple w="100%">
                <DeveloperBackground />
                <Fanart />
                <Other />
            </Accordion>
        </Stack>
    );
};
