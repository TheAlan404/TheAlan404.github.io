import { createHashRouter, RouterProvider, useRouteError } from "react-router-dom"
import { BasePage } from "../layout/BasePage"
import { About } from "./about/About"
import { BlogPage } from "./blog/BlogPage"
import { ArtPage } from "./ArtPage"
import { Stack, Text } from "@mantine/core"
import { IconAlertTriangle } from "@tabler/icons-react"
import { ProjectPage } from "./projects/ProjectPage"
import { ProjectsIndex } from "./projects/ProjectsIndex"
import { BlogIndex } from "./blog/BlogIndex"

const ErrorPage = () => {
    const error = useRouteError() as any;

    console.log("Router Error", error);

    return (
        <Stack h="100%" justify="center" align="center" ta="center" c="yellow" mt="md">
            <IconAlertTriangle />

            <Text>
                {error?.error?.toString?.()}
            </Text>
        </Stack>
    )
};

const routes = createHashRouter([
    {
        element: <BasePage />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: "projects",
                element: <ProjectsIndex />,
            },
            {
                path: "projects/:id",
                element: <ProjectPage />,
            },
            {
                path: "blog",
                element: <BlogIndex />,
            },
            {
                path: "blog/:id",
                element: <BlogPage />,
            },
            {
                path: "art",
                element: <ArtPage />,
            },
        ],
        errorElement: <ErrorPage />,
    }
], {
    future: {
        
    },
});

export const AppRouter = () => {
    return (
        <RouterProvider
            router={routes}
        />
    )
}
