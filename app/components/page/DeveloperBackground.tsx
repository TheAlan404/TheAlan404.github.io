import { IconBrandAuth0, IconBrandCSharp, IconBrandDocker, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNodejs, IconBrandPrisma, IconBrandVite, IconDeviceDesktopCode, IconExternalLink, IconSql, TablerIcon } from "@tabler/icons-react"
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
        <Stack align="center" gap="xs">
            <Divider
                label="Stuff I use"
                w="80%"
            />

            <IconsGroup
                data={[
                    [IconBrandTypescript, "TypeScript"],
                    [IconBrandJavascript, "JavaScript"],
                    [IconBrandCSharp, ".NET 5-8"],
                    [IconBrandRust, "Rust"],
                    [IconBrandHtml5, "HTML/CSS"],
                    [IconBrandReact, "React"],
                    [IconBrandNodejs, "NodeJS"],
                    [IconBrandVite, "Vite"],
                    [IconBrandMongodb, "MongoDB"],
                    [IconBrandPrisma, "Prisma ORM"],
                    [IconBrandGit, "Git"],
                    [IconBrandGithub, "Github Actions"],
                    [IconBrandGithub, "Github"],
                    [IconBrandDocker, "Docker"],
                    [IconBrandAuth0, "Auth0"],
                ]}
            />

            <Divider
                w="80%"
            />

            <Text ta="center">
                I like writing code. Been doing it for like 6 years. Open-source ftw.
            </Text>

            {/* <Image
                src="https://github-readme-activity-graph.vercel.app/graph?username=TheAlan404&theme=react-dark"
                w="100%"
            /> */}
        </Stack>
    );
}


export const IconsGroup = ({
    data,
}: {
    data: [TablerIcon, string][];
}) => {
    return (
        <Group justify="center" gap={0} w="100%">
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

