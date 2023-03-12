"use client";

import React, { FC } from "react";
import ClientSideRoute from "./ClientSideRoute";
import Post from "./Post";

interface Props {
  posts: Post[];
}

const BlogList: FC<Props> = ({ posts }) => {
  return (
    <div>
      <hr className="border-[tomato] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-20">
        {/* posts */}
        {posts?.map((post) => (
          <ClientSideRoute
            route={`/post/${post?.slug?.current}`}
            key={post?._id}
          >
            <Post post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
