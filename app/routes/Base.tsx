import { Box, Stack, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BigButton } from "~/components/base/BigButton";
import { useLocation } from "react-router";
import { Section } from "~/components/ui/Section";
import { PopoutContent } from "~/components/base/PopoutContent";
import { Effects } from "~/components/effects/Effects";
import { NewYearEvent } from "~/components/events/NewYear";

export default function Layout() {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(location.pathname.length > 1);

    return (
        <Box h="100vh">
            <Effects />

            <Stack
                style={{ position: "absolute" }}
                w="100%"
                h="60vh"
                justify="center"
            >
                <NewYearEvent />
            </Stack>

            <Stack
                style={{ position: "absolute" }}
                w="100%"
                h="100vh"
                justify="end"
                pb={{ base: "xs", sm: "md" }}
            >
                <BigButton
                    withHint={!opened}
                    onClick={toggle}
                />
            </Stack>

            <Stack
                style={{ position: "absolute" }}
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
                            style={styles}
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
