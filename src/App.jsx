import { AppShell, Group, Burger, Box, Center, Container, Paper, Transition, Stack, Title, Text, Divider, Button, Space, em, Tooltip, ActionIcon, Kbd } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView, useWindowEvent } from '@mantine/hooks';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandMinecraft } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconSquareArrowRight } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

const Projects = [
    {
        name: "mcman",
        status: "done",
        desc: <Text>
            Powerful Minecraft Server Manager API
        </Text>,
        website: "https://paradigmmc.github.io/mcman/",
        websiteButton: "View Documentation",
        repo: "ParadigmMC/mcman",
        color: "purple",
        languages: ["Rust"],
    },
    {
        name: "LighttubeReact",
        status: "alpha",
        desc: <Text>
            <a href='https://github.com/kuylar/lighttube'>Lighttube</a> but its frontend is made in React.
            Thanks <a href="https://github.com/kuylar/">kuylar</a> for her work on Lighttube!
        </Text>,
        repo: "TheAlan404/lighttube-react",
        color: "gray",
        languages: ["React"],
    },
    {
        name: "tdk-wiki",
        status: "wip",
        desc: <Text>
            <a href="https://tdk.gov.tr/kategori/icerik/yazim-kurallari/">TDK</a>'s Turkish Language Rules but as a mkdocs website
        </Text>,
        repo: "TheAlan404/tdk-wiki",
        website: "https://thealan404.github.io/tdk-wiki/",
        languages: ["React"],
    },
    {
        name: "alphamath",
        status: "wip",
        desc: <Text>
            An experimental interactive math engine/solver
        </Text>,
        repo: "TheAlan404/alphamath",
        languages: ["React"],
    },
    {
        name: "ZilTek",
        status: "wip",
        desc: <Text>
            A school bell app with multilanguage support. Used in my school but planned to be expanded.
        </Text>,
        languages: ["React"],
    },
];

const ProjectRender = ({ isActive, p }) => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
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
        if (isActive) scrollIntoView({ alignment: 'center' })
    }, [isActive]);

    let websiteAnchorRef = useRef();
    let repoAnchorRef = useRef();

    const openFirst = () => {
        if (isActive) {
            if (p.website) {
                websiteAnchorRef.current.click();
            } else if (p.repo) {
                repoAnchorRef.current.click();
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
        }]
    ]);

    return (
        <Tooltip
            position='right'
            label={
                <Stack color='white'>
                    <Text><Kbd>→</Kbd>/<Kbd>D</Kbd>: Open project</Text>
                    {p.website && <Text><Kbd>E</Kbd>: Open Website</Text>}
                    {p.repo && <Text><Kbd>R</Kbd>: Open Repository</Text>}
                </Stack>
            }
            opened={isActive}
            color='dark'
            withArrow>
            <Box style={{
                ...(isActive ? {
                    border: "0.2em solid var(--mantine-color-violet-outline)",
                    borderRadius: "1em",
                    inset: 0,
                } : {}),
            }}>
                <Paper
                    m="md"
                    p="md"
                    withBorder
                    bg={hovered ? "dark" : ""}
                    ref={mergedRef}
                    w={isMobile ? "90vw" : "50vw"}>
                    <Stack>
                        <Group>
                            <Title order={3}>{p.name}</Title>
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
                        </Group>
                        {p.desc}
                    </Stack>
                </Paper>
            </Box>
        </Tooltip>
    )
}

const App = () => {
    let [useSelector, setUseSelecor] = useState(false);
    let [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (selectedIndex < 0) {
            setSelectedIndex(0);
        } else if (selectedIndex >= Projects.length) {
            setSelectedIndex(Projects.length-1);
        }
    }, [selectedIndex]);

    useWindowEvent("keydown", (e) => setUseSelecor(true));

    useHotkeys([
        ["ArrowDown", () => setSelectedIndex((i) => i + 1)],
        ["s", () => setSelectedIndex((i) => i + 1)],
        ["ArrowUp", () => setSelectedIndex((i) => i - 1)],
        ["w", () => setSelectedIndex((i) => i - 1)],
    ]);

    return (
        <Stack align="center">
            <Space h="xl" />
            <Title>Hi! I'm dennis</Title>

            <Group>
                {[
                    {
                        link: "https://github.com/TheAlan404",
                        ico: <IconBrandGithub />,
                        color: "dark",
                    },
                    {
                        link: "https://discord.com/users/258638629839175681",
                        ico: <IconBrandDiscord />,
                    },
                    {
                        link: "https://namemc.com/profile/Alan404",
                        color: "green",
                        ico: <IconBrandMinecraft />,
                    },
                ].map((l, i) => (<ActionIcon component="a" variant="subtle" href={l.link} color={l.color}>
                    {l.ico}
                </ActionIcon>))}
            </Group>

            <Text>
                personal website work in progress!

                If you are here for my school's MUN project, <a href="https://thealan404.github.io/oaalmun">click here</a>.
            </Text>

            <Title>My Projects</Title>
            <Text>
                arrow keys to navigate
            </Text>
            <Stack>
                {Projects.map((p, i) => (
                    <ProjectRender p={p} isActive={(useSelector && selectedIndex == i)} key={i} />
                ))}
            </Stack>
            <Space h="30vh" />
        </Stack>
    )
}

export default App
