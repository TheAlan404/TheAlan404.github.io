import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box } from '@mantine/core';
import { PersonalIcons } from "../components/PersonalIcons";
import { Link } from "../components/Link";
import { IconSchool } from "@tabler/icons-react";
import { About } from "./About";
import { EasterEgg } from "../components/EasterEgg";

export const Hero = () => {
    return (
        <Stack>
            <Stack gap={0} align="center" w="100%">
                <Space h="xl" />
                <Stack align="center">
                    <Group align="center">
                        <Text span fz={22}>✨</Text>
                        <Title>deniz.blue</Title>
                        <Text span fz={22}>🌸</Text>
                    </Group>
                    <PersonalIcons />
                    <Group gap={5} align="center">
                        {["0.1em", "0.3em", "1em", null, "1em", "0.3em", "0.1em"].map((w, i) => (
                            w ? (
                                <Divider
                                    w={w}
                                    key={i}
                                />
                            ) : (
                                <Text span key={i} fz="sm" style={{ top: "-0.05em", position: "relative" }}>
                                    ☆
                                </Text>
                            )
                        ))}
                    </Group>
                </Stack>

                <Space h="lg" />

                <Stack>
                    <Text span>
                        <Text span>
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
                            {", "}
                        </Text>
                        <Text span>
                            known as
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
                    </Text>

                    <Group gap={5} justify="end">
                        <Text>I'm from</Text>
                        {" "}
                        <Image
                            src="/img/ico/flag_tr.svg"
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
                                    <Stack gap={0}>
                                        <Group gap={7} wrap="nowrap" justify="start">
                                            <Text span fw="bold">Developer</Text>
                                            at
                                            <Link
                                                text="Ulus"
                                                url="https://ulusgroup.org/"
                                                icon={<Image
                                                    src="/img/ico/ulus_icon.ico"
                                                    w="1.5em"
                                                    h="1.5em"
                                                />}
                                            />
                                        </Group>
                                        <Text c="dimmed" fz="xs">
                                            a turkish news agency
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item>
                                    <Stack gap={0}>
                                        <Group gap={7} wrap="nowrap" justify="start">
                                            <Text span fw="bold">Coordinator</Text>
                                            at
                                            <Link
                                                text="ModFest"
                                                url="https://modfest.net"
                                                icon={<Image
                                                    src="/img/ico/modfest_icon.svg"
                                                    w="1.5em"
                                                    h="1.5em"
                                                />}
                                            />
                                        </Group>
                                        <Text c="dimmed" fz="xs">
                                            game jams but its minecraft mods
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item>
                                    <Stack gap={0}>
                                        <Group gap={4} justify="start">
                                            ...and a
                                            {" "}
                                            <Text span fw="bold">Technician</Text>
                                            {" "}
                                            at
                                            {" "}
                                            <Text span c="blue.4">my school</Text>
                                            {" "}
                                            <IconSchool />
                                        </Group>
                                        <Text span c="dimmed" fz="xs">(unpaid lmao)</Text>
                                    </Stack>
                                </List.Item>
                            </List>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack align="center" ta="center">
                <About />
                <Space h="20vh" />
                <Box ta="center" w="100%">
                    <EasterEgg />
                </Box>
            </Stack>
        </Stack>
    );
};
