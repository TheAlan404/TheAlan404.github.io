import { Paper, PaperProps, PolymorphicComponentProps } from "@mantine/core";

export interface SectionProps extends PolymorphicComponentProps<"div", PaperProps> {
    hoverable?: boolean;
};

export const Section = (props: SectionProps) => {
    return (
        <Paper
            p="xs"
            className={`frost ${props.hoverable ? "hoverable" : ""} ${props.className}`}
            {...props}
        />
    )
};
