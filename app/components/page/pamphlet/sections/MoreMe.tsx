import { Accordion, Anchor, Box, Button, Collapse, Divider, Group, Image, ScrollArea, SimpleGrid, Stack, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { modals } from "@mantine/modals"
import { IconBrush, IconChevronCompactDown, IconChevronDown, IconChevronRight } from "@tabler/icons-react"
import { OCArtModal } from "~/components/modals/OCArtModal"

export const MoreMe = () => {
    return (
        <Stack align="center" w="100%" px="sm">
            <Divider
                w="80%"
                label="More me!"
            />

            <SimpleGrid cols={2} w="100%" px="xl">
                <Button
                    variant="light"
                    onClick={() => modals.open({
                        title: "OC Art",
                        size: "xl",
                        removeScrollProps: { removeScrollBar: false },
                        scrollAreaComponent: ScrollArea.Autosize,
                        children: (
                            <OCArtModal />
                        ),
                    })}
                    leftSection={<IconBrush />}
                >
                    OC Art
                </Button>

                <Button
                    variant="light"
                    onClick={() => modals.open({
                        title: "denizcore",
                        size: "xl",
                        removeScrollProps: { removeScrollBar: false },
                        scrollAreaComponent: ScrollArea.Autosize,
                        children: (
                            <Image
                                src="/assets/img/other/denizcore.png"
                            />
                        ),
                    })}
                >
                    denizcore
                </Button>
            </SimpleGrid>

            <Stack w="100%" align="start" gap={0} px="xl">
                <Text fw="bold" fz="xs" pl={28}>I PREVIOUSLY WORKED AT</Text>
                <Stack gap="xs">
                    <Group gap={4} wrap="nowrap" align="start">
                        <Image
                            src="/assets/img/ico/lodestone.png"
                            w={24}
                            h={24}
                        />
                        <Stack gap={0}>
                            <Group>
                                <Anchor
                                    c="unset"
                                    href="https://lodepale.com"
                                    target="_blank"
                                >
                                    Lodepale Studios
                                </Anchor>
                            </Group>
                            <Text fz="xs" c="dimmed" inline>
                                minecraft bedrock addons
                            </Text>
                        </Stack>
                    </Group>
                    <Group gap={4} wrap="nowrap" align="start">
                        <Image
                            src="/assets/img/ico/modfest_icon.svg"
                            w={24}
                            h={24}
                        />
                        <Stack gap={0}>
                            <Group>
                                <Anchor
                                    c="unset"
                                    href="https://modfest.net"
                                    target="_blank"
                                >
                                    ModFest
                                </Anchor>
                            </Group>
                            <Text fz="xs" c="dimmed" inline>
                                game jams but its minecraft mods
                            </Text>
                        </Stack>
                    </Group>
                    <Group gap={4} wrap="nowrap" align="start">
                        <Image
                            src="/assets/img/ico/ulus_icon.ico"
                            w={24}
                            h={24}
                        />
                        <Stack gap={0}>
                            <Group>
                                <Text>
                                    Ulus Medya
                                </Text>
                            </Group>
                            <Text fz="xs" c="dimmed" inline>
                                media agency
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Stack>
        </Stack>
    )
}
