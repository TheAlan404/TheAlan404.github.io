import { Project, ProjectButton } from "@/src/types";
import { Stack, Text } from "@mantine/core";

const NbtTS: Project = {
    id: "nbt-ts",
    name: "nbt",
    shortDesc: "TypeScript library for serializing and deserializing NBT",
    types: ["library"],
    tech: ["ts"],
    year: "2024",
    buttons: [
        ProjectButton.npm("@alan404/nbt"),
        ProjectButton.repo("TheAlan404/nbt-ts"),
    ],
    Render() {
        return (
            <Stack>
                
            </Stack>
        )
    },
};

const ReactWorkspace: Project = {
    id: "react-workspace",
    name: "react-workspace",
    shortDesc: "Infinitely pannable, accessible map-like workspace for React",
    types: ["library"],
    tech: ["ts", "react"],
    year: "2024",
    buttons: [
        ProjectButton.npm("@alan404/react-workspace"),
        ProjectButton.repo("TheAlan404/react-workspace"),
    ],
    Render() {
        return (
            <Text>
                Other projects such as alphamath and polycules use this library. Still WIP
            </Text>
        )
    },
};

const MinecraftAssets: Project = {
    id: "minecraft-assets",
    name: "minecraft-assets",
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
    id: "discord-jsx",
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
    ReactWorkspace,
    NbtTS,
    MinecraftAssets,
    discordjsx,
];
