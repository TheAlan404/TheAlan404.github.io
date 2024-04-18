import { Group, Box, Paper, Stack, Title, Text, em, Tooltip, ActionIcon, Kbd, Image, SimpleGrid } from '@mantine/core';
import { useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView } from '@mantine/hooks';
import { IconBook2 } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconSquareArrowRight } from '@tabler/icons-react';
import React, { useEffect, useRef } from 'react';
import { StatusRender } from "./StatusRender";
import { Project } from "../data";
import { ImageWithLoader } from "./ImageWithLoader";

export const ProjectRender = ({ p }: { p: Project }) => {
    let { ref, hovered } = useHover();
    let mergedRef = ref;

    return (
        <Paper
            p="md"
            m="md"
            withBorder
            shadow="xl"
            bg={hovered ? "dark" : ""}
            ref={mergedRef}
            ta="left">
            <Stack>
                <SimpleGrid cols={{ base: 1, lg: 2 }}>
                    <Stack>
                        <Group>
                            <Title order={3}>{p.name}</Title>
                            <Group>
                                <StatusRender status={p.status} />
                                {p.website && (
                                    <Tooltip label={`Open ${p.name}`}>
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
                        </Stack>
                    </Stack>
                    <Box style={{ alignSelf: "end" }}>
                        {p.img && <ImageWithLoader
                            src={p.img}
                            radius="md"
                        />}
                    </Box>
                </SimpleGrid>
            </Stack>
        </Paper>
    );
};
