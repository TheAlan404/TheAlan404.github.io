import { Stack } from "@mantine/core";
import { useState } from "react";
import { BlogPosts } from "./posts";
import { PostsListView } from "./PostsListView";
import { BlogPostView } from "./BlogPostView";

export const BlogPage = () => {
    const [currentPost, setCurrentPost] = useState<string | null>(null);

    let post = BlogPosts.find(x => x.id === currentPost);

    return (
        <Stack>
            {post ? (
                <BlogPostView
                    post={post}
                    onBack={() => setCurrentPost(null)}
                />
            ) : (
                <PostsListView
                    onSelect={setCurrentPost}
                />
            )}
        </Stack>
    )
};


