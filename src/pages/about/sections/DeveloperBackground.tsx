import { IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandJavascript, IconDeviceDesktopCode } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Group, Image, List, Paper, Stack, Text } from "@mantine/core"
import { IconBrandTypescript } from "@tabler/icons-react"
import { IconBrandRust } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { Link } from "@/src/components/misc/Link"
import { MantineLogo } from "@mantinex/mantine-logo"
import { Section } from "@/src/components/misc/Section"
import { useTranslation } from "react-i18next"

export const DeveloperBackground = () => {
    const [t] = useTranslation();

    return (
        <AboutSection
            value="dev"
            title={t("dev.title")}
            icon={<IconDeviceDesktopCode />}
        >
            <Stack>
                <Section>
                    <Group gap="xs" ta="center" justify="center">
                        <Text span>{t("dev.yearsPrefix")}</Text>
                        <Text span fw="bold">{t("dev.years")}</Text>
                        <Text span>{t("dev.yearsSuffix")}</Text>
                    </Group>
                </Section>
                <Section>
                    <Group grow align="start" gap={0} wrap="nowrap">
                        <Stack align="start" ta="start">
                            <Text span fw="bold">
                                {t("dev.languages")}
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
                                {t("dev.tools")}
                            </Text>
                            <List center className="listAlignEnd">
                                <List.Item icon={<IconBrandReact />}>React</List.Item>
                                <List.Item icon={<IconBrandGit />}>Git</List.Item>
                                <List.Item icon={<IconBrandGithub />}>GitHub</List.Item>
                                <List.Item icon={<IconBrandDocker />}>Docker</List.Item>
                            </List>
                        </Stack>
                    </Group>
                </Section>

                <Section>
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
                </Section>

                <Section>
                    <Stack>
                        <Text>
                            Here's my GitHub activity for some reason:
                        </Text>

                        <Image
                            src="" //"https://ghchart.rshah.org/7048e8/thealan404"
                            w="100%"
                        />

                        <Text>
                            I am open to work/freelance. please hire me
                        </Text>
                    </Stack>
                </Section>
            </Stack>
        </AboutSection>
    )
}
