import { Anchor, Divider, Group, Image, Stack, Text, UnstyledButton } from "@mantine/core";
import { StuffIUse } from "./sections/StuffIUse";
import { IconHeart } from "@tabler/icons-react";
import { ButtonsSection } from "~/components/page/pamphlet/sections/Badges";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Specs } from "./sections/Specs";
import { AboutMe } from "./sections/AboutMe";
import { Friends } from "./sections/Friends";
import { MoreMe } from "./sections/MoreMe";
import { DeltaruneRelease } from "./sections/DeltaruneRelease";
import { Experiments } from "./sections/Experiments";
import { Motd } from "./sections/Motd";
import { ArtPiece } from "./sections/Artpiece";

export const PamphletContent = () => {
    return (
        <Stack align="center">
            <Motd />
            <StuffIUse />
            <AboutMe />
            <ArtPiece />
            <FeaturedProjects />
            <MoreMe />
            <DeltaruneRelease />
            <ButtonsSection />
            <Specs />
            <Group justify="end" w="100%" pos="relative" px="xl">
                <Image
                    src="/assets/img/trinkets/jumping.gif"
                    h="5rem"
                    w="auto"
                    pos="absolute"
                    style={{ top: "-4rem" }}
                />
            </Group>
            <Friends />

            {/* <Experiments /> */}

            <Divider
                w="80%"
                px="sm"
            />

            <Text c="dimmed">
                Hak, Hukuk, Adalet!
            </Text>

            <Group justify="center" w="80%" wrap="nowrap" py="sm">
                <Group gap={4} c="blue">
                    <Text fw="bold">I love Yağız so much</Text>
                    <IconHeart />
                </Group>
            </Group>
        </Stack>
    );
};
