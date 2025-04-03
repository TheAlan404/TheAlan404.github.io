import { Anchor, Button, Divider, Group, ScrollArea, SimpleGrid, Stack, Text } from "@mantine/core";
import { StuffIUse } from "./sections/StuffIUse";
import { IconBrush, IconHeart } from "@tabler/icons-react";
import { ButtonsSection } from "~/components/page/pamphlet/sections/Badges";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Specs } from "./sections/Specs";
import { AboutMe } from "./sections/AboutMe";
import { Friends } from "./sections/Friends";
import { modals } from "@mantine/modals";
import { OCArtModal } from "~/components/modals/OCArtModal";

export const PamphletContent = () => {
    return (
        <Stack align="center">
            <StuffIUse />
            <AboutMe />
            <FeaturedProjects />

            <Divider
                w="80%"
                label="More me!"
            />

            <SimpleGrid cols={2} w="100%" px="xl">
                <Button
                    variant="light"
                    onClick={() => modals.open({
                        title: "OC Art",
                        size: "xl",
                        removeScrollProps: { removeScrollBar: false },
                        scrollAreaComponent: ScrollArea.Autosize,
                        children: (
                            <OCArtModal />
                        ),
                    })}
                    leftSection={<IconBrush />}
                >
                    OC Art
                </Button>
            </SimpleGrid>

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

            {/* <Experiments /> */}

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
