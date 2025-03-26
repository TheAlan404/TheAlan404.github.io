import { Box, Group, Paper, Popover, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";
import { useLocation, Link as RouterLink, To } from "react-router";
import { IconBrush, IconClipboard, IconFileText, IconMusic, IconSparkles } from "@tabler/icons-react";
import { useUIState } from "~/components/base/UIContext";
import { MusicPopout } from "./MusicPopout";

export const PageButtons = () => {
    const ui = useUIState();

    const MainPages = [
        {
            icon: <IconSparkles />,
            path: "/",
            label: "About Me",
        },
        {
            icon: <IconClipboard />,
            path: "/projects",
            label: "Projects",
        },
        {
            icon: <IconBrush />,
            path: "/art",
            label: "OC Art",
        },
    ];

    return (
        <Group gap={16}>
            {MainPages.map(item => (
                <PageButton
                    key={item.path}
                    {...item}
                />
            ))}

            <Popover
                opened={ui.musicPopout}
                transitionProps={{ transition: "fade-up" }}
                classNames={{
                    dropdown: "frost",
                }}
            >
                <Popover.Target>
                    <Box>
                        <PageButton
                            icon={<IconMusic />}
                            label="Music"
                            onClick={() => ui.toggle("musicPopout")}
                        />
                    </Box>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text c="yellow" fw="bold">
                        Work In Progress!
                    </Text>
                    {/* <MusicPopout /> */}
                </Popover.Dropdown>
            </Popover>
        </Group>
    );
};

export const PageButton = ({
    icon,
    label,
    path,
    onClick,
}: {
    icon?: ReactNode;
    label: ReactNode;
    path?: string;
    onClick?: () => void;
}) => {
    const location = useLocation();
    const active = location.pathname.split("/")[1] == path?.slice(1);

    return (
        <Paper
            withBorder
            w="4rem"
            h="4rem"
            className="frost buttonResizable"
            component={path ? RouterLink : undefined}
            to={active ? "/" : path!}
            c="var(--mantine-default-text)"
            onClick={onClick}
        >
            <Stack align="center" ta="center" justify="center" gap={0} h="100%">
                {icon}
                <Text fz="xs">
                    {label}
                </Text>
            </Stack>
        </Paper>
    );
};

