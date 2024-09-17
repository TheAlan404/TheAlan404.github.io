import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar, Paper } from '@mantine/core';
import { DiscordSection } from "@/src/pages/about/DiscordSection";
import { Section } from "@/src/components/misc/Section";
import { OnekoBed } from "@/src/features/oneko/OnekoBed";
import { OnekoSection } from "./OnekoSection";

export const Hero = () => {
    return (
        <Stack w={{ base: "100%", xs: "80%" }}>
            <Section ta="center">
                <Stack gap="sm" align="center">
                    <Group gap={6}>
                        <Text inline>Hi! I'm</Text>
                        <Text
                            inline
                            fw={900}
                            
                        >
                            <Group wrap="nowrap" gap={4}>
                                <Text inline inherit>Gökçe</Text>
                                <Group wrap="nowrap" gap={0}>
                                    <Tooltip label="turkish for sea">
                                        <Text inline inherit>
                                            Deniz
                                        </Text>
                                    </Tooltip>
                                    <Text>,</Text>
                                </Group>
                            </Group>
                        </Text>
                        <Text>I go by</Text>
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
                            online.
                        </Text>
                        {" "}
                        <Tooltip label="mrow~" position="right" withArrow>
                            <Text
                                span
                                className="transText"
                            >
                                :3
                            </Text>
                        </Tooltip>
                    </Group>

                    <Stack ta="center" align="center">
                        <Group gap="xs">
                            <Text inline>I am a</Text>
                            <Text inline fw="bold" className="rainbowText">full stack developer</Text>
                            <Text inline>from</Text>
                            <Group gap={4}>
                                <Text span fw="bold">
                                    Istanbul, Turkey
                                </Text>
                                <Image
                                    src="/assets/img/ico/flag_tr.svg"
                                    w="1.2em"
                                    h="1.2em"
                                />
                                <Tooltip label="or, UTC+3" withArrow>
                                    <Text span c="dimmed">
                                        (GMT+3)
                                    </Text>
                                </Tooltip>
                            </Group>
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
