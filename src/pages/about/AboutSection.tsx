import { Section } from "@/src/components/misc/Section";
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
        <Accordion.Item value={value} w="100%" style={{ borderBottom: "unset" }} py="sm">
            <Section p={0} hoverable className="flashable">
                <Accordion.Control bg="unset">
                    <Group align="center" wrap="nowrap">
                        {icon}
                        <Title order={4}>
                            {title}
                        </Title>
                    </Group>
                </Accordion.Control>
            </Section>
            <Accordion.Panel>
                <Stack w="100%" align="center" py="sm">
                    <Stack w={{
                        base: "100%",
                        xs: "80%",
                    }}>
                        {children}
                    </Stack>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    );
}
