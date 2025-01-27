"use client";
import React, { useEffect, useState } from "react";

const MainContent = () => {
    // Define an interface for the post structure
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    // State to hold the list of posts fetched from the API
    const [posts, setPosts] = useState<Post[]>([]);

    // useEffect to fetch posts from the API on component mount
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-5 md:px-6 sm:py-24 lg:max-w-7xl lg:px-5">
            
            {/* Section title */}
            <h2 className="text-2xl font-bold mb-9">Interactive Theme Switcher</h2>

            {/* Grid layout for displaying posts, responsive for different screen sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border rounded-lg shadow-md bg-secondary">

                        {/* Display post ID */}
                        <h3 className="font-bold mb-5">{post.id}</h3>

                        {/* Display post title */}
                        <h3 className="font-bold mb-5">{post.title}</h3>

                        {/* Display post body */}
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent; 