import { Affix, Anchor, Avatar, Box, Divider, Group, Paper, Stack, Text, Title, Tooltip, Transition } from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { PopoutContent } from "~/layouts/main/PopoutContent";
import { PageBackground } from "~/components/features/bg/PageBackground";
import { PageButtons } from "./PageButtons";
import { PagePopout } from "./PagePopout";
import { Socials } from "./Socials";
import { IconHeart, TablerIcon } from "@tabler/icons-react";
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
                <Transition
                    mounted={!(location.pathname.length > 1)}
                >
                    {(styles) => (
                        <Box style={styles}>
                            <Pamphlet />
                        </Box>
                    )}
                </Transition>
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
                                <Title order={3}>
                                    hi, i'm Gökçe
                                </Title>
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
                    <DeveloperBackground />

                    <Divider
                        w="80%"
                    />

                    <Stack gap={0} align="center">
                        <Group gap={4}>
                            <Text span>I'm from</Text>
                            <TRFlagSvg height="1.5rem" />
                            <Text span fw="bold">Turkey</Text>
                            <Text span c="dimmed">(UTC+3)</Text>
                        </Group>

                        <Group gap="xs" wrap="nowrap" align="center">
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
                    </Stack>

                    <Divider
                        label="Buttons!"
                        w="80%"
                    />

                    <Badges />

                    <Divider
                        w="80%"
                    />

                    <Text>
                        New layout 'inspired' from <Anchor href="https://split.pet" target="_blank">split.pet</Anchor>
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
