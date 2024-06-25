import { Accordion, ActionIcon, Anchor, Button, Code, Divider, Group, Image, List, Paper, SimpleGrid, Space, Stack, Text, Title, Tooltip, useMantineTheme, useMatches } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconBrandReact, IconDeviceDesktop, IconDeviceDesktopCode } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { Link } from "../components/Link";
import { IconBrandGit } from "@tabler/icons-react";
import { Decor } from "../components/Decor";
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
import { useMediaQuery } from "@mantine/hooks";
import { FriendSophia } from "../friends/sophia";
import { FriendAthenya } from "../friends/ath";
import { FriendAshley } from "../friends/ashley";
import { IconBrandDocker } from "@tabler/icons-react";

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
            <Accordion w="100%" multiple defaultValue={[]}>
                <AboutSection
                    value="dev"
                    title="Developer Background"
                    icon={<IconDeviceDesktopCode />}
                >
                    <Stack>
                        <Text>
                            I've been writing code for about
                            {" "}
                            <Text span fw="bold">5 years</Text>.
                        </Text>
                        <Group grow align="start" gap={0} wrap="nowrap">
                            <Stack align="start" ta="start">
                                <Text span fw="bold">
                                    Languages I'm best at:
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
                                    <List.Item icon={<IconBrandDocker />}>Docker</List.Item>
                                </List>
                            </Stack>
                        </Group>

                        <Text>
                            I am an open-source contributor and maintainer. This website and almost all my projects are free and open source
                        </Text>

                        <Stack gap={0}>
                            <Text>
                                My favorite UI library is
                                {" "}
                                <Link
                                    text="Mantine"
                                    url="https://mantine.dev"
                                    icon={<MantineLogo size={"1em"} type="mark" />}
                                    size="compact-sm"
                                />
                            </Text>
                            <Text c="dimmed">(I can't live without it.)</Text>
                        </Stack>

                        <Text>
                            Here's my GitHub activity for some reason:
                        </Text>

                        <Image
                            src="https://ghchart.rshah.org/7048e8/thealan404"
                            w="100%"
                        />

                        <Text>
                            fun fact i am desperate for a job or freelances rn!!
                        </Text>
                    </Stack>
                </AboutSection>

                <AboutSection
                    value="facts"
                    title="Fun facts"
                    icon={<IconBooks />}
                >
                    <SimpleGrid cols={2}>
                        <Stack gap="xs">
                            <Text fw="bold">Likes</Text>
                            <List ta="start">
                                <List.Item>🍓 strawberries</List.Item>
                                <List.Item>cats (if you couldn't tell)</List.Item>
                                <List.Item>rain</List.Item>
                            </List>
                        </Stack>
                        <Stack gap="xs">
                            <Text fw="bold">Games</Text>
                            <List ta="start">
                                <List.Item>Minecraft</List.Item>
                                <List.Item>osu!</List.Item>
                                <List.Item>for other games I watch no-commentaries</List.Item>
                            </List>
                        </Stack>
                        <Stack gap="xs">
                            <Text fw="bold">neofetch</Text>
                            <List ta="start">
                                <List.Item>CPU: Intel Core i5 M480 @ 2.67GHz</List.Item>
                                <List.Item>RAM: 4 GB (it just like me fr)</List.Item>
                                <List.Item>Phone Model: Samsung Galaxy A13</List.Item>
                            </List>
                        </Stack>
                        <Stack gap="xs">
                            <Text fw="bold">Other</Text>
                            <List ta="start">
                                <List.Item>I have ADHD</List.Item>
                                <List.Item>also autistic</List.Item>
                                <List.Item>also transgender</List.Item>
                                <List.Item>I'm easily startled</List.Item>
                                <List.Item>
                                    <Group wrap="nowrap">
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
                                <List.Item>I believe coding is a form of art</List.Item>
                            </List>
                        </Stack>
                    </SimpleGrid>
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
                                <FriendSophia />,
                                <FriendAthenya />,
                                <FriendAshley />,
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

                        <Text>
                            these are supposed to be custom elements made by them but uhhh
                        </Text>
                    </Stack>
                </AboutSection>
            </Accordion>
        </Stack>
    );
};
