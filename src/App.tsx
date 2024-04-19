import { Stack, SimpleGrid, Box, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import { ProjectsList } from "./page/ProjectsList";
import { Hero } from "./page/Hero";
import { GodDrinksJava } from "./events/GodDrinksJava";

const App = () => {
    let [mili, { open: openMili, close: closeMili }] = useDisclosure();

    useEffect(() => {
        // @ts-ignore
        window.me = "@me";
        // @ts-ignore
        window.world = {
            execute() {
                openMili();
            }
        };
    }, []);

    return (
        <Stack
            align='center'
            style={{ textAlign: "center" }}
            px="sm"
            className="app">

            {mili && (
                <GodDrinksJava close={closeMili} />
            )}

            {/* Desktop */}
            <SimpleGrid cols={2} visibleFrom="md">
                <ScrollArea
                    h="100vh"
                    offsetScrollbars
                    className="scrollbarOnLeft"
                >
                    {!mili && <Hero />}
                </ScrollArea>
                <ScrollArea
                    h="100vh"
                    offsetScrollbars
                >
                    <ProjectsList />
                </ScrollArea>
            </SimpleGrid>
            
            {/* Mobile */}
            <Box hiddenFrom="md">
                <ScrollArea
                    h="100vh"
                    offsetScrollbars
                >
                    {!mili && <Hero />}
                    {mili && <Box h="100vh" />}
                    <ProjectsList />
                </ScrollArea>
            </Box>
        </Stack>
    )
}

export default App
