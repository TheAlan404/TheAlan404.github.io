import { createFactory, Enum } from "@alan404/enum";
import { ReactNode } from "react";

export type NavItem = {
    path: string;
    label: ReactNode;
    icon?: ReactNode;
    description?: ReactNode;
    children?: NavItem[];
};

export interface Project {
    id: string;
    name: string;
    types: ProjectType[];
    tech: Tech[];
    buttons: ProjectButton[];
    year: string;
    status?: ProjectStatus;
    Render?: React.ComponentType<any>;
    shortDesc: string;
    new?: boolean;
}

export type ProjectStatus = "up" | "ok" | "wip" | "archive";
export type Tech = "rust" | "react" | "cs" | "js" | "ts" | "html" | "css" | "vite" | "nextjs" | "nodejs" | "mongodb" | "prisma";
export type ProjectType = "library" | "website" | "restapi" | "desktop" | "cli" | "mobile";

export const ProjectButton = createFactory<ProjectButton>();
export type ProjectButton = Enum<{
    website: string;
    docs: string;
    repo: string;
    npm: string;
}>;

