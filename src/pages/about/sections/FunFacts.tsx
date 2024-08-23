import { IconBooks } from "@tabler/icons-react"
import { AboutSection } from "../AboutSection"
import { Group, Image, List, SimpleGrid, Stack, Text, Tooltip } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"

export const FunFacts = () => {
    return (
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
                        <List.Item>I use she/her pronouns</List.Item>
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
                        <List.Item>I also believe people should think on their own</List.Item>
                    </List>
                </Stack>
            </SimpleGrid>
        </AboutSection>
    )
}
