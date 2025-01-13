import {
    RouteConfig,
    index,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./routes/Base.tsx", [
        index("./routes/Index.tsx"),
        route("home", "./routes/Home.tsx"),
        route("projects", "./routes/ProjectIndex.tsx"),
        route("projects/:id", "./routes/ProjectPage.tsx"),
        route("art", "./routes/Art.tsx"),
        route("blog", "./routes/BlogIndex.tsx"),
        route("blog/:id", "./routes/BlogPage.tsx"),
        route("*", "./routes/NotFound.tsx"),
    ])
] satisfies RouteConfig;
