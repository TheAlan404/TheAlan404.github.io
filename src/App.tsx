import { AppShell, Group, Burger, Box, Center, Container, Paper, Transition, Stack, Title, Text, Divider, Button, Space, em, Tooltip, ActionIcon, Kbd, Badge, Code } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHotkeys, useHover, useMediaQuery, useMergedRef, useScrollIntoView, useWindowEvent } from '@mantine/hooks';
import { IconBook2 } from '@tabler/icons-react';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandMinecraft } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import Eggs from "./eggs";
import { IconSquareArrowRight } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

const Domain = "https://thealan404.github.io";

const Projects = [
    {
        name: "This Website",
        status: "done",
        desc: <Text>
            Can't have a personal projects website that doesn't mention itself as a project!
        </Text>,
        website: Domain,
        repo: "TheAlan404/thealan404.github.io",
        languages: ["React"],
    },
    {
        name: "mcman",
        status: "done",
        desc: <Text>
            A powerful Minecraft Server Management CLI.
        </Text>,
        docs: "https://paradigmmc.github.io/mcman/",
        repo: "ParadigmMC/mcman",
        color: "purple",
        languages: ["Rust"],
    },
    {
        name: "ZilTek",
        status: "wip",
        desc: <Text>
            A school bell app with multilanguage support. Used in my school - currently rewriting it so its better and can be used anywhere.
        </Text>,
        languages: ["React"],
    },
    {
        name: "tools",
        status: "done",
        desc: <Text>
            Some useful, convenient tools ive made
        </Text>,
        website: Domain + "/tools/",
        repo: "TheAlan404/tools",
        languages: ["React"],
    },
    {
        name: "Çarpanga",
        status: "done",
        website: Domain + "/carpanga",
        repo: "TheAlan404/carpanga",
        desc: <Text>
            A game about multiplying - in turkish only for now
        </Text>,
        languages: ["React"],
    },
    {
        name: "LighttubeReact",
        status: "forgor",
        desc: <Text>
            <a href='https://github.com/kuylar/lighttube'>Lighttube</a> but its frontend is made in React.
            Thanks <a href="https://kuylar.dev/">kuylar</a> for her work on Lighttube!
        </Text>,
        repo: "TheAlan404/lighttube-react",
        color: "gray",
        languages: ["React"],
    },
    {
        name: "DenVis",
        status: "forgor",
        repo: "TheAlan404/DenVis",
        docs: "https://denvis.glitch.me/",
        desc: <Text>
            A simple Windows Audio Visualizer with some extra features such as snow.
        </Text>,
        languages: ["C#"],
    },
    {
        name: "tdk-wiki",
        status: "wip",
        desc: <Text>
            <a href="https://tdk.gov.tr/kategori/icerik/yazim-kurallari/">TDK</a>'s Turkish Language Rules but as a mkdocs website
        </Text>,
        repo: "TheAlan404/tdk-wiki",
        website: Domain + "/tdk-wiki/",
        languages: ["React"],
    },
    {
        name: "FFMPEG Editor",
        status: "wip",
        desc: <Text>
            A command editor for <a href="https://ffmpeg.org/">FFMPEG</a>
        </Text>,
        repo: "TheAlan404/ffmpeg-editor",
        website: Domain + "/ffmpeg-editor/",
        languages: ["React"],
    },
    {
        name: "alphamath",
        status: "wip",
        desc: <Text>
            An experimental interactive math engine/solver
        </Text>,
        website: Domain + "/alphamath",
        repo: "TheAlan404/alphamath",
        languages: ["React"],
    },
    {
        name: "[Portal 2] Want You Gone",
        status: "forgor",
        desc: <Text>
            Portal 2 ending credits song animation recreated using (very bad) HTML
        </Text>,
        website: Domain + "/want-you-gone/",
        repo: "TheAlan404/want-you-gone",
        color: "yellow",
        languages: ["html", "js"],
    },
];

const StatusRender = ({ status }) => {
    return {
        wip: <Badge variant="light" color="yellow">Work In Progress</Badge>,
        forgor: <Badge variant="light" color="gray">forgor</Badge>
    }[status] || <></>;
}

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
            label={
                <Stack style={{ color: "var(--mantine-color-text)" }}>
                    {(p.website || p.repo || p.docs) ? <Text><Kbd>→</Kbd>/<Kbd>D</Kbd>: Open project</Text> : <Text>No shortcuts</Text>}
                    {p.website && <Text><Kbd>E</Kbd>: Open Website</Text>}
                    {p.repo && <Text><Kbd>R</Kbd>: Open Repository</Text>}
                    {p.docs && <Text><Kbd>F</Kbd>: View Documentation</Text>}
                </Stack>
            }
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
                    m="md"
                    p="md"
                    withBorder
                    bg={hovered ? "dark" : ""}
                    ref={mergedRef}
                    w={isMobile ? "90vw" : "50vw"}>
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
                        {p.desc}
                    </Stack>
                </Paper>
            </Box>
        </Tooltip>
    )
}

const randomEgg = () => {
    let list = Eggs;
    return list[Math.floor(Math.random() * list.length)];
};

const App = () => {
    let [useSelector, setUseSelecor] = useState(false);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [usedEggs, setUsedEggs] = useState("");
    let [easterEggText, setEasterEggText] = useState(randomEgg());

    useEffect(() => {
        if (selectedIndex < 0) {
            setSelectedIndex(0);
        } else if (selectedIndex >= Projects.length) {
            setSelectedIndex(Projects.length - 1);
        }
    }, [selectedIndex]);

    useWindowEvent("keydown", (e) => {
        if ([
            "ArrowDown",
            "ArrowUp",
            "w", "s", "a", "d",
            "ArrowRight"].includes(e.key)
        ) setUseSelecor(true);

        if ([
            "ArrowDown",
            "s",
            "Space",
        ].includes(e.key)) setEasterEggText(randomEgg());
    });

    useHotkeys([
        ["ArrowDown", () => setSelectedIndex((i) => i + 1)],
        ["s", () => setSelectedIndex((i) => i + 1)],
        ["ArrowUp", () => setSelectedIndex((i) => i - 1)],
        ["w", () => setSelectedIndex((i) => i - 1)],
        ["Escape", () => setUseSelecor(false)],
    ]);

    return (
        <Stack align='center' style={{ textAlign: "center" }} px="sm" className="app">

            <NewYearEvent />

            <Space h="xl" />
            <Title>dennis</Title>

            <Group>
                {[
                    {
                        link: "https://github.com/TheAlan404",
                        ico: <IconBrandGithub />,
                        color: "dark",
                        label: "GitHub Profile",
                    },
                    {
                        link: "https://discord.com/users/258638629839175681",
                        ico: <IconBrandDiscord />,
                        label: "Discord Profile",
                    },
                    {
                        link: "https://namemc.com/profile/Alan404",
                        color: "green",
                        ico: <IconBrandMinecraft />,
                        label: "NameMC",
                    },
                ].map((l, i) => (<Tooltip key={i} label={l.label}>
                    <ActionIcon component="a" variant="subtle" href={l.link} color={l.color}>
                        {l.ico}
                    </ActionIcon>
                </Tooltip>))}
            </Group>

            <Text>
                snoooooooow! (code was stolen from DenVis)
            </Text>

            <Title order={3}>My Projects</Title>
            <Text>
                <Kbd>W</Kbd>/<Kbd>S</Kbd>/<Kbd>↑</Kbd>/<Kbd>↓</Kbd>: Navigate
            </Text>
            <Stack>
                {Projects.map((p, i) => (
                    <ProjectRender p={p} isActive={(useSelector && selectedIndex == i)} key={i} />
                ))}
            </Stack>
            <Space h="20vh" />
            <Text>{easterEggText}</Text>
            <Space h="20vh" />
        </Stack>
    )
}

const STARTDATE = new Date(2024, 0, 1, 0, 0, 0, 0);
const PLAY_OFFSET_SECONDS = 3*60+43;
const PLAY_ON = STARTDATE;

const NewYearEvent = () => {
    let [isNewYear, setIsNewYear] = useState(false);
    let [hour, setHour] = useState("");
    let [min, setMin] = useState("");
    let [sec, setSec] = useState("");
    let ref = useRef(new Audio("Opus.mp4"));

    useEffect(() => {
        let int = setInterval(() => {
            let past = new Date().getFullYear() == 2024;
            setIsNewYear(past);

            if(past) {
                setHour(new Date().getHours());
                setMin(new Date().getMinutes());
                setSec(new Date().getSeconds());
            } else {
                setHour(23 - new Date().getHours());
                setMin(59 - new Date().getMinutes());
                setSec(59 - new Date().getSeconds());

                if((PLAY_ON.getTime()-(PLAY_OFFSET_SECONDS*1000)-1000) < new Date().getTime()) {
                    // should already be playing
                    if (ref.current.paused)
                        ref.current.play();
                    
                    let approxTime = (new Date().getTime() - PLAY_ON.getTime() + (PLAY_OFFSET_SECONDS * 1000)) / 1000;
                    if(Math.floor(Math.abs(ref.current.currentTime - approxTime)) >= 2) {
                        ref.current.currentTime = approxTime;
                    } 
                }
            }
        }, 500);

        return () => {
            ref.current.pause();
            clearInterval(int);
        };
    }, []);

    return (
        <Center h="100vh">
            <Stack m="xl" p="xl" ta="center" align="center">
                <Title order={2}>{isNewYear ? "Welcome to 2024!" : "Time until 2024:"}</Title>
                <Group>
                    <Code fz="xl">{[
                        hour,
                        min,
                        sec,
                    ].map(x => (x+"").padStart(2, "0")).join(":")}</Code>
                </Group>
                {!ref.current.paused || isNewYear ? (
                    <Stack>
                        {isNewYear && <Text>happy new year everyone. thanks for watching this little show i made in an hour :3 ily all</Text>}
                        {!ref.current.paused && <Text>Now Playing: "Opus" by Eric Prydz</Text>}
                        {!ref.current.paused && <Text>(Beat drop synced to new year)</Text>}
                    </Stack>
                ) : (
                    <Text>Time until suprise: {(() => {
                        let d = new Date((PLAY_ON.getTime()-(PLAY_OFFSET_SECONDS*1000)-1000));

                        let formatter = new Intl.RelativeTimeFormat();
                        let f = automaticRelativeDifference(d);
                        return formatter.format(f.duration, f.unit);
                    })()}</Text>
                )}
                <Space h="xl" />
                <Text>Scroll down for my personal website lol</Text>
            </Stack>
        </Center>
    )
}

function automaticRelativeDifference(d) {
	const diff = -((new Date().getTime() - d.getTime())/1000)|0;
	const absDiff = Math.abs(diff);
	if (absDiff > 86400*30*10) {
		return { duration: Math.round(diff/(86400*365)), unit: 'years' };
	}
	if (absDiff > 86400*25) {
		return { duration: Math.round(diff/(86400*30)), unit: 'months' };
	}
	if (absDiff > 3600*21) {
		return { duration: Math.round(diff/86400), unit: 'days' };
	}
	if (absDiff > 60*44) {
		return { duration: Math.round(diff/3600), unit: 'hours' };
	}
	if (absDiff > 30) {
		return { duration: Math.round(diff/60), unit: 'minutes' };
	}
	return { duration: diff, unit: 'seconds' };
}

export default App
