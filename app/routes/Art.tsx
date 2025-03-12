import { useTranslation } from "react-i18next";
import { Route } from "./+types/Art";
import { Arts } from "@/Arts";
import { ImageWithLoader } from "~/components/ui/ImageWithLoader";
import { Carousel, useAnimationOffsetEffect } from "@mantine/carousel";
import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import { Anchor, Box, Group, Stack, Text } from "@mantine/core";

export default function Art({ }: Route.ComponentProps) {
    const [t] = useTranslation();
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
    const [index, setIndex] = useState(0);

    const height = 320;

    useAnimationOffsetEffect(embla, 200);

    const slides = Arts.map((art, i) => (
        <Carousel.Slide key={i}>
            <Box mb="xl">
                <ImageWithLoader
                    src={art.src}
                    fit="contain"
                    h={height}
                />
            </Box>
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
        <Stack h="100%" justify="center">
            <Carousel
                withIndicators
                height={height+40}
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
