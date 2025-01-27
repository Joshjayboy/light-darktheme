
"use client"
import React, { createContext, useContext, useEffect, useState } from "react";


const Dashboard = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching posts:", error))
  })

  return (
    <div className="mx-auto max-w-2xl px-1 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-2">
      <h2 className="text-2xl font-bold tracking-tight">Project Title: Interactive Theme Switcher with User Preferences</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
        {posts.map((post) => (
          <div key={post.id} className="group relative border rounded-xl pl-3 pr-3">
            <div className="mt-4 flex justify-between">
              <div>
                <p>Post ID:</p>
                <h3 className="text-sm pb-4">
                  {post.id}
                </h3>
                <p>Post Title:</p>
                <h3 className="text-sm pb-4">
                  {post.title}
                </h3>
                <p>Post Body:</p>
                <p className="text-sm pb-4 text-justify">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard
