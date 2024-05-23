import { Group, Stack, Title, Text, Space, Tooltip, Image, List, Divider, Box } from '@mantine/core';
import { PersonalIcons } from "../components/PersonalIcons";
import { Link } from "../components/Link";
import { IconSchool } from "@tabler/icons-react";
import { About } from "./About";
import { EasterEgg } from "../components/EasterEgg";
import { Decor } from "../components/Decor";
import { OnekoInitialPosition } from "../components/OnekoInitialPosition";

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
                    <Group gap={5} align="center" pb="sm">
                        {["0.2em", "0.4em", "1em", null, "1em", "0.4em", "0.2em"].map((w, i) => (
                            w ? (
                                <Divider
                                    w={w}
                                    key={i}
                                />
                            ) : (
                                <Text className="rainbowText" span key={i} fz="sm" style={{ top: "-0.05em", position: "relative" }}>
                                    ☆
                                </Text>
                            )
                        ))}
                    </Group>
                </Stack>

                <Stack>
                    <Stack gap={0}>
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
                                    Gökçe
                                    {" "}
                                    <Tooltip label="turkish for sea">
                                        <Text span inherit>
                                            Deniz
                                        </Text>
                                    </Tooltip>
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
                                <Text span>
                                    <OnekoInitialPosition />
                                    online.
                                </Text>
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
                            <Text c="dimmed" fs="italic">fun fact: this website has weather! (check bottom right)</Text>
                        </Group>
                    </Stack>

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
                        <Tooltip label="or, UTC+3" withArrow>
                            <Text span c="dimmed">
                                (GMT+3)
                            </Text>
                        </Tooltip>
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
                                        <Group gap={7} wrap="nowrap" justify="start">
                                            <Text span fw="bold">Developer</Text>
                                            at
                                            <Link
                                                text="Ulus"
                                                //url="https://ulusgroup.org/"
                                                tooltip="Website WIP"
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
