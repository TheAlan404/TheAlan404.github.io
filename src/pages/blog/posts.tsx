import { BlogPost } from "./types";

import * as Hello from "@/blog/Hello.mdx"
import * as Internship from "@/blog/Internship.mdx"
import * as LibraryEnum from "@/blog/LibraryEnum.mdx"

export const BlogPosts: BlogPost[] = [
    //LibraryEnum,
    //Internship,
    Hello,
].map((x, i) => ({
    component: x.default,
    date: x.date,
    desc: x.description,
    title: x.title,
    id: ""+i,
}));
