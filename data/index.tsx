import { ComponentType } from "react";
import { BlogPost, Project } from "~/types";

export type MdxModule<ExtraExports> = {
    default: ComponentType<{ components?: {} }>;
} & ExtraExports;

const prettify = <T extends { data: { id: string } }>(o: Record<string, T>): Record<string, T> => {
    return Object.fromEntries(Object.entries(o).map(([k, v]) => {
        // console.log([k, v]);
        return [v.data.id, v] as [string, T];
    }).filter(([k]) => k[0] !== "_"));
};

export const DataBlogPosts = prettify(import.meta.glob<MdxModule<{
    data: BlogPost;
}>>("./blog/*.mdx", { eager: true }));

export const DataProjects = prettify(import.meta.glob<MdxModule<{
    data: Project;
}>>("./proj/**/*.mdx", { eager: true }));
