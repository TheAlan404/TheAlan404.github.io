import { Group, Box, Paper, Stack, Title, Text, Tooltip, SimpleGrid, Button } from '@mantine/core';
import { IconBook2, IconBrandNextjs, IconBrandNodejs, IconBrandVite, IconExternalLink } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react';
import { StatusRender } from "./StatusRender";
import { ProjectButton } from "../../types";
import { Tech } from "../../types";
import { Project } from "../../types";
import { ImageWithLoader } from "../../components/misc/ImageWithLoader";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandCss3 } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";
import { Decor } from "../../components/misc/Decor";
import { Section } from "@/src/components/misc/Section";

const ButtonRender = ({ btn, project }: {
    btn: ProjectButton,
    project: Project,
}) => (
    // @ts-ignore
    ButtonRenderers[btn.type](btn, project)
);

const ButtonRenderers: {
    [K in ProjectButton["type"]]: (btn: Extract<ProjectButton, { type: K }>, project: Project) => React.ReactNode
} = {
    website: ({ url, text }, project) => (
        <Button
            variant="light"
            component="a"
            color="gray"
            href={url}
            target="_blank"
            leftSection={<IconExternalLink />}
        >
            {text || `Open ${project.name}`}
        </Button>
    ),
    repo: ({ repo }) => (
        <Button
            variant="light"
            component="a"
            color="gray"
            target="_blank"
            href={`https://github.com/${repo}`}
            leftSection={<IconBrandGithub />}
        >
            View Repository
        </Button>
    ),
    docs: ({ url }) => (
        <Button
            variant="light"
            component="a"
            color="gray"
            href={url}
            target="_blank"
            leftSection={<IconBook2 />}
        >
            View Documentation
        </Button>
    ),
};

const TechRender = ({ tech }: { tech: Tech }) => (
    TechRenderers[tech]
);

const TechRenderers: Record<Tech, React.ReactNode> = {
    react: (
        <Tooltip label="React" withArrow>
            <IconBrandReact />
        </Tooltip>
    ),
    ts: (
        <Tooltip label="Typescript" withArrow>
            <IconBrandTypescript />
        </Tooltip>
    ),
    js: (
        <Tooltip label="JavaScript" withArrow>
            <IconBrandJavascript />
        </Tooltip>
    ),
    cs: (
        <Tooltip label="C#" withArrow>
            <IconBrandCSharp />
        </Tooltip>
    ),
    html: (
        <Tooltip label="HTML" withArrow>
            <IconBrandHtml5 />
        </Tooltip>
    ),
    css: (
        <Tooltip label="CSS" withArrow>
            <IconBrandCss3 />
        </Tooltip>
    ),
    rust: (
        <Tooltip label="Rust" withArrow>
            <IconBrandRust />
        </Tooltip>
    ),
    nextjs: (
        <Tooltip label="Next.js" withArrow>
            <IconBrandNextjs />
        </Tooltip>
    ),
    vite: (
        <Tooltip label="Vite" withArrow>
            <IconBrandVite />
        </Tooltip>
    ),
    nodejs: (
        <Tooltip label="NodeJS" withArrow>
            <IconBrandNodejs />
        </Tooltip>
    ),
};

export const ProjectRender = ({ p }: { p: Project }) => {
    return (
        <Section
            p="md"
            my="xl"
            withBorder
            shadow="xl"
            ta="left">
            {p.name == "NekoTube" && (
                <Decor
                    img="jumping.gif"
                    style={{
                        position: "absolute",
                        top: "-73px",
                        right: "0px",
                        width: "4em",
                    }}
                />
            )}
            <Stack>
                <Group justify="space-between">
                    <Group>
                        <Title order={4}>{p.name}</Title>
                        <StatusRender status={p.status} />
                    </Group>
                    <Group>
                        {p.tech?.map((l, i) => (
                            <TechRender tech={l} key={i} />
                        ))}
                    </Group>
                </Group>
                <SimpleGrid cols={{ base: 1, lg: (p.img ? 2 : 1) }}>
                    <Stack>
                        <Stack>
                            {p.desc && <Text fz="sm">
                                {p.desc}
                            </Text>}
                            {p.content}
                        </Stack>
                    </Stack>
                    <Box style={{ alignSelf: "end" }}>
                        {p.img && <ImageWithLoader
                            src={p.img}
                            radius="md"
                        />}
                    </Box>
                </SimpleGrid>
                <Group grow visibleFrom="sm">
                    {p.buttons.map((btn, i) => (
                        <ButtonRender btn={btn} project={p} key={i} />
                    ))}
                </Group>
                <Stack hiddenFrom="sm">
                    {p.buttons.map((btn, i) => (
                        <ButtonRender btn={btn} project={p} key={i} />
                    ))}
                </Stack>
            </Stack>
        </Section>
    );
};
