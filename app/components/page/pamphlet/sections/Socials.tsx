import { Localized } from "@alan404/react-localization";
import { ActionIcon, Box, Divider, Group, Stack } from "@mantine/core";
import { IconBrandDiscord, IconBrandGithub, IconBrandMinecraft, IconBrandReddit, IconBrandSteam, IconBrandTelegram, IconBrandX, IconMail, TablerIcon } from "@tabler/icons-react";
import { ComponentType } from "react";

type Social = {
    icon: ComponentType;
    url: string;
};

export const Socials = () => {
    const socials: Social[] = [
        {
            icon: IconBrandGithub,
            url: "https://github.com/TheAlan404",
        },
        {
            icon: IconBrandDiscord,
            url: "https://discord.com/users/258638629839175681",
        },
        {
            icon: IconBrandTelegram,
            url: "https://t.me/TheDennis",
        },
        {
            icon: IconBrandX,
            url: "https://x.com/gokcedenizblue",
        },
        {
            icon: IconBrandReddit,
            url: "https://reddit.com/u/TheAlan404",
        },
        {
            icon: OsuLogo,
            url: "https://osu.ppy.sh/users/19238315",
        },
        {
            icon: IconBrandSteam,
            url: "https://steamcommunity.com/id/denizblue",
        },
        {
            icon: IconMail,
            url: "mailto:deniz@deniz.blue",
        },
    ];

    return (
        <Stack align="center" w="100%" px="sm">
            <Group gap={4}>
                {socials.map((social, i) => (
                    <ActionIcon
                        key={i}
                        component="a"
                        href={social.url}
                        target="_blank"
                        color="gray"
                        variant="subtle"
                    >
                        <social.icon />
                    </ActionIcon>
                ))}
            </Group>
        </Stack>
    );
};

export const OsuLogo = () => {
    return (
        <img
            src="/assets/img/ico/osuflat.svg"
            width={22}
            height={22}
            style={{ filter: "invert(1)", imageRendering: "auto" }}
        />
    );
};
