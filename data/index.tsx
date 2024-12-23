import { BlogPost, Project } from "~/types";

const prettify = <T,>(o: Record<string, T>): Record<string, T> => {
    return Object.fromEntries(Object.entries(o).map(([k, v]) => {
        const sp = k.split("/");
        const id = sp[sp.length - 1]
            .replace(".mdx", "")
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase();
        return [id, v] as [string, T];
    }).filter(([k]) => k[0] !== "_"));
};

export const DataBlogPosts = prettify(import.meta.glob<BlogPost>("./blog/*.mdx", { eager: true }));
export const DataProjects = prettify(import.meta.glob<Project>("./proj/**/*.mdx", { eager: true }));
