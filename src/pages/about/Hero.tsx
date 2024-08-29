import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box, Avatar, Paper } from '@mantine/core';
import { DiscordSection } from "@/src/pages/about/DiscordSection";
import { Section } from "@/src/components/misc/Section";
import { OnekoBed } from "@/src/features/oneko/OnekoBed";
import { OnekoSection } from "./OnekoSection";

export const Hero = () => {
    return (
        <Stack w={{ base: "100%", xs: "80%" }}>
            <Section>
                <Stack align="center" ta="center" gap={0}>
                    <Text c="yellow" fw="bold" fz="sm">
                        WEBSITE UNDER RENOVATION
                    </Text>
                    <Text fz="xs" c="dimmed">
                        watch out for bugs!
                    </Text>
                </Stack>
            </Section>

            <Section>
                <Stack>
                    <Text span>
                        Hi! I'm
                        {" "}
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            Gökçe
                            {" "}
                            <Tooltip label="turkish for sea">
                                <Text span inherit>
                                    Deniz
                                </Text>
                            </Tooltip>
                        </Text>
                        {", "}
                        known as
                        {" "}
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
                                c="blue"
                                fw="bolder"
                            >
                                :3
                            </Text>
                        </Tooltip>
                    </Text>

                    <Stack align="start" ta="start">
                        <Text>
                            I am a
                            {" "}
                            <Text span c="indigo">full stack developer</Text>.
                        </Text>
                    </Stack>

                    <Stack align="start" gap={0}>
                        <Group gap={5}>
                            <Text>I'm from</Text>
                            {" "}
                            <Image
                                src="/assets/img/ico/flag_tr.svg"
                                w="1.2em"
                                h="1.2em"
                            />
                            <Text span fw="bold">
                                Istanbul, Turkey
                            </Text>
                            <Tooltip label="or, UTC+3" withArrow>
                                <Text span c="dimmed">
                                    (GMT+3)
                                </Text>
                            </Tooltip>
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
