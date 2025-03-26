import { Box, Stack, Transition } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Section } from "~/components/ui/Section";

export const PagePopout = ({
    children,
    opened,
}: {
    opened: boolean;
} & PropsWithChildren) => {
    return (
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
                            zIndex: 10,
                        }}
                        w={{ base: "100%", sm: "70%" }}
                        h={{ base: "calc(100% - 40px - 64px)", sm: "80%" }}
                        className="meow"
                    >
                        <Section w="100%" h="100%" p={0}>
                            {children}
                        </Section>
                    </Box>
                )}
            </Transition>
        </Stack>
    );
};
