import { Accordion, Anchor, Group, List, Stack, Text } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandRust } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { Link } from "../components/Link";
import { IconBrandGit } from "@tabler/icons-react";

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
                            <List.Item>I'm a 12th grade student</List.Item>
                            <List.Item>I have ADHD</List.Item>
                            <List.Item>My favorite fruits are strawberries. 🍓</List.Item>
                            <List.Item>meow</List.Item>
                        </List>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
};
