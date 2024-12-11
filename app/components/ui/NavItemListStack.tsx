import { Group } from "@mantine/core";
import { useLocation } from "react-router";
import { NavItem } from "~/types";
import { NavItemList } from "./NavItemList";

export const NavItemListStack = ({
    items,
    width,
}: {
    items: NavItem[];
    width: number;
}) => {
    const location = useLocation();
    const path = location.pathname.split("/");
    
    const sub1 = items.find(x => x.path.split("/")[1] == path[1]);
    const stack = [
        items,
        sub1?.children || [],
    ];

    return (
        <Group gap={0}>
            {stack.map((v, i, arr) => (
                <NavItemList
                    items={v}
                    hidden={!v.length}
                    collapsed={i != arr.length-2}
                    fullWidth={width - (48 * i)}
                />
            ))}
        </Group>
    )
};
