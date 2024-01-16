import { AppShell, Group, Burger, Center, Container, Transition, Stack, Title, Text, Divider, Button, Space, Tooltip, ActionIcon, Kbd, Code, Image, TextInput, em } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHotkeys, useMediaQuery, useWindowEvent } from '@mantine/hooks';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandMinecraft } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import Eggs from "./eggs";
import { useEffect, useState } from 'react';
import image_oaalmun from "./assets/oaalmun.png"
import image_wantyougone from "./assets/wantyougone.png"
import image_denvis from "./assets/denvis.png"
import { ProjectRender } from "./components/ProjectRender";
import { IconPlaylist } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";

const Domain = "https://thealan404.github.io";

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
        website: "https://ziltek.kuylar.dev",
        desc: "The school bell app with multilanguage support.",
        languages: ["React"],
    },
    {
        name: "OAALMUN",
        status: "done",
        website: Domain + "/oaalmun/",
        desc: "MUN (Model United Nations) website for my school",
        img: image_oaalmun,
        languages: ["React"],
    },
    {
        name: "Çarpanga",
        status: "done",
        website: Domain + "/carpanga",
        repo: "TheAlan404/carpanga",
        desc: "A game about multiplying - in turkish only for now",
        languages: ["React"],
    },
    {
        name: "Want You Gone",
        status: "forgor",
        desc: "Portal 2 ending credits song animation recreated using (very bad) HTML",
        img: image_wantyougone,
        website: Domain + "/want-you-gone/",
        repo: "TheAlan404/want-you-gone",
        color: "yellow",
        languages: ["html", "js"],
    },
    {
        name: "tools",
        status: "done",
        desc: "Some useful, convenient tools ive made",
        website: Domain + "/tools/",
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
        website: Domain + "/tdk-wiki/",
        languages: ["React"],
    },
    {
        name: "FFMPEG Editor",
        status: "wip",
        content: <Text>
            A command editor for <a href="https://ffmpeg.org/">FFMPEG</a>
        </Text>,
        repo: "TheAlan404/ffmpeg-editor",
        website: Domain + "/ffmpeg-editor/",
        languages: ["React"],
    },
    {
        name: "alphamath",
        status: "wip",
        desc: "An experimental interactive math engine/solver",
        website: Domain + "/alphamath",
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
                    link: Domain + "/tools/",
                    color: "gray",
                    label: "Dennis' Toolbox",
                    ico: <IconTool />,
                },
            ].map((l, i) => (<Tooltip key={i} label={l.label}>
                <ActionIcon component="a" target="_blank" variant="subtle" href={l.link} color={l.color}>
                    {l.ico}
                </ActionIcon>
            </Tooltip>))}
        </Group>
    )
}

const App = () => {
    let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    let [useSelector, setUseSelecor] = useState(false);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [search, setSearch] = useState("");
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

    let filteredProjects = (!!search ? (
        Projects.filter(p => [
            p.name,
            p.desc,
            p.repo,
        ].filter(x => x).join(" ").toLowerCase().includes(search.toLowerCase()))
    ) : Projects);

    return (
        <Stack
            align='center'
            style={{ textAlign: "center" }}
            px="sm"
            className="app"
            onClick={() => setUseSelecor(false)}>

            <Space h="xl" />
            <Title>dennis</Title>

            <PersonalIcons />

            <Code>
                {"{love && hate && <Relationship with=\"webDev\" />}"}
            </Code>


            <Title order={3}>My Projects</Title>
            <Text>
                <Kbd>W</Kbd>/<Kbd>S</Kbd>/<Kbd>↑</Kbd>/<Kbd>↓</Kbd>: Navigate
            </Text>
            <Stack w={isMobile ? "90vw" : "50vw"} py="md">
                <TextInput
                    m="md"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                {filteredProjects.map((p, i) => (
                    <ProjectRender
                        p={p}
                        isActive={(useSelector && selectedIndex == (i + 1))}
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

export default App
