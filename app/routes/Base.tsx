import { Box, Grid, Group, NavLink, Paper, ScrollArea, Stack, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BigButton } from "~/components/base/BigButton";
import { Outlet, useLocation } from "react-router";
import { Suspense } from "react";
import { IconBrush, IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
// import { NavItem, NavItemList } from "./NavItemList";
// import { DataBlogPosts } from "../data/DataBlogPosts";
// import { DataProjects } from "../data/projects";
// import { ProjectHeader, ProjectHeaderCompact } from "../pages/projects/ProjectHeader";
import { Section } from "~/components/ui/Section";
import { NavItem } from "~/types";
import { PopoutContent } from "~/components/base/PopoutContent";

export default function Layout() {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(location.pathname.length > 1);

    return (
        <Box h="100vh">
            <Stack
                style={{ position: "absolute" }}
                w="100%"
                h="100vh"
                justify="end"
                pb={{ base: "xs", sm: "md" }}
            >
                <BigButton
                    withHint={!opened}
                    onClick={toggle}
                />
            </Stack>

            <Stack
                style={{ position: "absolute" }}
                pt={{ base: "0px", sm: "xl" }}
                align="center"
                className="asdf"
                w="100%"
                h="100%"
            >
                <Transition
                    mounted={opened}
                    transition={"fade-up"}
                    keepMounted
                >
                    {(styles) => (
                        <Box
                            style={styles}
                            w={{ base: "100%", sm: "70%" }}
                            h={{ base: "90%", sm: "80%" }}
                            className="meow"
                        >
                            <Section w="100%" h="100%" p={0}>
                                <PopoutContent />
                            </Section>
                        </Box>
                    )}
                </Transition>
            </Stack>
        </Box>
    )
};
