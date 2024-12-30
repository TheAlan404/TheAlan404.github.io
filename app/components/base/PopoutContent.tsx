import { Box, Group, ScrollArea } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { NavItemListStack } from "../ui/NavItemListStack";
import { navItems } from "~/navItems";

export const PopoutContent = () => {
    return (
        <Group gap={0} wrap="nowrap" h="100%">
            <Group
                h="100%"
                className="frost"
                wrap="nowrap"
                gap={0}
                visibleFrom="md"
            >
                <NavItemListStack
                    items={navItems}
                    width={300}
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
