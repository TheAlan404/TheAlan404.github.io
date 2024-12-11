import { FloatingIndicator, NavLink, ScrollArea, Stack } from "@mantine/core";
import { ReactNode, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router";
import { NavItem } from "~/types";

export const NavItemList = ({
    items,
    collapsed,
    hidden,
    fullWidth = 240,
}: {
    collapsed?: boolean;
    hidden?: boolean;
    fullWidth?: number;
    items: NavItem[];
}) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLAnchorElement | null>>({});
    const setControlRef = (val: string) => (node: HTMLAnchorElement) => {
        controlsRefs[val] = node;
        setControlsRefs(controlsRefs);
    };

    const location = useLocation();
    const allItems = items;
    const activePath = allItems.find(x => (
        x.path.split("/").every((x, i) => location.pathname.split("/")[i] == x)
    ))?.path;

    return (
        <ScrollArea.Autosize h="100%">
            <Stack
                gap={0}
                w={hidden ? 0 : (collapsed ? 48 : fullWidth)}
                style={{
                    transition: "width 200ms linear",
                }}
                ref={setRootRef}
                pos="relative"
            >
                {items.map((item, i) => {
                    return (
                        <NavLink
                            key={i}
                            active={item.path == activePath}
                            label={item.label}
                            description={item.description}
                            leftSection={item.icon}
                            variant="subtle"
                            component={RouterLink}
                            to={item.path}
                            ref={setControlRef(item.path)}
                        />
                    )
                })}

                <FloatingIndicator
                    target={activePath ? controlsRefs[activePath] : null}
                    parent={rootRef}
                    className="indicator"
                    style={{
                        zIndex: -2,
                    }}
                />
            </Stack>
        </ScrollArea.Autosize>
    )
};
