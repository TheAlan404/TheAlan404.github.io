import { Group, Stack, Text } from "@mantine/core";
import { Link } from "./components/Link";

// dont want any bots so
export const DISCORD_INVITE = "YUkqcuYJAn";

export const Domain = "deniz.blue";
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;
export const Pages = (s: string) => `https://${Domain}/${s}/`;

export interface Project {
    name: string;
    status: ProjectStatus;
    desc?: string;
    buttons: ProjectButton[];
    tech?: Tech[];
    color?: string,
    img?: string,
    content?: JSX.Element,
}

export type ProjectStatus = "done" | "wip" | "forgor" | "abandoned";

export type Tech = "rust" | "react" | "cs" | "js" | "ts" | "html" | "css";

export type ProjectButton =
    | { type: "website"; url: string; text?: string; }
    | { type: "docs", url: string; }
    | { type: "repo", repo: string; }

export const Projects: Project[] = [
    {
        name: "NekoTube",
        status: "wip",
        img: "/img/proj/nekotube.png",
        content: (
            <Stack ta="left">
                <Text>
                    an alternative YouTube video player
                </Text>

                <Text>
                    supports:
                </Text>

                <Group>
                    <Link text="Invidious" url="https://lighttube.org/" size="compact-sm" />
                    <Link text="Lighttube" url="https://invidious.io/" size="compact-sm" />
                </Group>
            </Stack>
        ),
        buttons: [
            { type: "website", url: Subdomain("tube") },
            { type: "repo", repo: "TheAlan404/nekotube" },
        ],
        color: "gray",
        tech: ["js", "react"],
    },
    {
        name: "ZilTek",
        status: "done",
        buttons: [
            { type: "website", url: Subdomain("ziltek") }
        ],
        desc: "The school bell app with multilanguage support.",
        tech: ["ts", "react"],
        img: "/img/proj/ziltekscreenshot.png",
    },
    {
        name: "mcman",
        status: "done",
        desc: "A powerful Minecraft Server Management CLI which allows you to use git and many other things",
        img: "https://github.com/ParadigmMC/mcman/raw/main/docs/mcman-3.png",
        buttons: [
            { type: "repo", repo: "ParadigmMC/mcman" },
            { type: "docs", url: "https://paradigmmc.github.io/mcman/" },
        ],
        tech: ["rust"],
        color: "purple",
    },
    {
        name: "OAALMUN",
        status: "done",
        buttons: [
            { type: "website", url: "https://mun.oaal.com.tr", text: "View OAALMUN" }
        ],
        desc: "MUN (Model United Nations) website for my school",
        img: "/img/proj/oaalmun.png",
        tech: ["js", "ts", "react"],
    },
    {
        name: "Çarpanga",
        status: "done",
        buttons: [
            { type: "website", url: Subdomain("carpanga"), text: "Play Çarpanga" },
            { type: "repo", repo: "TheAlan404/carpanga" },
        ],
        desc: "A game about multiplying. Get 3 numbers in a row to win, but be careful because your opponent will choose which number you are multiplying with!",
        tech: ["ts", "react"],
        img: "/img/proj/carpanga.png",
    },
    {
        name: "ModFest 1.20: Sky and Sea",
        status: "done",
        desc: "ModFest 1.20 was a Minecraft modding event I helped coordinate.",
        img: "https://modfest.net/assets/event/1.20/cover.png",
        buttons: [
            { type: "website", url: "https://modfest.net/1.20", text: "View Event" },
        ],
    },
    {
        name: "Want You Gone",
        status: "done",
        desc: "Portal 2 ending credits song animation recreated using (very bad) HTML",
        img: "/img/proj/wantyougone.png",
        buttons: [
            { type: "website", url: Pages("want-you-gone") },
            { type: "repo", repo: "TheAlan404/want-you-gone" },
        ],
        color: "yellow",
        tech: ["html", "css", "js"],
    },
    {
        name: "discord-jsx",
        status: "done",
        buttons: [
            { type: "repo", repo: "TheAlan404/discord-jsx" },
            { type: "website", url: "https://www.npmjs.com/package/@alan404/discordjsx", text: "NPM" },
        ],
        tech: ["ts", "react"],
        desc: "A library that allows you to use React/JSX inside your discord bot projects",
    },
    {
        name: "alphamath",
        status: "wip",
        desc: "An experimental interactive math engine/solver",
        buttons: [
            { type: "website", url: Pages("alphamath") },
            { type: "repo", repo: "TheAlan404/alphamath" }
        ],
        tech: ["ts", "react"],
    },
    {
        name: "tools",
        status: "done",
        desc: "Some useful, convenient tools ive made",
        buttons: [
            { type: "website", url: Pages("tools") },
            { type: "repo", repo: "TheAlan404/tools" },
        ],
        tech: ["ts", "react"],
    },
    {
        name: "DenVis",
        status: "forgor",
        buttons: [
            { type: "repo", repo: "TheAlan404/DenVis" },
            { type: "website", url: "https://denvis.glitch.me/", text: "Settings Page" },
        ],
        desc: "A simple Windows Audio Visualizer with some extra features such as snow.",
        img: "/img/proj/denvis.png",
        tech: ["cs"],
    },
    {
        name: "FFMPEG Editor",
        status: "wip",
        content: (
            <Text>
                A command editor for <Link text="FFMPEG" url="https://ffmpeg.org/" size="compact-sm" />
            </Text>
        ),
        buttons: [
            { type: "website", url: Pages("ffmpeg-editor") },
            { type: "repo", repo: "TheAlan404/ffmpeg-editor" }
        ],
        tech: ["js", "react"],
    },
    {
        name: "nbs.js",
        status: "abandoned",
        content: (
            <Stack>
                <Text>
                    <Link text="NBS (note block song)" url="https://opennbs.org/nbs" size="compact-sm" /> parser in Javascript
                </Text>
                <Text>
                    It's a bit abandoned though
                </Text>
            </Stack>
        ),
        buttons: [
            { type: "repo", repo: "TheAlan404/nbs.js" },
            { type: "website", url: "https://www.npmjs.com/package/nbs.js", text: "NPM" },
        ],
        tech: ["js"],
    },
    {
        name: "DSharpPlus.PaginatedSelects",
        status: "abandoned",
        content: (
            <Stack>
                <Text>
                    A <Link text="DSharpPlus" url="https://dsharpplus.github.io/DSharpPlus/" size="compact-sm" /> extension that adds paginated select components.
                </Text>
            </Stack>
        ),
        tech: ["cs"],
        buttons: [
            { type: "repo", repo: "TheAlan404/DSharpPlus.PaginatedSelects" }
        ],
    },
];

export interface Song {
    id: string;
    url: string;
    name: string;
    author: string;
}
