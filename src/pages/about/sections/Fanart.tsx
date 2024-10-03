import { IconBrush, IconHeart, IconSparkles } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Carousel, Embla } from "@mantine/carousel"
import { Anchor, Group, Image, Paper, Stack, Text } from "@mantine/core"
import { Link } from "@/src/components/misc/Link"
import React, { useEffect, useState } from "react"
import { Section } from "@/src/components/misc/Section"
import { useTranslation } from "react-i18next"

type Art = {
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

const arts: Art[] = [
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

const __arts: [string, JSX.Element][] = [
    ["/assets/img/me/dennis_ka.png", (
        <Group gap="sm">
            <Text>drawn by</Text>
            <Anchor
                href="https://www.instagram.com/kiwi_asli/"
                target="_blank"
            >
                @kiwi_asli
            </Anchor>
            <IconHeart color="var(--mantine-color-red-filled)" />
        </Group>
    )],
    ["/assets/img/me/dennis_annatony.png", (
        <Group gap="sm">
            <Text>drawn by</Text>
            <Anchor
                href="https://www.instagram.com/planebroker12/"
                target="_blank"
            >
                @planebroker12
            </Anchor>
            <IconHeart color="var(--mantine-color-red-filled)" />
        </Group>
    )],
    ["/assets/img/me/dennis_meka.png", (
        <Group gap="sm">
            <Text>drawn by my friend</Text>
            <Anchor
                href="https://www.instagram.com/mekashi_moon/"
                target="_blank"
            >
                @mekashi_moon
            </Anchor>
            <IconSparkles color="var(--mantine-color-yellow-filled)" />
        </Group>
    )],
    ["/assets/img/me/dennis_sophia_ka.png", (
        <Stack gap={0} ta="center" align="center">
            <Group gap={0}>
                me and <Link text="Sophia" url="https://avigail.me" color="pink" />
            </Group>
            <Group>
                <Text>drawn by</Text>
                <Anchor
                    href="https://www.instagram.com/kiwi_asli/"
                    target="_blank"
                >
                    @kiwi_asli
                </Anchor>
            </Group>
        </Stack>
    )],
    ["/assets/img/me/warren_polycule.png", (
        <Stack gap={0} ta="center" align="center">
            <Group>
                <Text>
                    ada, dafrina, me, ispik
                </Text>
            </Group>
            <Group gap="sm">
                <Text>drawn by</Text>
                <Anchor
                    href="https://www.instagram.com/warreneatsrats/"
                    target="_blank"
                >
                    @warreneatsrats
                </Anchor>
            </Group>
        </Stack>
    )],
    ["/assets/img/me/dennis_yk.png", (
        <Group gap="sm">
            <Text>drawn by</Text>
            <Anchor
                href="https://www.instagram.com/yesilkedu/"
                target="_blank"
            >
                @yesilkedu
            </Anchor>
        </Group>
    )],
];

export const Fanart = () => {
    const [t] = useTranslation();
    const [embla, setEmbla] = useState<Embla | null>(null);

    useEffect(() => {
        if (!embla) return;
        //embla.reInit();
    }, [embla]);

    return (
        <AboutSection
            value="fanart"
            title={t("art.title")}
            icon={<IconBrush />}
        >
            <Section>
                <Text ta="center">
                    {t("art.p")}
                </Text>

                <Carousel
                    height="70vh"
                    withIndicators
                    align="center"
                    slideGap="md"
                    //includeGapInSize={false}
                    loop
                    getEmblaApi={(e) => {
                        if (!e.slidesInView().length) e.reInit();
                    }}
                >
                    {arts.map((art, i) => (
                        <Carousel.Slide key={i}>
                            <Stack
                                justify="center"
                                align="center"
                                h="100%"
                                w="100%"
                                pb="lg"
                                style={{ userSelect: "none" }}
                            >
                                <Image
                                    src={art.src}
                                    fit="contain"
                                    h="50vh"
                                />

                                <Stack gap={0} ta="center" align="center">
                                    {art.subtitle}
                                    <Group>
                                        <Text>
                                            {t("art.drawnByPrefix")}
                                        </Text>
                                        <Anchor
                                            href={art.author.link}
                                            target="_blank"
                                        >
                                            {art.author.name}
                                        </Anchor>
                                        <Text>
                                            {t("art.drawnBySuffix")}
                                        </Text>
                                        {art.heart}
                                    </Group>
                                </Stack>
                            </Stack>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </Section>
        </AboutSection>
    )
}
