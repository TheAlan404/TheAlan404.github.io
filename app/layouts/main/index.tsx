import { Affix, Anchor, Avatar, Box, Button, Divider, Group, Paper, SimpleGrid, Stack, Table, Text, Title, Tooltip, Transition } from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { PopoutContent } from "~/layouts/main/PopoutContent";
import { PageBackground } from "~/components/features/bg/PageBackground";
import { PageButtons } from "./PageButtons";
import { PagePopout } from "./PagePopout";
import { Socials } from "./Socials";
import { IconAlertTriangle, IconExclamationMark, IconExternalLink, IconHeart, IconInfoCircle, TablerIcon } from "@tabler/icons-react";
import { DeveloperBackground } from "~/components/page/DeveloperBackground";
import { TRFlag } from "mantine-flagpack";
import { TRFlagSvg } from "./TRFlagSvg";
import { Badges } from "./Badges";
import { MantineLogo } from "@mantinex/mantine-logo";

export default function Layout() {
    const location = useLocation();

    return (
        <Box>
            <Affix position={{
                bottom: 16,
                left: 16,
            }}>
                <Stack ta="start" align="start">
                    <PageButtons />
                </Stack>
            </Affix>

            <PagePopout opened={location.pathname.length > 1}>
                <PopoutContent>
                    <Outlet />
                </PopoutContent>
            </PagePopout>

            <Box className="pamphlet_container">
                {!(location.pathname.length > 1) && <Pamphlet />}
            </Box>
        </Box>
    )
};

export const Pamphlet = () => {
    return (
        <Box className="pamphlet">
            <Box className="header">
                <Paper withBorder style={{ borderBottom: "unset" }} className="contain frost">
                    <Stack p="sm" gap="sm">
                        <Group wrap="nowrap" gap="xs" justify="center">
                            <Avatar
                                size="lg"
                                src="/assets/img/me/dennis_yagiz_rust_pfp.jpg"
                                style={{
                                    imageRendering: "auto",
                                }}
                            />
                            <Stack gap={0}>
                                <CoolName />
                                <Text c="dimmed">
                                    fullstack software developer
                                </Text>
                            </Stack>
                        </Group>

                        <Stack align="center">
                            <Socials />
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
            <Paper withBorder style={{
                borderTop: "unset",
                borderRadius: "0 0 16px 16px",
            }} className="frost" px="sm" pb="sm">
                <Stack align="center">
                    <Divider
                        label="Stuff I use"
                        w="80%"
                    />

                    <DeveloperBackground />

                    <Divider
                        label="About me!"
                        w="80%"
                    />

                    <Stack gap={0} align="center">
                        <Group gap={4}>
                            <Text span>I'm from</Text>
                            <TRFlagSvg height="1.5rem" />
                            <Text span fw="bold">Turkey / Türkiye</Text>
                            <Text span c="dimmed">(UTC+3)</Text>
                        </Group>

                        <Group gap="xs" ta="center" justify="center" align="center">
                            <Text span>I use</Text>
                            <Anchor
                                href="https://mantine.dev"
                                c="blue"
                                h="1.5rem"
                            >
                                <MantineLogo height="1.5rem" />
                            </Anchor>
                            <Text span>- a really good UI library</Text>
                        </Group>

                        <Text>
                            I like 🐈 cats, 🍓 strawberries and ☔ rain.
                        </Text>
                    </Stack>

                    <Divider
                        label="Featured Project"
                        w="80%"
                    />

                    <Stack px="xl" w="100%" gap={4}>
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
                                <Text>Deniz's Events List</Text>
                                <Text fz="xs">A website to list geeky events in Turkey</Text>
                            </Stack>
                        </Button>

                        <Group justify="end" ta="end" c="yellow" gap={4}>
                            <Text fz="xs">Most events are postponed</Text>
                            <IconAlertTriangle size={18} />
                        </Group>
                        <Group justify="end" ta="end" c="dimmed" gap={4}>
                            <Text fz="xs">...not to mention it's still in beta</Text>
                            <IconInfoCircle size={18} />
                        </Group>
                    </Stack>

                    <Divider
                        label="Buttons!"
                        w="80%"
                    />

                    <Stack gap={4}>
                        <Badges />

                        <Group justify="start" ta="start" c="dimmed" gap={4}>
                            <Text fz="xs">I need more. Give. me. more. 88x31's!!</Text>
                        </Group>
                    </Stack>

                    <Divider
                        label="neofetch"
                        w="80%"
                    />

                    <Box px="md" ff="monospace">
                        <Table
                            withRowBorders={false}
                            verticalSpacing={0}
                            data={{
                                body: [
                                    [
                                        <Text fw="bold">CPU</Text>,
                                        <Text>Intel Core i5 M480 @ 2.67GHz</Text>,
                                    ],
                                    [
                                        <Text fw="bold">RAM</Text>,
                                        <Text>4 GB DDR3</Text>,
                                    ],
                                    [
                                        <Text fw="bold">GPU</Text>,
                                        <Text>NVIDIA GeForce GT 420M</Text>,
                                    ],
                                ],
                            }}
                        />
                    </Box>

                    <Divider
                        label="Friends!"
                        w="80%"
                    />

                    <Stack>
                        <SimpleGrid cols={3} ta="center" spacing="xs" verticalSpacing="xs">
                            <Anchor href="https://me.devrals.xyz/">
                                DevRalsei <Text component="sup" c="dimmed" fz="xs">1</Text>
                            </Anchor>
                            <Anchor href="https://kuylar.dev/">
                                kuylar
                            </Anchor>
                            <Anchor href="https://skyrina.dev/">
                                Sky
                            </Anchor>
                            <Anchor href="https://www.dsezer.dev/">
                                dsezer
                            </Anchor>
                            <Anchor href="https://ctrl-c.club/~ath/">
                                staphyle
                            </Anchor>
                        </SimpleGrid>

                        <Text fz="sm" c="dimmed">
                            <Text inherit component="sup" fz="xs">1</Text>
                            <Text inherit span>: Check their website just before 11th of April!</Text>
                        </Text>
                    </Stack>

                    <Divider
                        w="80%"
                    />

                    <Text>
                        New layout 'inspired' from <Anchor href="https://split.pet" target="_blank">split.pet</Anchor>
                    </Text>

                    <Text c="dimmed">
                        Hak, Hukuk, Adalet!
                    </Text>

                    <Group justify="space-between" w="100%" px="sm">
                        <Text ta="center" c="yellow" fw="bold">
                            WORK IN PROGRESS
                        </Text>

                        <Group gap={4} c="blue">
                            <Text fw="bold">Y</Text>
                            <IconHeart />
                        </Group>
                    </Group>
                </Stack>
            </Paper>
            <Box h="40vh" />
        </Box>
    );
};

export const CoolName = () => {
    return (
        <Title order={3}>
            <Group gap={8} align="center">
                <Text span inherit>
                    hi, i'm
                </Text>

                <Group gap={0} align="end" className="rainbowText">
                    {"Gökçe Deniz".split("").map((letter, i) => (
                        <Text
                            inherit
                            span
                            key={i}
                            className="name-letter"
                            style={{ "--i": i }}
                            w={letter == " " ? "8px" : undefined}
                        >
                            {letter}
                        </Text>
                    ))}
                </Group>
            </Group>
        </Title>
    );
};

