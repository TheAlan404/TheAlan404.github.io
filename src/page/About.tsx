import { Accordion, ActionIcon, Anchor, Button, Code, Divider, Group, Image, List, Paper, SimpleGrid, Space, Stack, Text, Title, Tooltip } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconBrandReact, IconDeviceDesktop, IconDeviceDesktopCode } from "@tabler/icons-react";
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
import React from "react";
import { IconBooks } from "@tabler/icons-react";
import { IconApps } from "@tabler/icons-react";
import { DiscordSection } from "../features/DiscordSection";
import { FriendLiliana } from "../friends/liliana";

const AboutSection = ({
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
        <Stack w="100%" align="center">
            <Accordion.Item style={{ borderBottom: "unset" }} value={value} w="100%">
                <Accordion.Control w="100%">
                    <Divider
                        w="100%"
                        labelPosition="left"
                        label={(
                            <Group align="center">
                                {icon}
                                <Title order={3}>
                                    {title}
                                </Title>
                            </Group>
                        )}
                    />
                </Accordion.Control>
                <Accordion.Panel>
                    <Stack w="100%" align="center">
                        <Stack w={{
                            base: "100%",
                            xs: "80%",
                        }}>
                            {children}
                        </Stack>
                    </Stack>
                </Accordion.Panel>
            </Accordion.Item>
        </Stack>
    );
}

export const About = () => {
    return (
        <Stack gap="xl" w="100%">
            <Accordion w="100%" multiple defaultValue={["dev", "other"]}>
                <AboutSection
                    value="dev"
                    title="Developer Background"
                    icon={<IconDeviceDesktopCode />}
                >
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
                </AboutSection>

                <AboutSection
                    value="facts"
                    title="Fun facts"
                    icon={<IconBooks />}
                >
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
                </AboutSection>

                <AboutSection
                    value="other"
                    title="Other"
                    icon={<IconApps />}
                >
                    <Stack align="center">
                        <DiscordSection />

                        <Divider
                            w="100%"
                            labelPosition="left"
                            label={"Friends' Websites"}
                        />

                        <SimpleGrid cols={{
                            base: 3,
                            sm: 4,
                        }} spacing={"0.1em"} w="100%">
                            {[
                                <FriendKuylar />,
                                <FriendSkyrina />,
                                <FriendInftord />,
                                <FriendLiliana />,
                            ].map((el, i) => (
                                <Paper
                                    key={i}
                                    withBorder
                                    style={{
                                        aspectRatio: "1/1",
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
                </AboutSection>
            </Accordion>
        </Stack>
    );
};
