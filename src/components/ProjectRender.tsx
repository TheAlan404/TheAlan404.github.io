import { Group, Box, Paper, Stack, Title, Text, em, Tooltip, ActionIcon, Kbd, Image, SimpleGrid, Button } from '@mantine/core';
import { useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView } from '@mantine/hooks';
import { IconBook2, IconExternalLink } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconSquareArrowRight } from '@tabler/icons-react';
import React, { useEffect, useRef } from 'react';
import { StatusRender } from "./StatusRender";
import { Project, ProjectButton, Tech } from "../data";
import { ImageWithLoader } from "./ImageWithLoader";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandCss3 } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";

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
};

export const ProjectRender = ({ p }: { p: Project }) => {
    return (
        <Paper
            p="md"
            m="md"
            withBorder
            shadow="xl"
            className="hoverable"
            ta="left">
            <Stack>
                <Group justify="space-between">
                    <Group>
                        <Title order={3}>{p.name}</Title>
                        <StatusRender status={p.status} />
                    </Group>
                    <Group>
                        {p.tech?.map((l, i) => (
                            TechRenderers[l]
                        ))}
                    </Group>
                </Group>
                <SimpleGrid cols={{ base: 1, lg: (p.img ? 2 : 1) }}>
                    <Stack>
                        <Stack>
                            {p.desc && <Text>
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
                        // @ts-ignore
                        ButtonRenderers[btn.type](btn, p)
                    ))}
                </Group>
                <Stack hiddenFrom="sm">
                    {p.buttons.map((btn, i) => (
                        // @ts-ignore
                        ButtonRenderers[btn.type](btn, p)
                    ))}
                </Stack>
            </Stack>
        </Paper>
    );
};
