import { Group, Stack, Title, Text, Space, Code, Accordion, Anchor, Paper, Tooltip, Center, Flex, Image, List, Divider, Box } from '@mantine/core';
import { PersonalIcons } from "../components/PersonalIcons";
import { Link } from "../components/Link";
import { IconSchool } from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";

export const Hero = () => {
    return (
        <Stack justify="space-between" mb="md">
            <Stack gap={0} align="center" w="100%">
                <Space h="xl" />
                <Stack align="center">
                    <Group align="center">
                        <Text span fz={22}>✨</Text>
                        <Title>deniz.blue</Title>
                        <Text span fz={22}>🌸</Text>
                    </Group>
                    <PersonalIcons />
                    <Code>
                        {"change the world"}
                    </Code>
                </Stack>

                <Space h="xl" />

                <Stack>
                    <Text>
                        Hi! I'm
                        {" "}
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            Gökçe Deniz
                        </Text>
                        {" "}
                        <Text span c="dimmed">
                            (turkish for sea)
                        </Text>
                        , known as
                        {" "}
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            dennis
                        </Text>
                        {" "}
                        online.
                        {" "}
                        <Tooltip label="mrow~" position="right" withArrow>
                            <Text
                                span
                                c="blue"
                                fw="bolder"
                            >
                                :3
                            </Text>
                        </Tooltip>
                    </Text>

                    <Group gap={5} justify="end">
                        <Text>I'm from</Text>
                        {" "}
                        <Image
                            src="/flag_tr.svg"
                            w="1.2em"
                            h="1.2em"
                        />
                        <Text span fw="bold">
                            Istanbul, Turkey
                        </Text>
                        {"("}
                        <Tooltip label="or, UTC+3" withArrow>
                            <Text span>
                                GMT+3
                            </Text>
                        </Tooltip>
                        {")"}

                    </Group>

                    <Stack align="start" pl="md">
                        <Stack ta="start">
                            <Text ta="start">
                                I am a:
                            </Text>
                            <List spacing="md">
                                <List.Item>
                                    <Group gap="xs" wrap="nowrap" justify="start">
                                        <Text span fw="bold">Developer</Text> at
                                        <Image
                                            src="/ulus_icon.ico"
                                            w="1.5em"
                                            h="1.5em"
                                        />
                                        <Link text="Ulus" url="https://ulusgroup.org/" />
                                    </Group>
                                </List.Item>
                                <List.Item>
                                    <Group gap="xs" wrap="nowrap" justify="start">
                                        <Text span fw="bold">Coordinator</Text> at
                                        <Image
                                            src="/modfest_icon.svg"
                                            w="1.5em"
                                            h="1.5em"
                                        />
                                        <Link text="ModFest" url="https://modfest.net" />
                                    </Group>
                                </List.Item>
                                <List.Item>
                                    <Group gap={4} justify="start">
                                        and an
                                        {" "}
                                        <Text span c="dimmed">(unpaid)</Text>
                                        {" "}
                                        <Text span fw="bold">Technician</Text>
                                        {" "}
                                        at
                                        {" "}
                                        <Text span c="blue.6">my school</Text>
                                        {" "}
                                        <IconSchool />
                                    </Group>
                                </List.Item>
                            </List>
                        </Stack>
                    </Stack>

                    <Stack align="center">
                        <Accordion>
                            <Accordion.Item value="dev">
                                <Accordion.Control>
                                    Developer Background
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <Stack>
                                        <Text>
                                            I call mx   yself a <Text span c="indigo">full stack developer</Text> since I can do both frontend and backend
                                            <Text>
                                                ...but I mainly love working on backends.
                                            </Text>
                                        </Text>
                                        <Text>
                                            I only do frontend because
                                            {"   "}
                                            <Anchor
                                                href="https://mantine.dev/"
                                                target="_blank"
                                            >
                                                <MantineLogo size={"1em"} type="mark" />
                                                {" "}
                                                Mantine
                                            </Anchor> exists
                                            {" "}
                                            <Text span c="dimmed">(best UI lib ever btw)</Text>
                                        </Text>
                                        <Text>
                                            I've been writing code for about 5 years now, and I'm still improving.
                                        </Text>
                                        <Text>

                                            I started via JavaScript, then I got into C#, React and then Rust.
                                        </Text>
                                        <Text>

                                            I hope I can land an internship or sorts. Or a job...
                                        </Text>
                                    </Stack>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>


                    <Box py="lg" my="lg" />

                </Stack>
            </Stack>
            <Stack>

            </Stack>
        </Stack>
    );
};
