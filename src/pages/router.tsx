import { createHashRouter, RouterProvider } from "react-router-dom"
import { BasePage } from "./BasePage"
import { About } from "./about/About"
import { ProjectsList } from "./projects/ProjectsList"
import { BlogPage } from "./blog/BlogPage"

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
                element: <ProjectsList />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
        ]
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider
            router={routes}
        />
    )
}
