import { Anchor, Divider, SimpleGrid, Stack, Text } from "@mantine/core";

export const Friends = () => {
    return (
        <Stack align="center" w="100%">
            <Divider
                label="Friends!"
                w="80%"
            />

            <Stack>
                <SimpleGrid cols={3} ta="center" spacing="xs" verticalSpacing="xs" className="variant-light-children">
                    <Anchor href="https://me.devrals.xyz/">
                        DevRalsei <Text component="sup" c="dimmed" fz="xs">1</Text>
                    </Anchor>
                    <Anchor href="https://kuylar.dev/">
                        kuylar
                    </Anchor>
                    <Anchor href="https://skyrina.dev/">
                        Sky
                    </Anchor>
                    <Anchor href="https://www.dsezer.dev/">
                        dsezer
                    </Anchor>
                    <Anchor href="https://ctrl-c.club/~ath/">
                        staphyle
                    </Anchor>
                </SimpleGrid>

                <Text fz="sm" c="dimmed">
                    <Text inherit component="sup" fz="xs">1</Text>
                    <Text inherit span>: Check their website just before 11th of April!</Text>
                </Text>
            </Stack>
        </Stack>
    )
};
