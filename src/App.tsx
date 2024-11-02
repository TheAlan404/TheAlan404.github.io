import { Stack, Box, ScrollArea, Image, Tooltip, Text, Container, SegmentedControl, Space, Loader, Paper } from '@mantine/core'
import React, { useEffect, useState, useTransition } from 'react';
import { ProjectsList } from "./pages/projects/ProjectsList";
import { GodDrinksJava } from "./features/events/GodDrinksJava";
import { About } from "./pages/about/About";
import { Header } from "./pages/Header";
import { BlogPage } from "./pages/blog/BlogPage";
import { OnekoBed } from "./features/oneko/OnekoBed";
import { Oneko } from "./features/oneko/Oneko";
import { useTranslation } from "react-i18next";
import { useHotkeys } from "@mantine/hooks";
import { BirthdayEvent } from "./features/events/BirthdayEvent";

export type Page = "projects" | "mili" | "about" | "blog";

export const App = () => {
    const [page, setPage] = useState<Page>("about");
    const [isPending, startTransition] = useTransition();
    const { i18n } = useTranslation();

    useHotkeys([
        ["1", () => i18n.changeLanguage("en")],
        ["2", () => i18n.changeLanguage("tr")],
    ])

    useEffect(() => {
        // @ts-ignore
        window.me = "@me";
        // @ts-ignore
        window.world = {
            execute() {
                setPage("mili");
            }
        };
    }, []);

    return (
        <Box
            className="app"
        >
            <Oneko />
            <Container size="sm">
                {page == "mili" ? (
                    <Box h="100vh">
                        <GodDrinksJava close={() => setPage("about")} />
                    </Box>
                ) : (
                    <Stack>
                        <Stack gap={0}>
                            {new Date().getTime() < new Date(2024, 10, 4).getTime() && <BirthdayEvent />}

                            <Header />

                            <Stack gap={0}>
                                <OnekoBed id="fallback" offset={{ x: 20, y: -12 }} />
                                <Paper withBorder style={{ background: "unset" }}>
                                    <SegmentedControl
                                        fullWidth
                                        data={[
                                            { value: "about", label: "About" },
                                            { value: "projects", label: "Projects" },
                                            { value: "blog", label: "Blog" },
                                        ]}
                                        withItemsBorders={false}
                                        defaultValue={page}
                                        onChange={(v) => {
                                            startTransition(() => {
                                                setPage(v as Page);
                                            });
                                        }}
                                    />
                                </Paper>
                            </Stack>
                        </Stack>

                        {isPending ? (
                            <Stack align="center" pt="md">
                                <Loader />
                            </Stack>
                        ) : (
                            <Stack>
                                {page == "projects" && (
                                    <ProjectsList />
                                )}

                                {page == "about" && (
                                    <About />
                                )}

                                {page == "blog" && (
                                    <BlogPage />
                                )}
                            </Stack>
                        )}

                        <Stack h="100vh" justify="end">
                        </Stack>
                    </Stack>
                )}
            </Container>

            {/* <Box
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 30,
                    width: "8px",
                    height: "8px",
                    zIndex: "999",
                }}
            >
                <Tooltip label={(
                    <Text fz={10}>:3</Text>
                )} withArrow>
                    <Image
                        src="/assets/img/cats/kuylars.png"
                        draggable={false}
                    />
                </Tooltip>
            </Box> */}
        </Box>
    )
}

