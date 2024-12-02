import { Stack, Box, ScrollArea, Image, Tooltip, Text, Container, SegmentedControl, Space, Loader, Paper } from '@mantine/core'
import React, { useEffect, useState, useTransition } from 'react';
import { ProjectsList } from "./pages/projects/ProjectsList";
import { GodDrinksJava } from "./features/events/GodDrinksJava";
import { About } from "./pages/about/About";
import { BigButton } from "./pages/BigButton";
import { BlogPage } from "./pages/blog/BlogPage";
import { OnekoBed } from "./features/oneko/OnekoBed";
import { Oneko } from "./features/oneko/Oneko";
import { useTranslation } from "react-i18next";
import { useHotkeys } from "@mantine/hooks";
import { AppRouter } from "./pages/router";
import { Effects } from "./features/effects/Effects";

export type Page = "projects" | "mili" | "about" | "blog";

export const App = () => {
    const [page, setPage] = useState<Page>("about");
    const [isPending, startTransition] = useTransition();
    const { i18n } = useTranslation();

    useHotkeys([
        ["1", () => i18n.changeLanguage("en")],
        ["2", () => i18n.changeLanguage("tr")],
    ])

    return (
        <Box
            className="app"
        >
            <Effects />
            <Oneko />
            <AppRouter />
        </Box>
    )
}

