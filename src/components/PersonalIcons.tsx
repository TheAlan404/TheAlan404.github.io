import React from "react";
import { Group, Tooltip, ActionIcon } from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandMinecraft } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconPlaylist } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
import { Pages } from "../data";

export const PersonalIcons = () => {
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
    );
};
