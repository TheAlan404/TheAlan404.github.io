import { Box, Group, ScrollArea } from "@mantine/core";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { NavItemListStack } from "../ui/NavItemListStack";
import { navItems } from "~/navItems";
import { NavItemList } from "../ui/NavItemList";

export const PopoutContent = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    const submenu = navItems.filter(x => x.type == "link").find(x => x.path.split("/")[1] == path[1])?.children || [];

    return (
        <Group gap={0} wrap="nowrap" h="100%">
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                visibleFrom="md"
            >
                <NavItemList
                    items={submenu}
                    width={submenu.length ? 300 : 0}
                />
            </Group>
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                hiddenFrom="md"
            >
                <NavItemListStack
                    items={navItems}
                    width={300}
                    forceCollapse
                />
            </Group>
            <Box h="100%" w="100%">
                <ScrollArea.Autosize mah={"100%"} h="100%" w="100%" scrollbars={"y"}>
                    <Box p="sm" h="100%">
                        <Suspense fallback={"Loading..."}>
                            <Outlet />
                        </Suspense>
                    </Box>
                </ScrollArea.Autosize>
            </Box>
        </Group>
    );
};
