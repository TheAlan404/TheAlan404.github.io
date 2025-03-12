import { Title, UnstyledButton } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Link, To } from "react-router";

export const SubtleLink = ({
    children,
    to,
    disabled,
}: {
    to: To;
    disabled?: boolean;
} & PropsWithChildren) => {
    return (
        <UnstyledButton
            component={disabled ? undefined : Link}
            to={to}
            className={disabled ? "" : "subtlelink"}
        >
            {children}
        </UnstyledButton>
    );
};
