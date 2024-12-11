import { Group, Text } from "@mantine/core";
import { IconHeart, IconSparkles } from "@tabler/icons-react";
import { Link } from "../src/components/misc/Link";

export type Art = {
    src: string;
    author: {
        name: string;
        link: string;
    };
    subtitle?: React.ReactNode;
    heart?: React.ReactNode;
};

const KiwiAsli = {
    name: "@kiwi_asli",
    link: "https://www.instagram.com/kiwi_asli/",
};

export const Arts: Art[] = [
    {
        src: "/assets/img/me/dennis_ka.png",
        author: KiwiAsli,
        heart: <IconHeart color="var(--mantine-color-red-filled)" />,
    },
    {
        src: "/assets/img/me/dennis_annatony.png",
        author: {
            name: "@planebroker12",
            link: "https://www.instagram.com/planebroker12/",
        },
    },
    {
        src: "/assets/img/me/dennis_meka.png",
        author: {
            name: "@mekashi_moon",
            link: "https://www.instagram.com/mekashi_moon/",
        },
        heart: <IconSparkles color="var(--mantine-color-yellow-filled)" />,
    },
    {
        src: "/assets/img/me/dennis_sophia_ka.png",
        author: KiwiAsli,
        subtitle: (
            <Group gap={0}>
                me and <Link text="Sophia" url="https://avigail.me" color="pink" />
            </Group>
        ),
    },
    {
        src: "/assets/img/me/warren_polycule.png",
        author: {
            name: "@warreneatsrats",
            link: "https://www.instagram.com/warreneatsrats/",
        },
        subtitle: (
            <Text>ada, dafrina, me, ispik</Text>
        ),
    },
    {
        src: "/assets/img/me/dennis_yk.png",
        author: {
            name: "@yesilkedu",
            link: "https://www.instagram.com/yesilkedu/",
        },
    },
];
