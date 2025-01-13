import { IconBrandAuth0, IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNodejs, IconBrandPrisma, IconBrandVite, IconDeviceDesktopCode, IconExternalLink } from "@tabler/icons-react"
import { Button, Group, Image, List, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { IconBrandTypescript } from "@tabler/icons-react"
import { IconBrandRust } from "@tabler/icons-react"
import { IconBrandReact } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import { useTranslation } from "react-i18next"
import { Section } from "../ui/Section"
import { AboutSection } from "./AboutSection"
import { ComponentType } from "react"

export const DeveloperBackground = () => {
    const [t] = useTranslation();

    return (
        <AboutSection
            value="dev"
            title={t("dev.title")}
            icon={<IconDeviceDesktopCode />}
        >
            <Stack>
                <Button
                    fullWidth
                    variant="light"
                    justify="space-between"
                    leftSection={<IconBrandGithub />}
                    rightSection={<IconExternalLink />}
                    component="a"
                    href="https://github.com/thealan404"
                    target="_blank"
                >
                    Go to my GitHub page
                </Button>

                <Section>
                    <Stack>
                        <Text ta="center" fw="bold">
                            {t("dev.tech")}
                        </Text>
                        <SimpleGrid cols={{ base: 2, md: 3 }} spacing="xs">
                            {([
                                [IconBrandTypescript, "TypeScript"],
                                [IconBrandJavascript, "JavaScript"],
                                [IconBrandReact, "React"],
								[IconBrandNodejs, "NodeJS"],
								[IconBrandVite, "Vite"],
								[IconBrandRust, "Rust"],
								[IconBrandHtml5, "HTML/CSS"],
								[IconBrandCSharp, ".NET 5-8"],
                                [IconBrandGit, "Git"],
                                [IconBrandGithub, "Github Actions"],
                                [IconBrandGithub, "Github"],
                                [IconBrandDocker, "Docker"],
                                [IconBrandMongodb, "MongoDB"],
                                [IconBrandPrisma, "Prisma ORM"],
                                [IconBrandAuth0, "Auth0"],
                            ] as [ComponentType<any>, string][]).map(([Icon, name]) => (
                                <Group gap={4} flex="1" wrap="nowrap" key={name}>
                                    <Icon />
                                    <Text>{name}</Text>
                                </Group>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Section>

                <Section>
                    <Group gap="xs" ta="center" justify="center">
                        <Text span>{t("dev.yearsPrefix")}</Text>
                        <Text span fw="bold">{t("dev.years")}</Text>
                        <Text span>{t("dev.yearsSuffix")}</Text>
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
