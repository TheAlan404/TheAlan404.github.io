import { Stack, SimpleGrid, Box, ScrollArea, Image, Tooltip, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import { ProjectsList } from "./page/ProjectsList";
import { Hero } from "./page/Hero";
import { GodDrinksJava } from "./events/GodDrinksJava";
import { Decor } from "./components/Decor";

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

            {/* Desktop */}
            <SimpleGrid cols={2} w="100%" visibleFrom="md">
                <ScrollArea
                    id="scroller-1"
                    h="100vh"
                    offsetScrollbars
                    className="scrollbarOnLeft"
                >
                    {!mili && <Hero />}
                </ScrollArea>
                <ScrollArea
                    id="scroller-2"
                    h="100vh"
                    offsetScrollbars
                >
                    <ProjectsList />
                </ScrollArea>
            </SimpleGrid>
            
            {/* Mobile */}
            <Box hiddenFrom="md">
                <ScrollArea
                    id="scroller-mobileglobal"
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
