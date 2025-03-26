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

export default function Layout() {
    const location = useLocation();

    return (
        <Box>
            <PageBackground />

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
                {!(location.pathname.length > 1) && (
                    <Pamphlet />
                )}
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
                                    a software developer
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

                    <Text>
                        New layout 'inspired' from <Anchor href="split.pet" target="_blank">split.pet</Anchor>
                    </Text>

                    <Group gap={4} c="blue">
                        <Text fw="bold">Y</Text>
                        <IconHeart />
                    </Group>

                    <Text ta="center" c="yellow" fw="bold">
                        WORK IN PROGRESS
                    </Text>
                </Stack>
            </Paper>
            <Box h="40vh" />
        </Box>
    );
};
