import { createFactory, Enum } from "@alan404/enum";

export const Domain = "deniz.blue";
export const Pages = (s: string) => `https://${Domain}/${s}/`;
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;

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

export interface Coord {
    x: number;
    y: number;
}
