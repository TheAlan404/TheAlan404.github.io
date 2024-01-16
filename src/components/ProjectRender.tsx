import { Group, Box, Paper, Stack, Title, Text, em, Tooltip, ActionIcon, Kbd, Image } from '@mantine/core';
import { useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView } from '@mantine/hooks';
import { IconBook2 } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconSquareArrowRight } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { StatusRender } from "./StatusRender";

export const ProjectRender = ({ p }) => {
    let { ref, hovered } = useHover();
    let mergedRef = ref;

    return (
        <Paper
            p="md"
            m="md"
            withBorder
            bg={hovered ? "dark" : ""}
            ref={mergedRef}
            ta="left">
            <Stack>
                <Group>
                    <Title order={3}>{p.name}</Title>
                    <Group>
                        <StatusRender status={p.status} />
                        {p.website && (
                            <Tooltip label={p.websiteButton || `Open ${p.name}`}>
                                <ActionIcon
                                    variant="light"
                                    component="a"
                                    color="gray"
                                    href={p.website}>
                                    <IconSquareArrowRight />
                                </ActionIcon>
                            </Tooltip>
                        )}
                        {p.repo && (
                            <Tooltip label={`Go to Repository`}>
                                <ActionIcon
                                    variant="light"
                                    component="a"
                                    color="gray"
                                    href={`https://github.com/${p.repo}`}>
                                    <IconBrandGithub />
                                </ActionIcon>
                            </Tooltip>
                        )}
                        {p.docs && (
                            <Tooltip label={`View Documentation`}>
                                <ActionIcon
                                    variant="light"
                                    component="a"
                                    color="gray"
                                    href={p.docs}>
                                    <IconBook2 />
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </Group>
                </Group>
                <Stack>
                    {p.desc && <Text>
                        {p.desc}
                    </Text>}
                    {p.content}
                    {p.img && <Image
                        src={p.img}
                        radius="md"
                    />}
                </Stack>
            </Stack>
        </Paper>
    );
};
