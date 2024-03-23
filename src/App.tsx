import { AppShell, Burger, Center, Container, Transition, Stack, Text, Divider, Button, Kbd, Image, SimpleGrid, Box, ScrollArea } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHotkeys, useWindowEvent } from '@mantine/hooks';
import React, { useEffect, useMemo } from 'react';
import { NewYearEvent } from "./events/NewYear";
import { ProjectsList } from "./page/ProjectsList";
import { Hero } from "./page/Hero";
import { GodDrinksJava } from "./events/GodDrinksJava";

const App = () => {
    let [newYearEvent, { toggle: toggleNewYear }] = useDisclosure();
    let [mili, { open: openMili }] = useDisclosure();

    useHotkeys([
        ["n", () => toggleNewYear()],
    ])

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

    let playOn = useMemo(() => new Date(new Date().getTime() + 5 * 60 * 1000), [newYearEvent]);

    return (
        <Stack
            align='center'
            style={{ textAlign: "center" }}
            px="sm"
            className="app">

            {newYearEvent && (
                <NewYearEvent
                    playOn={playOn}
                />
            )}

            {mili && (
                <GodDrinksJava />
            )}
            
            <SimpleGrid cols={{
                base: 1,
                md: 2,
            }}>
                <Hero />
                <Box h="100%" visibleFrom="md">
                    <ScrollArea h="100vh">
                        <ProjectsList />
                    </ScrollArea>
                </Box>
                <Box hiddenFrom="md">
                    <ProjectsList />
                </Box>
            </SimpleGrid>
            
            
        </Stack>
    )
}

export default App
