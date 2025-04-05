import { Anchor, Box, Button, Divider, Group, SimpleGrid, Stack, Table, Text } from "@mantine/core";
import { Badges } from "./Badges";
import { IconAffiliate, IconAlertCircle, IconAlertTriangle, IconCalendar, IconExternalLink, IconInfoCircle, IconTerminal2 } from "@tabler/icons-react";

export const FeaturedProjects = () => {
    return (
        <Stack align="center" w="100%" px="sm">
            <Divider
                label="Featured Projects"
                w="80%"
            />

            {/* TODO: uncomment when activity is restored */}

            {/* <Stack px="xl" w="100%" gap={4}>
                <Button
                    fullWidth
                    variant="light"
                    h="auto"
                    rightSection={<IconExternalLink />}
                    component="a"
                    href="https://events.deniz.blue"
                    target="_blank"
                >
                    <Stack gap={0} style={{ textWrap: "wrap" }} py={4}>
                        <Text>Deniz's Events Site</Text>
                        <Text fz="xs">A website to list geeky events in Turkey</Text>
                    </Stack>
                </Button>

                <Group justify="end" ta="end" c="yellow" gap={4} wrap="nowrap">
                    <Stack flex="1">
                        <Text fz="xs" inline>Most events are postponed due to the recent events happening in Turkey</Text>
                    </Stack>
                    <IconAlertTriangle size={18} />
                </Group>
                <Group justify="end" ta="end" c="dimmed" gap={4}>
                    <Text fz="xs">...not to mention it's still in beta</Text>
                    <IconInfoCircle size={18} />
                </Group>
            </Stack> */}

            <Group wrap="nowrap" align="start" px="lg" gap={4}>
                <IconCalendar />
                <Stack w="100%" gap={4} flex="1">
                    <Text fz="sm">
                        If you live in Turkey too, check out <Anchor
                            href="https://events.deniz.blue"
                            target="_blank"
                            inherit
                        >
                            Deniz's Events Site
                        </Anchor> - a website for geeky events in Turkey.
                    </Text>
                    <Group justify="start" ta="start" c="red" gap={4} wrap="nowrap">
                        <IconAlertCircle size={18} />
                        <Stack flex="1">
                            <Text fz="xs" inline c="dimmed">
                                Most events are however postponed due to the <Anchor
                                    href="https://en.wikipedia.org/wiki/2025_Turkish_protests"
                                    target="_blank"
                                    inherit
                                    c="dimmed"
                                    td="underline dotted"
                                >
                                    recent events
                                </Anchor>
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Group>

            <Group wrap="nowrap" align="start" px="lg" gap={4}>
                <IconTerminal2 />
                <Stack w="100%" gap={4} flex="1">
                    <Text fz="sm">
                        If you manage Minecraft servers, <Anchor
                            href="https://github.com/ParadigmMC/mcman"
                            target="_blank"
                            inherit
                        >
                            mcman
                        </Anchor> is a CLI tool I've made that might help you.
                    </Text>
                </Stack>
            </Group>

            <Group wrap="nowrap" align="start" px="lg" gap={4}>
                <IconAffiliate />
                <Stack w="100%" gap={0} flex="1">
                    <Text fz="sm">
                        Polyamorous with <Anchor
                            href="https://morethanone.info/"
                            target="_blank"
                            inherit
                            c="unset"
                            td="underline dotted"
                        >
                            plural systems
                        </Anchor>? Check <Anchor
                            href="https://poly.deniz.blue"
                            target="_blank"
                            inherit
                        >
                            poly.deniz.blue
                        </Anchor>, a graph editor for that.
                    </Text>
                    <Text fz="xs" c="dimmed" inline>
                        Yes, it's inspired from <Anchor
                            href="https://polycul.es"
                            target="_blank"
                            inherit
                            c="dimmed"
                            td="underline dotted"
                        >
                            polycul.es
                        </Anchor>
                    </Text>
                </Stack>
            </Group>
        </Stack>
    );
};
