import { IconBrush, IconClipboard, IconFileText, IconHome } from "@tabler/icons-react";
import { NavItem } from "./types";
import { DataProjects } from "data/projects";
import { ProjectHeaderCompact } from "./components/project/ProjectHeader";

export const Domain = "deniz.blue";
export const Pages = (s: string) => `https://${Domain}/${s}/`;
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;

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
        children: DataProjects.map(x => ({
            path: `/projects/${x.id}`,
            label: <ProjectHeaderCompact p={x} />,
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
        children: [

        ],
    },
];
