import { Group, Stack, Title, Text, Space, Code, Accordion, Anchor, Paper } from '@mantine/core';
import { PersonalIcons } from "../components/PersonalIcons";

export const Hero = () => {
    return (
        <Paper bg="dark.7" shadow="xl">
            <Stack gap={0} align="center">
                <Space h="xl" />
                <Title>
                    dennis
                </Title>

                <PersonalIcons />

                <Stack>
                    <Code>
                        {"{love && hate && <Relationship with=\"webDev\" />}"}
                    </Code>
                    <Accordion>
                        <Accordion.Item value="a">
                            <Accordion.Control>
                                about me
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text>
                                    hi :3 i'm dennis - a full stack developer
                                    <br />
                                    i've been coding for about 4 years now
                                    <br />
                                    sorry idk what to put here
                                    <br />
                                    yeah
                                </Text>

                                <Stack p="md" gap={2}>
                                    {[
                                        ["Timezone", "GMT+3"],
                                        ["Education", "Highschool"],
                                        ["Languages", "JS, Rust, C#"],
                                        ["Fave UI lib", "Mantine", {
                                            Comp: Anchor,
                                            href: "https://mantine.dev/",
                                            target: "_blank",
                                        }],
                                        ["Trans", "rights"],
                                    ].map(([k, v, { Comp = Text, ...vp } = {}], i) => (
                                        <Group justify="space-between" key={i}>
                                            <Text fw="bold">{k}</Text>
                                            <Comp {...vp}>{v}</Comp>
                                        </Group>
                                    ))}
                                </Stack>

                                <Text fz={"sm"}>
                                    ps. deniz means sea in turkish
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Stack>
            </Stack>
        </Paper>
    );
};
