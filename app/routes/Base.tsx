import { Affix, Box, Stack, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BigButton } from "~/components/base/BigButton";
import { useLocation } from "react-router";
import { Section } from "~/components/ui/Section";
import { PopoutContent } from "~/components/base/PopoutContent";
import { Effects } from "~/components/effects/Effects";
import { NewYearEvent } from "~/components/events/NewYear";
import { SplashText } from "~/components/features/SplashText";
import { LimboPlayer } from "~/components/events/Limbo";

export default function Layout() {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(/* location.pathname.length > 1 */);

    const limbo = location.hash.includes("limbo");

    return (
        <Box h="100dvh">
            <Effects />

            <Stack
                style={{ position: "absolute" }}
                w="100%"
                h="60vh"
                justify="center"
                align="center"
            >
                {limbo && <LimboPlayer />}
            </Stack>

            <Affix w="100%" position={{
                bottom: 20,
            }}>
                <BigButton
                    withHint={!opened}
                    onClick={toggle}
                />
            </Affix>

            <Stack
                style={{ position: "absolute", zIndex: -10 }}
                pt={{ base: "0px", sm: "xl" }}
                align="center"
                className="asdf"
                w="100%"
                h="100%"
            >
                <Transition
                    mounted={opened}
                    transition={"fade-up"}
                    keepMounted
                >
                    {(styles) => (
                        <Box
                            style={{
                                ...styles,
                                zIndex: 1,
                            }}
                            w={{ base: "100%", sm: "70%" }}
                            h={{ base: "90%", sm: "80%" }}
                            className="meow"
                        >
                            <Section w="100%" h="100%" p={0}>
                                <PopoutContent />
                            </Section>
                        </Box>
                    )}
                </Transition>
            </Stack>
        </Box>
    )
};
