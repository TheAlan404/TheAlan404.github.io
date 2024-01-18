import { AppShell, Group, Burger, Center, Container, Transition, Stack, Title, Text, Divider, Button, Space, Tooltip, ActionIcon, Kbd, Code, Image, TextInput, em, Accordion, Anchor, SimpleGrid, Box, ScrollArea } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHotkeys, useMediaQuery, useWindowEvent } from '@mantine/hooks';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandMinecraft } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import Eggs from "./eggs";
import { useEffect, useMemo, useState } from 'react';
import image_oaalmun from "./assets/oaalmun.png"
import image_wantyougone from "./assets/wantyougone.png"
import image_denvis from "./assets/denvis.png"
import { ProjectRender } from "./components/ProjectRender";
import { IconPlaylist } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
import { NewYearEvent } from "./events/NewYear";

const Domain = "deniz.blue";
const Subdomain = (s: string) => `https://${s}.${Domain}/`;
const Pages = (s: string) => `https://${Domain}/${s}/`;

export interface Project {
    name: string,
    status: "done" | "wip" | "forgor",
    desc: string,
    website: string,
    repo: string,
    languages: string[],
    color: string,
    img: string,
    content: JSX.Element,
}

const Projects: Partial<Project>[] = [
    {
        name: "mcman",
        status: "done",
        desc: "A powerful Minecraft Server Management CLI.",
        img: "https://github.com/ParadigmMC/mcman/raw/main/docs/mcman-3.png",
        docs: "https://paradigmmc.github.io/mcman/",
        repo: "ParadigmMC/mcman",
        color: "purple",
        languages: ["Rust"],
    },
    {
        name: "ZilTek",
        status: "done",
        website: Subdomain("ziltek"),
        desc: "The school bell app with multilanguage support.",
        languages: ["React"],
        img: "/ziltekscreenshot.png",
    },
    {
        name: "OAALMUN",
        status: "done",
        website: "https://mun.oaal.com.tr",
        desc: "MUN (Model United Nations) website for my school",
        img: image_oaalmun,
        languages: ["React"],
    },
    {
        name: "Çarpanga",
        status: "done",
        website: Pages("carpanga"),
        repo: "TheAlan404/carpanga",
        desc: "A game about multiplying - in turkish only for now",
        languages: ["React"],
    },
    {
        name: "ModFest 1.20",
        status: "done",
        desc: "I'm a ModFest Coordinator! This isnt really a personal project but I wanted to put it up here anyways.",
        img: "https://modfest.net/assets/event/1.20/cover.png",
        website: "https://modfest.net/1.20",
    },
    {
        name: "Want You Gone",
        status: "forgor",
        desc: "Portal 2 ending credits song animation recreated using (very bad) HTML",
        img: image_wantyougone,
        website: Pages("want-you-gone"),
        repo: "TheAlan404/want-you-gone",
        color: "yellow",
        languages: ["html", "js"],
    },
    {
        name: "tools",
        status: "done",
        desc: "Some useful, convenient tools ive made",
        website: Pages("tools"),
        repo: "TheAlan404/tools",
        languages: ["React"],
    },
    {
        name: "DenVis",
        status: "forgor",
        repo: "TheAlan404/DenVis",
        docs: "https://denvis.glitch.me/",
        desc: "A simple Windows Audio Visualizer with some extra features such as snow.",
        img: image_denvis,
        languages: ["C#"],
    },
    {
        name: "LighttubeReact",
        status: "forgor",
        content: <Text>
            <a href='https://github.com/kuylar/lighttube'>Lighttube</a> but its frontend is made in React.
            Thanks <a href="https://kuylar.dev/">kuylar</a> for her work on Lighttube!
        </Text>,
        repo: "TheAlan404/lighttube-react",
        color: "gray",
        languages: ["React"],
    },
    {
        name: "tdk-wiki",
        status: "wip",
        content: <Text>
            <a href="https://tdk.gov.tr/kategori/icerik/yazim-kurallari/">TDK</a>'s Turkish Language Rules but as a mkdocs website
        </Text>,
        repo: "TheAlan404/tdk-wiki",
        website: Pages("tdk-wiki"),
        languages: ["React"],
    },
    {
        name: "FFMPEG Editor",
        status: "wip",
        content: <Text>
            A command editor for <a href="https://ffmpeg.org/">FFMPEG</a>
        </Text>,
        repo: "TheAlan404/ffmpeg-editor",
        website: Pages("ffmpeg-editor"),
        languages: ["React"],
    },
    {
        name: "alphamath",
        status: "wip",
        desc: "An experimental interactive math engine/solver",
        website: Pages("alphamath"),
        repo: "TheAlan404/alphamath",
        languages: ["React"],
    },
];

const randomEgg = () => {
    let list = Eggs;
    return list[Math.floor(Math.random() * list.length)];
};

const PersonalIcons = () => {
    return (
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
                {
                    link: "https://www.youtube.com/@dennisunderscore",
                    color: "red",
                    ico: <IconBrandYoutube />,
                    label: "Youtube Channel",
                },
                {
                    link: "https://music.youtube.com/playlist?list=PLXx81TwpiRfJolKp8WJE-Ep_NJzT6_GF2",
                    color: "violet",
                    label: "YT Music Playlist: Diagnosed ADHD",
                    ico: <IconPlaylist />,
                },
                {
                    link: Pages("tools"),
                    color: "gray",
                    label: "Dennis' Toolbox",
                    ico: <IconTool />,
                    target: "",
                },
            ].map((l, i) => (<Tooltip key={i} label={l.label}>
                <ActionIcon component="a" target={l.target ?? "_blank"} variant="subtle" href={l.link} color={l.color}>
                    {l.ico}
                </ActionIcon>
            </Tooltip>))}
        </Group>
    )
}

const App = () => {
    let [newYearEvent, { toggle }] = useDisclosure();

    

    useHotkeys([
        ["n", () => toggle()],
    ])

    let playOn = useMemo(() => new Date(new Date().getTime() + 5 * 60 * 1000), [newYearEvent]);

    return (
        <Stack
            align='center'
            style={{ textAlign: "center" }}
            px="sm"
            className="app">

            {newYearEvent && (
                <NewYearEvent
                    playOn={playOn}
                />
            )}
            
            <Hero />
            <ProjectsList />

            {/* <SimpleGrid cols={{
                base: 1,
                md: 2,
            }}>
                <Hero />
                <Box h="100%" visibleFrom="md">
                    <ScrollArea h="100vh">
                        <ProjectsList />
                    </ScrollArea>
                </Box>
                <Box hiddenFrom="md">
                    <ProjectsList />
                </Box>
            </SimpleGrid> */}

            

            
        </Stack>
    )
}

export const ProjectsList = () => {
    let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    let [search, setSearch] = useState("");
    let [easterEggText, setEasterEggText] = useState(randomEgg());

    let filteredProjects = (!!search ? (
        Projects.filter(p => [
            p.name,
            p.desc,
            p.repo,
        ].filter(x => x).join(" ").toLowerCase().includes(search.toLowerCase()))
    ) : Projects);

    return (
        <Stack gap={0} align="center" w="100%">
            <Space h="xl" />
            <Title order={3}>My Projects</Title>

            <Stack w={isMobile ? "90%" : "50%"} py="md">
                <TextInput
                    m="md"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                {filteredProjects.map((p, i) => (
                    <ProjectRender
                        p={p}
                        key={i}
                    />
                ))}
            </Stack>
            <Space h="20vh" />
            <Text onClick={() => setEasterEggText(randomEgg())}>{easterEggText}</Text>
            <Space h="20vh" />
        </Stack>
    )
}

export const Hero = () => {
    return (
        <Stack gap={0} align="center">
            <Space h="xl" />
            <Title>
                dennis
            </Title>

            <PersonalIcons />

            <Stack>
                <Code>
                    {"{love && hate && <Relationship with=\"webDev\" />}"}
                </Code>
                <Accordion>
                    <Accordion.Item value="a">
                        <Accordion.Control>
                            about me
                        </Accordion.Control>
                        <Accordion.Panel>
                            <Text>
                                hi :3 i'm dennis - a full stack developer
                                <br />
                                i've been coding for about 4 years now
                                <br />
                                sorry idk what to put here
                                <br />
                                yeah
                            </Text>
                            
                            <Stack p="md" gap={2}>
                                {[
                                    ["Timezone", "GMT+3"],
                                    ["Pronouns", "she/her"],
                                    ["Education", "Highschool"],
                                    ["Languages", "JS, Rust, C#"],
                                    ["Fave UI lib", "Mantine", {
                                        Comp: Anchor,
                                        href: "https://mantine.dev/",
                                        target: "_blank",
                                    }],
                                    ["Trans", "rights"],
                                    ["meower", "true", { Comp: Code, }],
                                    ["lover of", "may"],
                                ].map(([k, v, { Comp = Text, ...vp } = {}], i) => (
                                    <Group justify="space-between" key={i}>
                                        <Text fw="bold">{k}</Text>
                                        <Comp {...vp}>{v}</Comp>
                                    </Group>
                                ))}
                            </Stack>

                            <Text fz={"sm"}>
                                ps. deniz means sea in turkish
                            </Text>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Stack>
        </Stack>
    )
}

export default App
