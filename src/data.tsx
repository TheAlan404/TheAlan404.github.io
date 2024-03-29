import { Text } from "@mantine/core";
import React from "react";

export const Domain = "deniz.blue";
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;
export const Pages = (s: string) => `https://${Domain}/${s}/`;

export interface Project {
    name: string,
    status: "done" | "wip" | "forgor",
    desc?: string,
    website?: string,
    docs?: string,
    repo?: string,
    languages?: string[],
    color?: string,
    img?: string,
    content?: JSX.Element,
}

export const Projects: Project[] = [
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
        img: "/oaalmun.png",
        languages: ["React"],
    },
    {
        name: "Çarpanga",
        status: "done",
        website: Subdomain("carpanga"),
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
        img: "/wantyougone.png",
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
        img: "/denvis.png",
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
