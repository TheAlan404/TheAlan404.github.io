import { Space, Stack } from "@mantine/core";
import { DeveloperBackground } from "~/components/page/DeveloperBackground";
import { Hero } from "~/components/page/Hero";

export default function Home() {
    return (
        <Stack w="100%" align="center">
            <Space />
            <Hero />
            <DeveloperBackground />
            <Space h="xl" />
        </Stack>
    )
};
