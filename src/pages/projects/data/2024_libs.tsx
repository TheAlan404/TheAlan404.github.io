import { Project, ProjectButton } from "@/src/types";

const NbtTS: Project = {
    name: "@alan404/nbt",
    shortDesc: "TypeScript library for serializing and deserializing NBT",
    types: ["library"],
    tech: ["ts"],
    year: "2024",
    buttons: [
        ProjectButton.npm("@alan404/nbt"),
        ProjectButton.repo("TheAlan404/nbt-ts"),
    ],
};

const ReactWorkspace: Project = {
    name: "@alan404/react-workspace",
    shortDesc: "Infinitely pannable, accessible map-like workspace for React",
    types: ["library"],
    tech: ["ts", "react"],
    year: "2024",
    buttons: [
        ProjectButton.npm("@alan404/nbt"),
        ProjectButton.repo("TheAlan404/react-workspace"),
    ],
};

const MinecraftAssets: Project = {
    name: "@alan404/minecraft-assets",
    shortDesc: "TypeScript library providing minecraft assets (block states, models and textures)",
    types: ["library"],
    tech: ["ts"],
    year: "2024",
    buttons: [
        ProjectButton.npm("@alan404/minecraft-assets"),
        ProjectButton.repo("TheAlan404/minecraft-assets-ts"),
    ],
};

const discordjsx: Project = {
    name: "discord-jsx",
    year: "2024",
    buttons: [
        ProjectButton.repo("TheAlan404/discord-jsx"),
        ProjectButton.npm("@alan404/discordjsx"),
    ],
    types: ["library"],
    tech: ["ts", "react", "nodejs"],
    shortDesc: "A library that allows you to use React/JSX inside your discord bot projects",
};

export default [
    NbtTS,
    MinecraftAssets,
    discordjsx,
];
