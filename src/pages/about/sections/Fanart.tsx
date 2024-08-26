import { IconBrush, IconHeart, IconSparkles } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Carousel, Embla } from "@mantine/carousel"
import { Anchor, Group, Image, Paper, Stack, Text } from "@mantine/core"
import { Link } from "@/src/components/misc/Link"
import { useEffect, useState } from "react"
import { Section } from "@/src/components/misc/Section"

const arts: [string, JSX.Element][] = [
    ["/img/me/dennis_ka.png", (
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
    ["/img/me/dennis_annatony.png", (
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
    ["/img/me/dennis_meka.png", (
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
    ["/img/me/dennis_sophia_ka.png", (
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
    ["/img/me/warren_polycule.png", (
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
    ["/img/me/dennis_yk.png", (
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
    const [embla, setEmbla] = useState<Embla | null>(null);

    useEffect(() => {
        if(!embla) return;
        embla.reInit();
    }, [embla]);

    return (
        <AboutSection
            value="fanart"
            title="Fanart"
            icon={<IconBrush />}
        >
            <Section>
                <Text ta="center">Here's some fanarts/commissions of my character</Text>

                <Carousel
                    height="70vh"
                    withIndicators
                    align="center"
                    slideGap="md"
                    includeGapInSize={false}
                    loop
                    getEmblaApi={(e) => {
                        if(!e.slidesInView().length) e.reInit();
                    }}
                >
                    {arts.map(([src, author], i) => (
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
                                    src={src}
                                    fit="contain"
                                    h="50vh"
                                />
                                {author}
                            </Stack>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </Section>
        </AboutSection>
    )
}
