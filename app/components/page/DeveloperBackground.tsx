import { IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandJavascript, IconDeviceDesktopCode } from "@tabler/icons-react"
import { Group, Image, List, Paper, Stack, Text } from "@mantine/core"
import { IconBrandTypescript } from "@tabler/icons-react"
import { IconBrandRust } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import { useTranslation } from "react-i18next"
import { Section } from "../ui/Section"
import { AboutSection } from "./AboutSection"

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
                            I am an open-source contributor and maintainer. This website and almost all my projects are free and open source.
                        </Text>
                    </Stack>
                </Section>

                <Section>
                    <Stack>
                        <Text>
                            Here's my GitHub activity for some reason:
                        </Text>

                        <Image
                            src="https://ghchart.rshah.org/7048e8/thealan404"
                            w="100%"
                        />
                    </Stack>
                </Section>
            </Stack>
        </AboutSection>
    )
}
