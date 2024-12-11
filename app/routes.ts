import {
    RouteConfig,
    index,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./routes/Base.tsx", [
        index("./routes/Home.tsx"),
        route("projects", "./routes/ProjectsIndex.tsx"),
    ])
] satisfies RouteConfig;
