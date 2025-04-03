import { Anchor, Box, Divider, Grid, Group, Image, SimpleGrid, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export const Friends = () => {
    return (
        <Stack align="center" w="100%">
            <Divider
                label="Friends!"
                w="80%"
            />

            <Stack>
                <Grid columns={3} gutter="xs">
                    <Grid.Col span={2}>
                        <Group h="100%" gap={4} align="center" justify="end" wrap="nowrap" ta="end">
                            <Stack gap={0} align="end">
                                <Text inline span>
                                    ✨ Hosting Provider
                                </Text>
                                <Text span c="dimmed" fz="xs">
                                    lifesaver tysm
                                </Text>
                            </Stack>
                            <IconArrowNarrowRight />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Stack justify="center" h="100%">
                            <Anchor
                                href="https://armagan.rest/"
                                className="friend"
                                ta="center"
                            >
                                Armağan
                            </Anchor>
                        </Stack>
                    </Grid.Col>
                </Grid>

                <SimpleGrid cols={3} ta="center" spacing="xs" verticalSpacing="xs">
                    <Anchor href="https://me.devrals.xyz/" className="friend">
                        DevRalsei <Text component="sup" c="dimmed" fz="xs">1</Text>
                    </Anchor>
                    <Box className="friend" pos="relative">
                        <Anchor href="https://kuylar.dev/" w="100%" h="100%">
                            kuylar
                        </Anchor>
                        <Image
                            src="/assets/img/trinkets/kuylars.png"
                            pos="absolute"
                            style={{ bottom: 0, right: 6 }}
                            w={8}
                            h={8}
                        />
                    </Box>
                    <Anchor href="https://skyrina.dev/" className="friend">
                        Sky
                    </Anchor>
                    <Anchor href="https://www.dsezer.dev/" className="friend">
                        dsezer
                    </Anchor>
                    <Anchor href="https://ctrl-c.club/~ath/" className="friend">
                        staphyle
                    </Anchor>
                    <UnstyledButton
                        w="100%"
                        h="100%"
                        ta="center"
                        onClick={() => {
                            new Audio("/assets/audio/metalpipe.mp3").play();
                        }}
                    >
                        🔧
                    </UnstyledButton>
                </SimpleGrid>

                <Text fz="sm" c="dimmed">
                    <Text inherit component="sup" fz="xs">1</Text>
                    <Text inherit span>: Check their website just before 11th of April!</Text>
                </Text>
            </Stack>
        </Stack>
    )
};
