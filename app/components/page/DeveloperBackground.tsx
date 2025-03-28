import { IconBrandAuth0, IconBrandCSharp, IconBrandCss3, IconBrandDocker, IconBrandFirefox, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNodejs, IconBrandPrisma, IconBrandVite, IconBrandVscode, IconDeviceDesktopCode, IconDots, IconExternalLink, IconSql, TablerIcon } from "@tabler/icons-react"
import { Anchor, Box, Button, Divider, Group, Image, List, Paper, SimpleGrid, Stack, Text, Tooltip } from "@mantine/core"
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
        // <Stack align="center" gap="xs">


        <Stack gap={0}>
            <IconsGroup
                data={[
                    [IconBrandTypescript, "TypeScript"],
                    [IconBrandReact, "React"],
                    [IconBrandCSharp, ".NET 5-8"],
                    [IconBrandHtml5, "HTML"],
                    [IconBrandCss3, "CSS"],
                    [IconBrandJavascript, "JavaScript"],
                    [IconBrandRust, "Rust"],
                ]}
            />

            <Group align="center" gap={8}>
                <IconsGroup
                    data={[
                        [IconBrandVite, "Vite"],
                        [IconBrandMongodb, "MongoDB"],
                        [IconBrandPrisma, "Prisma ORM"],
                        [IconBrandAuth0, "Auth0"],
                        [IconBrandNodejs, "NodeJS"],
                    ]}
                />

                <Text inline span h={24} c="dimmed">•</Text>

                <IconsGroup
                    data={[
                        [IconBrandFirefox, "Firefox"],
                        [IconBrandVscode, "vscode"],
                        [IconBrandGit, "Git"],
                        [IconBrandGithub, "Github"],
                        [IconBrandDocker, "Docker"],
                    ]}
                />
            </Group>
        </Stack>

        /* <Divider
            label="Stuff I want to learn"
            w="80%"
        /> */

        /* <Divider
            w="80%"
        />

        <Text ta="center">
            I like writing code. Been doing it for like 6 years. Open-source ftw.
        </Text> */

        /* <Image
            src="https://github-readme-activity-graph.vercel.app/graph?username=TheAlan404&theme=react-dark"
            w="100%"
        /> */
        /* </Stack> */
    );
}


export const IconsGroup = ({
    data,
}: {
    data: [TablerIcon, string][];
}) => {
    return (
        <Group justify="center" gap={0}>
            {data.map(([Icon, tooltip], i) => (
                <Tooltip label={tooltip} disabled={!tooltip}>
                    <Box>
                        <Icon />
                    </Box>
                </Tooltip>
            ))}
        </Group>
    );
};

