import { Arts } from "@/Arts";
import { Anchor, Box, Flex, Grid, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

export const OCArtModal = () => {
    return (
        <Stack w="100%">
            <Box style={{ columnCount: 2, columnGap: "var(--mantine-spacing-md)" }}>
                {Arts.map((art, i) => (
                    <Box key={i} display="inline-block" style={{ lineHeight: 1 }}>
                        <Stack mb="md" p="xs" gap="xs" bg="dark">
                            <Image
                                src={art.src}
                                fit="contain"
                            />

                            <Group justify="end" ta="end" gap={4}>
                                <Text span inline c="dimmed">drawn by</Text>
                                <Anchor
                                    href={art.author.link}
                                    target="_blank"
                                    inline
                                >
                                    {art.author.name}
                                </Anchor>
                            </Group>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </Stack>
    );
};
