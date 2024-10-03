import { Group, Box, Stack, Title, Text, SimpleGrid, AccordionChevron, Accordion } from '@mantine/core';
import { StatusRender } from "./StatusRender";
import { Project } from "../../types";
import { ImageWithLoader } from "../../components/misc/ImageWithLoader";
import { Decor } from "../../components/misc/Decor";
import { Section } from "@/src/components/misc/Section";
import { TechPart } from "./parts/TechPart";
import { ProjectButtonPart } from "./parts/ProjectButtonPart";
import { ProjectDecorations } from "./parts/ProjectDecorations";
import { ProjectTypePart } from "./parts/ProjectTypePart";

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
                                    <Title order={4}>{p.name}</Title>

                                    <StatusRender status={p.status || "ok"} />

                                    {p.types.map(type => (
                                        <ProjectTypePart type={type} key={type} />
                                    ))}
                                </Group>
                                <Group gap="xs">
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
