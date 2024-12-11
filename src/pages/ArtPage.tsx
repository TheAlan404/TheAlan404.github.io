import { Carousel, Embla } from "@mantine/carousel"
import { Anchor, AspectRatio, Group, Image, Paper, Stack, Text } from "@mantine/core"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Arts } from "../data/Arts"
import { EmblaCarouselType } from "embla-carousel-react"

export const ArtPage = () => {
    const [t] = useTranslation();
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
    const [index, setIndex] = useState(0);

    const height = 320;

    const slides = Arts.map((art, i) => (
        <Carousel.Slide key={i} h={height}>
            <Image
                src={art.src}
                fit="contain"
                h={height}
            />
        </Carousel.Slide>
    ));

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const idx = embla.selectedScrollSnap();
        setIndex(idx);
    }, [embla, setIndex]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla]);

    const art = Arts[index];

    return (
        <Stack h="100%">
            <Text ta="center">
                {t("art.p")}
            </Text>

            <Carousel
                withIndicators
                height={height}
                slideGap={0}
                align="center"
                getEmblaApi={(embla) => setEmbla(embla)}
            >
                {slides}
            </Carousel>

            {art && (
                <Stack gap={0} ta="center" align="center">
                    <Text>
                        {art.subtitle}
                    </Text>
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
            )}
        </Stack>
    )
}
