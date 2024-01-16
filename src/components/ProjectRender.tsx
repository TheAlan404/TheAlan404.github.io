import { Group, Box, Paper, Stack, Title, Text, em, Tooltip, ActionIcon, Kbd, Image } from '@mantine/core';
import { useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView } from '@mantine/hooks';
import { IconBook2 } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconSquareArrowRight } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { StatusRender } from "./StatusRender";

export const ProjectRender = ({ isActive, p }) => {
    let { ref, hovered } = useHover();
    const { scrollIntoView, targetRef } = useScrollIntoView({
        offset: 60,
        isList: true,
        cancelable: true,
        easing: (n) => n,
        duration: 500,
    });
    let mergedRef = useMergedRef(ref, targetRef);

    useEffect(() => {
        if (isActive) scrollIntoView({ alignment: 'center' });
    }, [isActive]);

    let websiteAnchorRef = useRef();
    let repoAnchorRef = useRef();
    let docsAnchorRef = useRef();

    const openFirst = () => {
        if (isActive) {
            if (p.website) {
                websiteAnchorRef.current.click();
            } else if (p.repo) {
                repoAnchorRef.current.click();
            } else if (p.docs) {
                docsAnchorRef.current.click();
            }
        }
    };

    useHotkeys([
        ["ArrowRight", openFirst],
        ["d", openFirst],
        ["e", () => {
            if (isActive && p.website) {
                websiteAnchorRef.current.click();
            }
        }],
        ["r", () => {
            if (isActive && p.repo) {
                repoAnchorRef.current.click();
            }
        }],
        ["f", () => {
            if (isActive && p.docs) {
                docsAnchorRef.current.click();
            }
        }],
    ]);

    return (
        <Tooltip
            position='right'
            label={<Stack style={{ color: "var(--mantine-color-text)" }}>
                {(p.website || p.repo || p.docs) ? <Text><Kbd>→</Kbd>/<Kbd>D</Kbd>: Open project</Text> : <Text>No shortcuts</Text>}
                {p.website && <Text><Kbd>E</Kbd>: Open Website</Text>}
                {p.repo && <Text><Kbd>R</Kbd>: Open Repository</Text>}
                {p.docs && <Text><Kbd>F</Kbd>: View Documentation</Text>}
            </Stack>}
            opened={isActive}
            color='dark'
            transitionProps={{ transition: 'slide-right', duration: 300 }}
            withArrow>
            <Box style={{
                ...(isActive ? {
                    border: "0.2em solid var(--mantine-color-violet-outline)",
                    borderRadius: "1em",
                    inset: 0,
                } : {}),

                textAlign: "left",
            }}>
                <Paper
                    p="md"
                    m="md"
                    withBorder
                    bg={hovered ? "dark" : ""}
                    ref={mergedRef}>
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
                                            href={p.website}
                                            ref={websiteAnchorRef}>
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
                                            href={`https://github.com/${p.repo}`}
                                            ref={repoAnchorRef}>
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
                                            href={p.docs}
                                            ref={docsAnchorRef}>
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
            </Box>
        </Tooltip>
    );
};
