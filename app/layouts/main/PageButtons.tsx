import { Group, Paper, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";
import { navItems } from "~/navItems";
import { useLocation, Link as RouterLink, To } from "react-router";
import { IconBrush, IconClipboard, IconFileText, IconSparkles } from "@tabler/icons-react";

export const PageButtons = () => {
    const MainPages = [
        {
            icon: <IconSparkles />,
            path: "home",
            label: "About Me",
        },
        {
            icon: <IconClipboard />,
            path: "projects",
            label: "Projects",
        },
        {
            icon: <IconBrush />,
            path: "art",
            label: "Art",
        },
        {
            icon: <IconFileText />,
            label: "Blog",
            path: "blog",
        },
    ];

    return (
        <Group>
            {MainPages.map(item => (
                <PageButton
                    {...item}
                />
            ))}
        </Group>
    );
};

export const PageButton = ({
    icon,
    label,
    path,
}: {
    icon?: ReactNode;
    label: ReactNode;
    path?: string;
}) => {
    const location = useLocation();
    const active = location.pathname.split("/")[1] == path;

    return (
        <Paper
            withBorder
            w="4rem"
            h="4rem"
            className="frost buttonResizable"
            component={path ? RouterLink : undefined}
            to={active ? "/" : path!}
            c="var(--mantine-default-text)"
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

