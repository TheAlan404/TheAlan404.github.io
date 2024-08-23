export interface Project {
    name: string;
    status: ProjectStatus;
    desc?: string;
    buttons: ProjectButton[];
    tech?: Tech[];
    color?: string;
    img?: string;
    content?: JSX.Element;
}

export type ProjectStatus = "done" | "wip" | "forgor" | "abandoned";

export type Tech = "rust" | "react" | "cs" | "js" | "ts" | "html" | "css" | "vite" | "nextjs" | "nodejs";

export type ProjectButton = { type: "website"; url: string; text?: string; } |
    { type: "docs"; url: string; } |
    { type: "repo"; repo: string; };

export interface Coord {
    x: number;
    y: number;
}
