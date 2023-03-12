"use client";

import Image from "next/image";
import React, { FC } from "react";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface Props {
  posts: Post[];
}

const BlogList: FC<Props> = ({ posts }) => {
  console.log("posts: ", posts);
  return (
    <div>
      <hr className="border-[tomato] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-20">
        {/* posts */}
        {posts?.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post?.mainImage).url()}
                alt={post?.author?.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg text-white p-5 flex justify-between">
                <div className="">
                  <p className="font-bold capitalize">{post?.title}</p>
                  <p className="font-extralight italic">
                    {new Date(post?._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post?.categories?.map((category) => (
                    <div
                      key={category?._id}
                      className="bg-[tomato] text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {category?.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post?.title}</p>
              <p className="line-clamp-2 text-gray-500">
                {post?.body?.[0].children?.[0].text}
              </p>
            </div>
            <p className="mt-5 font-bold flex items-center group-hover:underline">
              Read More
              <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
