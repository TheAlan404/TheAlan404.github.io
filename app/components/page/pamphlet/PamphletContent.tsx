import { Anchor, Divider, Group, Stack, Text } from "@mantine/core";
import { StuffIUse } from "./sections/StuffIUse";
import { IconHeart } from "@tabler/icons-react";
import { ButtonsSection } from "~/components/page/pamphlet/sections/Badges";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Specs } from "./sections/Specs";
import { AboutMe } from "./sections/AboutMe";
import { Friends } from "./sections/Friends";

export const PamphletContent = () => {
    return (
        <Stack align="center">
            <StuffIUse />
            <AboutMe />
            <FeaturedProjects />
            <ButtonsSection />
            <Specs />
            <Friends />

            <Divider
                w="80%"
            />

            <Text>
                New layout 'inspired' from <Anchor href="https://split.pet" target="_blank">split.pet</Anchor>
            </Text>

            <Text c="dimmed">
                Hak, Hukuk, Adalet!
            </Text>

            <Group justify="space-between" w="100%" px="sm">
                <Text ta="center" c="yellow" fw="bold">
                    WORK IN PROGRESS
                </Text>

                <Group gap={4} c="blue">
                    <Text fw="bold">Y</Text>
                    <IconHeart />
                </Group>
            </Group>
        </Stack>
    );
};
