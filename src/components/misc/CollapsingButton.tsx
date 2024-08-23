import { ActionIcon, ActionIconVariant, Box, Button, ButtonVariant, MantineBreakpoint, MantineColor } from "@mantine/core";
import React from "react";

export const CollapsingButton = ({
    icon,
    children,
    onClick,
    variant,
    color,
    iconPosition = "left",
    breakpoint,
    reverseBreakpoint,
}: {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right",
    children?: React.ReactNode;
    color?: MantineColor;
    variant?: ButtonVariant & ActionIconVariant;
    onClick?: () => void;
    breakpoint?: MantineBreakpoint;
    reverseBreakpoint?: boolean;
}) => {
    return (
        <Box>
            <ActionIcon
                {...{
                    color,
                    variant,
                    onClick,
                    [reverseBreakpoint ? "visibleFrom" : "hiddenFrom"]: breakpoint,
                }}
            >
                {icon}
            </ActionIcon>

            <Button
                {...{
                    onClick,
                    color,
                    variant,
                    [iconPosition + "Section"]: icon,
                    [reverseBreakpoint ? "hiddenFrom" : "visibleFrom"]: breakpoint,
                }}
            >
                {children}
            </Button>
        </Box>
    )
};
