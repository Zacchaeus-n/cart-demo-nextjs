import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { FC } from 'react'
import urlFor from '../lib/urlFor'

interface Props {
    post: Post
}

const Post: FC<Props> = ({post}) => {
  return (
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
                <div className="flex flex-col md:flex-row md:flex-wrap justify-end gap-y-2 md:gap-x-2 items-center">
                  {post?.categories?.map((category) => (
                    <div
                      key={category?._id}
                      className="bg-[tomato] text-center text-white px-3 py-1 rounded-full text-sm"
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
                {post?.description}
              </p>
            </div>
            <p className="mt-5 font-bold flex items-center group-hover:underline">
              Read More
              <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
            </p>
          </div>
  )
}

export default Post