import { Box, Grid, Group, NavLink, Paper, ScrollArea, Stack, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BigButton } from "./BigButton";
import { Outlet, useLocation, NavLink as ReactRouterNavLink } from "react-router-dom";
import { Section } from "../components/misc/Section";
import { Suspense } from "react";
import { IconBrush, IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
import { NavItem, NavItemList } from "./NavItemList";
import { DataBlogPosts } from "../data/DataBlogPosts";
import { DataProjects } from "../data/projects";
import { ProjectHeader, ProjectHeaderCompact } from "../pages/projects/ProjectHeader";

const mainMenu: NavItem[] = [
    { icon: <IconHome />, path: "/", label: "Home" },
    { icon: <IconClipboard />, path: "/projects", label: "Projects" },
    { icon: <IconBrush />, path: "/art", label: "Art" },
    { icon: <IconFileText />, path: "/blog", label: "Blog" },
];

const subMenus: Partial<Record<string, NavItem[]>> = {
    projects: DataProjects.map(x => ({
        path: `/projects/${x.id}`,
        label: <ProjectHeaderCompact p={x} />,
    })),
    blog: DataBlogPosts.map(x => ({
        path: `/blog/${x.id}`,
        label: x.title,
        description: x.desc,
    })),
};

export const BasePage = () => {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(!!window.location.hash);

    const width = 300;

    const part = location.pathname.split("/")[1];
    const subMenuItems = subMenus[part || ""];

    const hasSubMenu = !!(subMenuItems && subMenuItems.length);

    console.log(location.pathname.split("/"))
    const level = location.pathname.split("/").length;
    const mobileForceSubMenu = level == 2 && hasSubMenu;

    const content = (
        <ScrollArea.Autosize mah={"100%"} h="100%" w="100%" scrollbars={"y"}>
            <Box p="sm" h="100%">
                <Suspense fallback={"Loading..."}>
                    <Outlet />
                </Suspense>
            </Box>
        </ScrollArea.Autosize>
    );

    const panel = (
        <Group gap={0} wrap="nowrap" h="100%">
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                visibleFrom="sm"
            >
                <NavItemList
                    collapsed={hasSubMenu}
                    items={mainMenu}
                    fullWidth={width}
                />
                <NavItemList
                    hidden={!hasSubMenu}
                    items={subMenuItems || []}
                    fullWidth={width - 48}
                />
            </Group>
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                hiddenFrom="sm"
            >
                <NavItemList
                    collapsed
                    items={mainMenu}
                    fullWidth={width}
                />
                <NavItemList
                    hidden={!mobileForceSubMenu}
                    items={subMenuItems || []}
                    fullWidth={window.innerWidth - 48 - 24}
                />
            </Group>
            <Box h="100%" w="100%" visibleFrom="sm">
                {content}
            </Box>
            <Box h="100%" w="100%" hiddenFrom="sm">
                {!mobileForceSubMenu && content}
            </Box>
        </Group>
    );

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
                                {panel}
                            </Section>
                        </Box>
                    )}
                </Transition>
            </Stack>
        </Box>
    )
};
