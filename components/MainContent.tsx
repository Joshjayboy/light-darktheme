"use client";
import React, { useEffect, useState } from "react";

const MainContent = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Interactive Theme Switcher</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border rounded-lg shadow-md">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent; 