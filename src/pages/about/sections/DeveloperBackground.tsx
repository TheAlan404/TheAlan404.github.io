import { IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandJavascript, IconDeviceDesktopCode } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Group, Image, List, Paper, Stack, Text } from "@mantine/core"
import { IconBrandTypescript } from "@tabler/icons-react"
import { IconBrandRust } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { Link } from "@/src/components/misc/Link"
import { MantineLogo } from "@mantinex/mantine-logo"

export const DeveloperBackground = () => {
    return (
        <AboutSection
            value="dev"
            title="Developer Background"
            icon={<IconDeviceDesktopCode />}
        >
            <Stack>
                <Paper p="sm">
                    <Text>
                        I've been writing code for about
                        {" "}
                        <Text span fw="bold">5 years</Text>.
                    </Text>
                </Paper>
                <Paper p="sm">
                    <Group grow align="start" gap={0} wrap="nowrap">
                        <Stack align="start" ta="start">
                            <Text span fw="bold">
                                Languages I'm best at:
                            </Text>
                            <List center>
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
                            <List center className="listAlignEnd">
                                <List.Item icon={<IconBrandReact />}>React</List.Item>
                                <List.Item icon={<IconBrandGit />}>Git</List.Item>
                                <List.Item icon={<IconBrandGithub />}>GitHub</List.Item>
                                <List.Item icon={<IconBrandDocker />}>Docker</List.Item>
                            </List>
                        </Stack>
                    </Group>
                </Paper>

                <Paper p="sm">
                    <Stack>
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
                    </Stack>
                </Paper>

                <Paper p="sm">
                    <Stack>
                        <Text>
                            Here's my GitHub activity for some reason:
                        </Text>

                        <Image
                            src="https://ghchart.rshah.org/7048e8/thealan404"
                            w="100%"
                        />

                        <Text>
                            I am open to work/freelance. please hire me
                        </Text>
                    </Stack>
                </Paper>
            </Stack>
        </AboutSection>
    )
}
