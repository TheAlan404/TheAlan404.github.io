import { Divider, Stack, SimpleGrid, Anchor, Text, Group, Image } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { TRFlagSvg } from "../TRFlagSvg";

export const AboutMe = () => {
    return (
        <Stack align="center" w="100%">
            <Divider
                label="About me!"
                w="80%"
            />

            <Stack gap={0} align="center">
                <Group gap={4}>
                    <Text span>I'm from</Text>
                    <TRFlagSvg height="1.5rem" />
                    <Text span fw="bold">Turkey / Türkiye</Text>
                    <Text span c="dimmed">(UTC+3)</Text>
                </Group>

                <Group gap="xs" ta="center" justify="center" align="center">
                    <Text span>I use</Text>
                    <Anchor
                        href="https://mantine.dev"
                        c="blue"
                        h="1.5rem"
                    >
                        <MantineLogo height="1.5rem" />
                    </Anchor>
                    <Text span>- a really good UI library</Text>
                </Group>

                <Text>
                    I like 🐈 cats, 🍓 strawberries and ☔ rain.
                </Text>

                <Group gap={4} ta="center" justify="center" align="center">
                    <Text span>
                        I mostly play
                    </Text>
                    <Image
                        src="/assets/img/ico/osu.png"
                        h="1.5rem"
                        w="1.5rem"
                        display="inline"
                        style={{ imageRendering: "auto" }}
                    />
                    <Text span>
                        osu! and
                    </Text>
                    <Image
                        src="/assets/img/ico/minecraft.webp"
                        h="1.2rem"
                        w="1.2rem"
                        display="inline"
                        style={{ imageRendering: "auto" }}
                    />
                    <Text span>
                        Minecraft.
                    </Text>
                </Group>

                {/* im 19 */}

                {/* osu mc */}
            </Stack>
        </Stack>
    );
};
