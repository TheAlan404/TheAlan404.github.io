import { Stack, Box, ScrollArea, Image, Tooltip, Text, Container, SegmentedControl, Space } from '@mantine/core'
import { useEffect, useState } from 'react';
import { ProjectsList } from "./pages/projects/ProjectsList";
import { GodDrinksJava } from "./features/events/GodDrinksJava";
import { About } from "./pages/about/About";
import { Header } from "./pages/Header";
import { BlogPage } from "./pages/blog/BlogPage";

export type Page = "projects" | "mili" | "about" | "blog";

const App = () => {
    const [page, setPage] = useState<Page>("about");

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
        <Stack
            align='center'
            style={{ textAlign: "center" }}
            className="app">
            
            <Box>
                <ScrollArea
                    id="scroller-global"
                    h="100vh"
                    w="100vw"
                    offsetScrollbars
                >
                    <Container size="sm">
                        {page == "mili" ? (
                            <>
                                <GodDrinksJava close={() => setPage("projects")} />
                                <Box h="100vh" />
                            </>
                        ) : (
                            <Stack>
                                <Header />

                                <Stack gap={0}>
                                    <SegmentedControl
                                        fullWidth
                                        data={[
                                            { value: "about", label: "About" },
                                            { value: "projects", label: "Projects" },
                                            { value: "blog", label: "Blog" },
                                        ]}
                                        onChange={(v) => setPage(v as Page)}
                                    />
                                </Stack>

                                {page == "projects" && (
                                    <ProjectsList />
                                )}

                                {page == "about" && (
                                    <About />
                                )}

                                {page == "blog" && (
                                    <BlogPage />
                                )}
                                
                                <Space h="30vh" />
                            </Stack>
                        )}
                    </Container>
                </ScrollArea>
            </Box>

            <Box
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
                        src="/img/cats/kuylars.png"
                        draggable={false}
                    />
                </Tooltip>
            </Box>
        </Stack>
    )
}

export default App
