import { Group } from "@mantine/core";
import { useLocation } from "react-router";
import { NavItem } from "~/types";
import { NavItemList } from "./NavItemList";

export const NavItemListStack = ({
    items,
    width,
    forceCollapse,
}: {
    items: NavItem[];
    width: number;
    forceCollapse?: boolean;
}) => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const atIndex = path.length == 2;

    const main = items;
    const submenu = main.filter(x => x.type == "link").find(x => x.path.split("/")[1] == path[1])?.children || [];

    const collapsedWidth = 48;
    const hiddenWidth = 0;

    return (
        <Group gap={0} wrap="nowrap" h="100%" className="NavItemListStack">
            <NavItemList
                items={main}
                width={(submenu.length || forceCollapse) ? collapsedWidth : width}
                showTooltips={!!(submenu.length || forceCollapse)}
            />
            <NavItemList
                items={submenu}
                width={((forceCollapse ? (submenu.length && atIndex) : submenu.length)) ? (width - collapsedWidth) : hiddenWidth}
            />
        </Group>
    )
};
