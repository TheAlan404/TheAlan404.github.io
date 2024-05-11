import { Accordion, ActionIcon, Anchor, Button, Code, Divider, Group, Image, List, Paper, SimpleGrid, Space, Stack, Text, Tooltip } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { Link } from "../components/Link";
import { IconBrandGit } from "@tabler/icons-react";
import { Decor } from "../components/Decor";
import { IconBrandDiscord } from "@tabler/icons-react";
import { DISCORD_INVITE } from "../data";
import { IconExternalLink } from "@tabler/icons-react";
import { IconInfoCircle } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { FriendKuylar } from "../friends/kuylar";
import { FriendSkyrina } from "../friends/skyrina";
import { FriendInftord } from "../friends/inftord";

export const About = () => {
    return (
        <Stack align="center" w="100%">
            <Accordion w={{
                base: "100%",
                xs: "80%",
            }}>
                <Accordion.Item value="dev">
                    <Accordion.Control>
                        Developer Background
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Text>
                                I am a
                                {" "}
                                <Text span fw="bold">backend</Text>
                                {" "}
                                oriented
                                {" "}
                                <Text span c="indigo">full stack developer</Text>.
                            </Text>
                            <Stack gap={0}>
                                <Text>
                                    I only do frontend because
                                    {" "}
                                    <Link
                                        text="Mantine"
                                        url="https://mantine.dev"
                                        icon={<MantineLogo size={"1em"} type="mark" />}
                                        size="compact-sm"
                                    />
                                    {" "}
                                    exists
                                </Text>
                                <Text c="dimmed">(otherwise I would just stick to backend)</Text>
                            </Stack>
                            
                            <Text>
                                I've been writing code for about
                                {" "}
                                <Text span fw="bold">5 years</Text>.
                            </Text>
                            <Group grow align="start" gap={0} wrap="nowrap">
                                <Stack align="start" ta="start">
                                    <Text span fw="bold">
                                        Languages I'm good at:
                                    </Text>
                                    <List center withPadding>
                                        <List.Item icon={<IconBrandJavascript />}>JavaScript</List.Item>
                                        <List.Item icon={<IconBrandTypescript />}>TypeScript</List.Item>
                                        <List.Item icon={<IconBrandCSharp />}>C#</List.Item>
                                        <List.Item icon={<IconBrandRust />}>Rust</List.Item>
                                    </List>
                                </Stack>
                                <Stack align="end" ta="end">
                                    <Text span fw="bold">
                                        And the technologies I use:
                                    </Text>
                                    <List center withPadding className="listAlignEnd">
                                        <List.Item icon={<IconBrandReact />}>React</List.Item>
                                        <List.Item icon={<IconBrandGit />}>Git</List.Item>
                                        <List.Item icon={<IconBrandGithub />}>GitHub</List.Item>
                                    </List>
                                </Stack>
                            </Group>
                            <Text>
                                I hope I can land an internship or sorts. Or a job...
                            </Text>
                            <Text span c="dimmed">
                                (please send me an email)
                            </Text>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="personal">
                    <Accordion.Control>
                        Fun facts about me
                    </Accordion.Control>
                    <Accordion.Panel>
                        <List ta="start" withPadding>
                            <List.Item>My favorite fruits are strawberries. 🍓</List.Item>
                            <List.Item>I LOVE rain!</List.Item>
                            <List.Item>I like cats</List.Item>
                            <List.Item>I have ADHD</List.Item>
                            <List.Item>im a catgirl meowmeo</List.Item>
                            <List.Item>I play Minecraft and osu!, other than that I watch no commentaries of games :3</List.Item>
                            <List.Item>I love Portal, Undertale/Deltatune, Splatoon, Oneshot, FNAF (only the lore), Mario stuff, etc..</List.Item>
                            <List.Item>
                                <Group gap={5}>
                                    <Text>
                                        I have ADHD
                                    </Text>
                                    <Tooltip
                                        withArrow
                                        label={(
                                            <Image
                                                src="/img/other/adhd.png"
                                            />
                                        )}
                                    >
                                        <IconInfoCircle size="0.8em" />
                                    </Tooltip>
                                </Group>
                            </List.Item>
                            <List.Item>I'm a 12th grade student</List.Item>
                            <List.Item>
                                <Group align="center">
                                    <Text>hexagons are the bestagons</Text>
                                    <ActionIcon
                                        variant="subtle"
                                        component="a"
                                        href="https://www.youtube.com/watch?v=thOifuHs6eY"
                                        target="_blank"
                                    >
                                        <IconExternalLink />
                                    </ActionIcon>
                                </Group>
                            </List.Item>
                            <List.Item>I'm easily startled</List.Item>
                        </List>
                        <Space h="3em" />
                        <Decor
                            img="toro.gif"
                            style={{
                                bottom: "-15px",
                                width: "2em",
                            }}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="friends">
                    <Accordion.Control>
                        Other
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Stack align="center">
                            <Group justify="space-between" w="100%">
                                <Image
                                    src="/img/cats/emir.gif"
                                    draggable={false}
                                    w="3em"
                                />
                                <Link
                                    text="Join My Discord!"
                                    url={`https://discord.gg/${DISCORD_INVITE}`}
                                    icon={<IconBrandDiscord />}
                                    variant="light"
                                />
                            </Group>

                            <Divider
                                w="100%"
                                labelPosition="left"
                                label={"Friends' Websites"}
                            />

                            <SimpleGrid cols={{
                                base: 1,
                                xs: 2,
                                sm: 3,
                            }} spacing={"0.1em"} w="100%">
                                {[
                                    <FriendKuylar />,
                                    <FriendSkyrina />,
                                    <FriendInftord />,
                                ].map((el, i) => (
                                    <Paper
                                        key={i}
                                        withBorder
                                        style={{
                                            aspectRatio: "3/4",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {el}
                                    </Paper>
                                ))}
                            </SimpleGrid>

                            <Divider
                                w="100%"
                                labelPosition="right"
                                label={"Credits"}
                            />

                            <Stack ta="end" align="end" w="100%">
                                <Stack gap={0}>
                                    <Tooltip label={"discord @nokia6600"}>
                                        <Text fw="bold">nokia</Text>
                                    </Tooltip>

                                    <Text>for giving an umbrella to oneko</Text>
                                </Stack>
                                <Stack gap={0}>
                                    <Tooltip label={"dimden.dev"}>
                                        <Text fw="bold">dimden</Text>
                                    </Tooltip>

                                    <Text>
                                        for <Code>rain.mp3</Code>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Decor
                            img="oneko-circling.gif"
                            style={{
                                top: "-5em",
                                left: "2em",
                                width: "3em",
                            }}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
};
