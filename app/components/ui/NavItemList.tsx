import { Box, Divider, FloatingIndicator, Group, NavLink, ScrollArea, Space, Stack, Text, Title, Tooltip } from "@mantine/core";
import { ReactNode, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router";
import { NavItem } from "~/types";

export const NavItemList = ({
    items,
    width = 240,
    showTooltips,
}: {
    width?: number;
    items: NavItem[];
    showTooltips?: boolean;
}) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLAnchorElement | null>>({});
    // const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const setControlRef = (val: string) => (node: HTMLAnchorElement) => {
        controlsRefs[val] = node;
        setControlsRefs(controlsRefs);
    };

    const location = useLocation();
    const allItems = items;
    const activePath = allItems.filter(x => x.type == "link").find(x => (
        x.path.split("/").every((x, i) => location.pathname.split("/")[i] == x)
    ))?.path;

    return (
        <ScrollArea.Autosize h="100%">
            <Stack
                gap={0}
                w={width}
                className="NavItemList"
                ref={setRootRef}
                pos="relative"
                // onMouseLeave={() => setHoveredPath(null)}
            >
                {items.map((item, i) => {
                    if(item.type == "link") {
                        return (
                            <Tooltip key={item.path} label={item.label} disabled={!showTooltips} position="right" withArrow>
                                <Box>
                                    <NavLink
                                        active={item.path == activePath}
                                        label={item.label}
                                        description={item.description}
                                        leftSection={item.icon}
                                        variant="subtle"
                                        component={RouterLink}
                                        to={item.path}
                                        ref={setControlRef(item.path)}
                                        // onMouseEnter={() => setHoveredPath(item.path)}
                                    />
                                </Box>
                            </Tooltip>
                        );
                    } else if(item.type == "divider") {
                        return (
                            <Divider
                                key={i}
                                label={item.text}
                            />
                        );
                    } else if(item.type == "title") {
                        return (
                            <Group
                                pl="xs"
                                py="xs" 
                                key={i}
                            >
                                <Title order={6}>
                                    {item.title}
                                </Title>
                            </Group>
                        )
                    }
                })}

                <FloatingIndicator
                    target={activePath ? controlsRefs[activePath] : null}
                    parent={rootRef}
                    className="indicator"
                    style={{
                        zIndex: -2,
                    }}
                />

                {/* <FloatingIndicator
                    target={hoveredPath ? controlsRefs[hoveredPath] : null}
                    parent={rootRef}
                    transitionDuration={200}
                    className="hoverIndicator"
                    style={{
                        zIndex: -3,
                    }}
                /> */}

                <Space h="xl" />
            </Stack>
        </ScrollArea.Autosize>
    )
};
