import { Affix, Box, Stack, Transition } from "@mantine/core";
import { useLocation, useNavigate } from "react-router";
import { Section } from "~/components/ui/Section";
import { PopoutContent } from "~/components/base/PopoutContent";
import { PageBackground } from "~/components/features/bg/PageBackground";
import { PageButtons } from "./PageButtons";

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    const opened = location.pathname.length > 1;

    return (
        <Box h="100dvh">
            <PageBackground />

            {/* <Stack
                style={{ position: "absolute" }}
                w="100%"
                h="60vh"
                justify="center"
                align="center"
            >
                <SplashText />
            </Stack> */}

            <Affix w="100%" position={{
                bottom: 20,
            }}>
                <Stack ta="center" align="center">
                    <PageButtons />
                </Stack>
            </Affix>

            <Stack
                style={{ position: "absolute", pointerEvents: "none" }}
                pt={{ base: "0px", sm: "xl" }}
                align="center"
                w="100%"
                h="100%"
            >
                <Transition
                    mounted={opened}
                    transition={"fade-up"}
                    keepMounted
                    duration={200}
                >
                    {(styles) => (
                        <Box
                            style={{
                                ...styles,
                                pointerEvents: "auto",
                            }}
                            w={{ base: "100%", sm: "70%" }}
                            h={{ base: "calc(100% - 40px - 64px)", sm: "80%" }}
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
