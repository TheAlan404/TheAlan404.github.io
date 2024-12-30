import { Accordion, Divider, Group, Paper, Stack, Title } from "@mantine/core";

export const AboutSection = ({
    value,
    title,
    children,
    icon,
}: {
    value: string,
    title: string,
    icon?: React.ReactNode,
} & React.PropsWithChildren) => {
    return (
        <Stack w="100%" py="sm">
            <Divider
                label={(
                    <Group align="center" wrap="nowrap">
                        {icon}
                        <Title order={4}>
                            {title}
                        </Title>
                    </Group>
                )}
            />

            <Stack w="100%" align="center" py="sm">
                <Stack w={{
                    base: "100%",
                    xs: "80%",
                }}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    );
}
