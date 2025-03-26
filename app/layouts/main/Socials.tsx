import { ActionIcon, Box, Group } from "@mantine/core";
import { IconBrandDiscord, IconBrandGithub, IconBrandSteam, IconBrandTelegram, IconBrandX, IconMail, TablerIcon } from "@tabler/icons-react";

type Social = {
    icon: TablerIcon;
    url: string;
};

export const Socials = () => {
    const socials: Social[] = [
        {
            icon: IconBrandGithub,
            url: "https://github.com/TheAlan404",
        },
        {
            icon: IconBrandX,
            url: "https://x.com/gokcedenizblue",
        },
        {
            icon: IconBrandDiscord,
            url: "https://discord.com/users/258638629839175681",
        },
        {
            icon: IconBrandSteam,
            url: "https://steamcommunity.com/id/denizblue",
        },
        {
            icon: IconBrandTelegram,
            url: "https://t.me/TheDennis",
        },
        {
            icon: IconMail,
            url: "mailto:gokce@deniz.blue",
        },
    ];

    return (
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
    );
};
