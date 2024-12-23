import React from "react";
import { Group, Tooltip, ActionIcon, MantineColor } from '@mantine/core';
import { IconBrandDiscord, IconBrandInstagram, IconBrandNpm } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconPlaylist } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";

export const PersonalIcons = () => {
    return (
        <Group justify="space-between" w="100%">
            {([
                {
                    link: "https://github.com/TheAlan404",
                    ico: <IconBrandGithub />,
                    color: "dark",
                    label: "@TheAlan404",
                },
                {
                    link: "https://discord.com/users/258638629839175681",
                    ico: <IconBrandDiscord />,
                    label: "@dennisunderscore",
                    color: "indigo.7",
                },
                /* {
                    link: "mailto:gokdenizbektas@gmail.com",
                    color: "yellow",
                    ico: <IconMail />,
                    label: "E-Mail",
                }, */
                {
                    link: "https://www.instagram.com/neko_dennis/",
                    color: "orange",
                    ico: <IconBrandInstagram />,
                    label: "@neko_dennis",
                },
                {
                    link: "https://www.youtube.com/@dennisunderscore",
                    color: "red.5",
                    ico: <IconBrandYoutube />,
                    label: "@dennisunderscore",
                },
                {
                    link: "https://www.npmjs.com/~alan404",
                    color: "red.7",
                    ico: <IconBrandNpm />,
                    label: "~alan404"
                },
                /* {
                    link: "https://music.youtube.com/playlist?list=PLXx81TwpiRfJolKp8WJE-Ep_NJzT6_GF2",
                    color: "violet",
                    label: "YT Music Playlist: Diagnosed ADHD",
                    ico: <IconPlaylist />,
                }, */
                /* {
                    link: Pages("tools"),
                    color: "gray",
                    label: "Dennis' Toolbox",
                    ico: <IconTool />,
                    target: "",
                }, */
            ] as {
                ico: React.ReactNode;
                color: MantineColor;
                link: string;
                label: string;
            }[]).map((l, i) => (
                <Tooltip key={i} label={l.label} position="bottom" withArrow>
                    <ActionIcon component="a" target={"_blank"} variant="subtle" href={l.link} color={l.color}>
                        {l.ico}
                    </ActionIcon>
                </Tooltip>
            ))}
        </Group>
    );
};
