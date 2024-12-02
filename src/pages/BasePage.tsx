import { Box, Grid, Group, NavLink, Paper, ScrollArea, Stack, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BigButton } from "./BigButton";
import { Outlet, useLocation, NavLink as ReactRouterNavLink } from "react-router-dom";
import { Section } from "../components/misc/Section";
import { ReactNode, Suspense } from "react";
import { IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const BasePage = () => {
    const [opened, { toggle }] = useDisclosure(false);

    const collapseFirst = false;

    return (
        <Box h="100vh">
            <Stack style={{ position: "absolute" }} w="100%" h="100vh" justify="end" pb="md">
                <BigButton
                    withHint={!opened}
                    onClick={toggle}
                />
            </Stack>

            <Stack
                style={{ position: "absolute" }}
                pt="xl"
                align="center"
                w="100%"
                h="100%"
            >
                <Transition
                    mounted={opened}
                    transition={"fade-up"}
                    keepMounted
                >
                    {(styles) => (
                        <Box style={styles} w="70%" h="80%">
                            <Section w="100%" h="100%" p={0}>
                                <Group gap={0} wrap="nowrap" h="100%">
                                    <Box h="100%" className="frost" w="30%">
                                        <ScrollArea.Autosize h="100%">
                                            <NavBar />
                                        </ScrollArea.Autosize>
                                    </Box>
                                    <Box h="100%" w="70%">
                                        <ScrollArea.Autosize h="100%">
                                            <Box p="sm">
                                                <Suspense fallback={"Loading..."}>
                                                    <Outlet />
                                                </Suspense>
                                            </Box>
                                        </ScrollArea.Autosize>
                                    </Box>
                                </Group>
                            </Section>
                        </Box>
                    )}
                </Transition>
            </Stack>
        </Box>
    )
};

type NavBarItem = {
    icon: ReactNode;
    path: string;
    label: string;
};

export const NavBar = () => {
    const [t] = useTranslation();
    const location = useLocation();
    
    return (
        <Stack justify="space-between">
            <Stack gap={0}>
                {([
                    { icon: <IconHome />, path: "/", label: "home" },
                    { icon: <IconClipboard />, path: "/projects", label: "projects" },
                    { icon: <IconFileText />, path: "/blog", label: "blog" },
                ]).map(item => (
                    <NavLink
                        component={ReactRouterNavLink}
                        to={item.path}
                        label={t(`navbar.${item.label}`)}
                        leftSection={item.icon}
                    />
                ))}
            </Stack>

            <Stack gap={0}>

            </Stack>
        </Stack>
    )
};

