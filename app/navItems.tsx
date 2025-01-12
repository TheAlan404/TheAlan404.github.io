import { IconBrush, IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
import { NavItem, Project } from "./types";
import { ProjectHeaderCompact } from "./components/project/ProjectHeader";
import { DataBlogPosts, DataProjects } from "@/index";

const projectsNavItems: NavItem[] = [
    {
        type: "title",
        title: "Projects",
    }
];

for(let year of [...new Set(Object.values(DataProjects).map(x => x.year))].sort((a, b) => Number(b) - Number(a))) {
    projectsNavItems.push({
        type: "divider",
        text: year,
    });

    projectsNavItems.push(...Object.entries(DataProjects).filter(([id, p]) => p.year == year).map(([id, p]) => {
        return {
            type: "link" as const, // wtf typescript r u ok
            path: `/projects/${id}`,
            label: <ProjectHeaderCompact p={p} />,
        };
    }));
}

export const navItems: NavItem[] = [
    {
        type: "link",
        icon: <IconHome />,
        path: "/",
        label: "Home",
    },
    {
        type: "link",
        icon: <IconClipboard />,
        path: "/projects",
        label: "Projects",
        children: projectsNavItems,
    },
    {
        type: "link",
        icon: <IconBrush />,
        path: "/art",
        label: "Art",
    },
    {
        type: "link",
        icon: <IconFileText />,
        path: "/blog",
        label: "Blog",
        children: [
            { type: "title", title: "Blog" },
            ...Object.entries(DataBlogPosts).map(([id, post]) => (
                {
                    type: "link" as const,
                    path: `/blog/${id}`,
                    label: post.title,
                    description: post.desc,
                }
            )),
        ],
    },
];

const routesOf = (x: NavItem): string[] => x.type == "link" ? [x.path, ...(x.children || []).flatMap(routesOf)] : [];
export const allPaths = navItems.flatMap(routesOf);
