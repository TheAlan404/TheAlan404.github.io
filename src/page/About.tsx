import { Accordion, ActionIcon, Anchor, Button, Code, Group, Image, List, Space, Stack, Text, Tooltip } from "@mantine/core";
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

export const About = () => {
    return (
        <Stack align="center" w="100%">
            <Accordion w="80%">
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
                            <Group grow align="start" gap={0}>
                                <Stack align="start" ta="start">
                                    <Text span fw="bold">
                                        Languages I'm good at:
                                    </Text>
                                    <List center withPadding>
                                        <List.Item icon={<IconBrandJavascript />}>JavaScript</List.Item>
                                        <List.Item icon={<IconBrandCSharp />}>C#</List.Item>
                                        <List.Item icon={<IconBrandRust />}>Rust</List.Item>
                                    </List>
                                </Stack>
                                <Stack align="end" ta="end">
                                    <Text span fw="bold">
                                        And the technologies I use:
                                    </Text>
                                    <List center withPadding styles={{
                                        itemWrapper: {
                                            flexDirection: "row-reverse"
                                        },
                                        itemIcon: {
                                            marginLeft: "var(--_item-icon-mr,var(--mantine-spacing-sm))",
                                            marginRight: "var(--_item-icon-ml,0)",
                                        },
                                    }}>
                                        <List.Item icon={<IconBrandReact />}>React</List.Item>
                                        <List.Item icon={<IconBrandGit />}>Git</List.Item>
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
                        </List>
                        <Space h="5em" />
                        <Decor
                            img="toro.gif"
                            style={{
                                bottom: 0,
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
                        <Stack align="start">
                            <Stack align="end">
                                <Link
                                    text="Join My Discord!"
                                    url={`https://discord.gg/${DISCORD_INVITE}`}
                                    icon={<IconBrandDiscord />}
                                    variant="light"
                                />
                            </Stack>

                            <Text>Thanks to:</Text>
                            <List>
                                <List.Item>nokia for giving oneko an umbrella</List.Item>
                                <List.Item>kuylar for existing i guess</List.Item>
                                <List.Item>all my friends for being with me {"<3"}</List.Item>
                            </List>
                        </Stack>

                        <Space h="5em" />

                        <Decor
                            img="puppyhappy.gif"
                            style={{
                                bottom: 0,
                                width: "2em",
                            }}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
};
