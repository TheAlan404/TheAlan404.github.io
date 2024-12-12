import { IconBrush, IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
import { NavItem } from "./types";
import { ProjectHeaderCompact } from "./components/project/ProjectHeader";
import { DataBlogPosts, DataProjects } from "@/index";

export const navItems: NavItem[] = [
    {
        icon: <IconHome />,
        path: "/",
        label: "Home",
    },
    {
        icon: <IconClipboard />,
        path: "/projects",
        label: "Projects",
        children: Object.entries(DataProjects).sort(([k1, a], [k2, b]) => Number(b.year) - Number(a.year)).map(([id, p]) => ({
            path: `/projects/${id}`,
            label: <ProjectHeaderCompact p={p} />,
        })),
    },
    {
        icon: <IconBrush />,
        path: "/art",
        label: "Art",
    },
    {
        icon: <IconFileText />,
        path: "/blog",
        label: "Blog",
        children: Object.entries(DataBlogPosts).map(([id, post]) => (
            {
                path: `/blog/${id}`,
                label: post.title,
                description: post.desc,
            }
        )),
    },
];
