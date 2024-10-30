import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar, Paper } from '@mantine/core';
import { DiscordSection } from "@/src/pages/about/DiscordSection";
import { Section } from "@/src/components/misc/Section";
import { OnekoSection } from "./OnekoSection";
import { useTranslation } from "react-i18next";
import { TRFlag } from "mantine-flagpack";

export const Hero = () => {
    const { t, i18n: { resolvedLanguage } } = useTranslation();

    const devSection = (
        <>
            <Text inline>
                {t("hero.devprefix")}
            </Text>
            <Text inline fw="bold" className="rainbowText">
                {t("hero.dev")}
            </Text>
            <Text inline>
                {t("hero.devsuffix")}
            </Text>
        </>
    )

    const location = (
        <Group gap={4}>
            <Text span fw="bold">
                {t("hero.location")}
            </Text>
            {resolvedLanguage !== "tr" && (
                <TRFlag w="lg" />
            )}
            {resolvedLanguage !== "tr" && (
                <Tooltip label="or, UTC+3" withArrow>
                    <Text span c="dimmed">
                        (GMT+3)
                    </Text>
                </Tooltip>  
            )}
        </Group>
    )

    return (
        <Stack w={{ base: "100%", xs: "80%" }}>
            <Section ta="center">
                <Stack gap="sm" align="center">
                    <Group gap={6} ta="center" justify="center">
                        <Text inline>
                            {t("hero.hi")}
                        </Text>
                        <Group fw={900} wrap="nowrap" gap={4}>
                            <Text inline span inherit>
                                Gökçe
                            </Text>
                            <Group wrap="nowrap" gap={0}>
                                <Tooltip label="turkish for sea">
                                    <Text inline span inherit>
                                        Deniz
                                    </Text>
                                </Tooltip>
                                <Text span>,</Text>
                            </Group>
                        </Group>
                        <Text span>
                            {t("hero.goby")}
                        </Text>
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            dennis
                        </Text>
                        {" "}
                        <Text span>
                            {t("hero.online")}
                        </Text>
                    </Group>

                    <Stack ta="center" align="center">
                        <Group gap="xs" justify="center" ta="center">
                            {resolvedLanguage == "en" && devSection}
                            {location}
                            {resolvedLanguage != "en" && devSection}
                        </Group>
                    </Stack>
                </Stack>
            </Section>

            <Section>
                <Group justify="space-between" w="100%" ta="end">
                    <OnekoSection />
                    <DiscordSection />
                </Group>
            </Section>
        </Stack>
    );
};
