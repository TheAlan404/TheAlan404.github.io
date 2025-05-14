import { Anchor, Box, Divider, Group, Image, Stack, Text, UnstyledButton } from "@mantine/core";
import { StuffIUse } from "./sections/StuffIUse";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
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
import { Socials } from "./sections/Socials";

export const PamphletContent = () => {
    return (
        <Stack align="center">
            <Socials />
            <Motd />
            <AboutMe />
            <ArtPiece />
            <FeaturedProjects />
            <StuffIUse />
            <MoreMe />
            <DeltaruneRelease />
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
            <ButtonsSection />

            {/* <Experiments /> */}

            <Divider
                w="80%"
                px="sm"
            />

            <Text c="dimmed" fz="xs">
                Hak, Hukuk, Adalet!
            </Text>

            <Group gap={4} pb="sm">
                <Image
                    src="/assets/img/me/dennis_nokia.png"
                    style={{ imageRendering: "pixelated" }}
                    w="24px"
                    h="24px"
                    radius="md"
                />
                <Image
                    src="/assets/img/me/bulut_nokia.png"
                    style={{ imageRendering: "pixelated" }}
                    w="24px"
                    h="24px"
                    radius="md"
                />
            </Group>
        </Stack>
    );
};
