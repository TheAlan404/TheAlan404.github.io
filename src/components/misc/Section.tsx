import { Paper, PaperProps, PolymorphicComponentProps } from "@mantine/core";

export interface SectionProps extends PolymorphicComponentProps<"div", PaperProps> {

};

export const Section = (props: SectionProps) => {
    return (
        <Paper
            p="xs"
            {...props}
        />
    )
};
