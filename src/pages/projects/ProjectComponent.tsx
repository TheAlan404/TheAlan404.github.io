import { Group, Box, Stack, Title, Text, SimpleGrid, AccordionChevron, Accordion, Badge } from '@mantine/core';
import { StatusRender } from "./StatusRender";
import { Project } from "../../types";
import { ImageWithLoader } from "../../components/misc/ImageWithLoader";
import { Decor } from "../../components/misc/Decor";
import { Section } from "@/src/components/misc/Section";
import { TechPart } from "./parts/TechPart";
import { ProjectButtonPart } from "./parts/ProjectButtonPart";
import { ProjectDecorations } from "./parts/ProjectDecorations";
import { ProjectTypePart } from "./parts/ProjectTypePart";
import { IconChevronDown } from "@tabler/icons-react";

export const ProjectComponent = ({ p }: { p: Project }) => {
    const projectButtons = p.buttons.map((button, i) => (
        <ProjectButtonPart button={button} projectName={p.name} key={i} />
    ));

    const projectButtonsSection = (
        <>
            <Group grow visibleFrom="sm">
                {projectButtons}
            </Group>
            <Stack hiddenFrom="sm">
                {projectButtons}
            </Stack>
        </>
    );

    const Render = p.Render || (() => <></>);

    return (
        <Section
            p={0}
            withBorder
            ta="left"
        >
            <Accordion.Item value={p.name} style={{ borderBottom: "unset" }}>
                <Accordion.Control className="hoverable">
                    <Stack gap={0}>
                        <Group justify="space-between">
                            <Group>
                                <IconChevronDown
                                    size="1em"
                                    className="mantine-Accordion-chevron chevron"
                                />

                                <Title order={4}>{p.name}</Title>

                                {p.new && (
                                    <Badge
                                        variant="light"
                                        color="green"
                                    >
                                        NEW
                                    </Badge>
                                )}

                                <StatusRender status={p.status || "ok"} />
                                
                                <Group gap={0}>
                                    {p.types.map(type => (
                                        <ProjectTypePart type={type} key={type} />
                                    ))}
                                </Group>
                            </Group>
                            <Group gap="0.1em">
                                {p.tech?.map((l, i) => (
                                    <TechPart tech={l} key={i} />
                                ))}
                            </Group>
                        </Group>

                        <Text c="dimmed">
                            {p.shortDesc}
                        </Text>
                    </Stack>
                </Accordion.Control>
                <Accordion.Panel>
                    <Stack p="md">
                        <Render />

                        {p.img && <ImageWithLoader
                            src={p.img}
                            radius="md"
                        />}

                        {p.content}

                        {projectButtonsSection}
                    </Stack>
                </Accordion.Panel>
            </Accordion.Item>
        </Section>
    );
};
