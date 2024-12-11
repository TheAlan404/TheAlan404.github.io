import { Box, Group, ScrollArea } from "@mantine/core";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { NavItem } from "~/types";
import { NavItemListStack } from "../ui/NavItemListStack";
import { navItems } from "~/config";

export const PopoutContent = () => {
    const location = useLocation();

    const width = 300;

    const [_, a, b] = location.pathname.split("/");
    
    const subMenuItems: NavItem[] | undefined = [] //subMenus[part || ""];

    const hasSubMenu = !!(subMenuItems && subMenuItems.length);

    const level = location.pathname.split("/").length;
    const mobileForceSubMenu = level == 2 && hasSubMenu;

    return (
        <Group gap={0} wrap="nowrap" h="100%">
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                visibleFrom="sm"
            >
                <NavItemListStack
                    items={navItems}
                    width={300}
                />
                {/* <NavItemList
                    collapsed={hasSubMenu}
                    items={mainMenu}
                    fullWidth={width}
                />
                <NavItemList
                    hidden={!hasSubMenu}
                    items={subMenuItems || []}
                    fullWidth={width - 48}
                /> */}
            </Group>
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                hiddenFrom="sm"
            >
                {/* <NavItemList
                    collapsed
                    items={mainMenu}
                    fullWidth={width}
                />
                <NavItemList
                    hidden={!mobileForceSubMenu}
                    items={subMenuItems || []}
                    fullWidth={window.innerWidth - 48 - 24}
                /> */}
            </Group>
            <Box h="100%" w="100%" visibleFrom="sm">
                <ScrollArea.Autosize mah={"100%"} h="100%" w="100%" scrollbars={"y"}>
                    <Box p="sm" h="100%">
                        <Suspense fallback={"Loading..."}>
                            <Outlet />
                        </Suspense>
                    </Box>
                </ScrollArea.Autosize>
            </Box>
            {/* <Box h="100%" w="100%" hiddenFrom="sm">
                {!mobileForceSubMenu && content}
            </Box> */}
        </Group>
    );
};
