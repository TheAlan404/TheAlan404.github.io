import * as Hello from "@/blog/Hello.mdx"
import * as Internship from "@/blog/Internship.mdx"
import * as LibraryEnum from "@/blog/LibraryEnum.mdx"

export type BlogPost = {
    id: string;
    title: string;
    desc: string;
    date: string;
    component: React.ComponentType<any>;
};

export const DataBlogPosts: BlogPost[] = [
    LibraryEnum,
    Internship,
    Hello,
].map((x, i) => ({
    component: x.default,
    date: x.date,
    desc: x.description,
    title: x.title,
    id: x.slug,
}));
