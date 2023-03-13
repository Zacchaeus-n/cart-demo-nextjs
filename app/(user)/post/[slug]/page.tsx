import { groq } from "next-sanity";
import Image from "next/image";
import React, { FC } from "react";
import client from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import RichTextComponents from "../../../../components/RichTextComponents";
import {PortableText} from '@portabletext/react'

interface Props {
  params: {
    slug: string;
  };
}

// revalidation
export const revalidate = 60

export async function generateStaticParams() {
    // static pages
    const query = groq`
        *[_type=='post'] {slug}
    `

    const slugs: Post[] = await client.fetch(query)
    const sludRoutes = slugs?.map(slug=>slug?.slug?.current)
    return sludRoutes?.map(slug=>({slug}))
}

async function PostPage({ params: { slug } }: Props) {
  const query = groq`
  *[_type=="post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
    body
  }
`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[tomato] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post?.mainImage).url()}
              alt={post?.author?.name}
              fill
            />
          </div>
          <section className="p-5 bg-[tomato] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                <h1 className="text-4xl font-extrabold">{post?.title}</h1>
                <p className="font-extralight italic">
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full border border-white"
                  src={urlFor(post?.author?.image).url()}
                  alt={post?.author?.name}
                  height={50}
                  width={50}
                />
                <div className="">
                  <h3 className="text-lg font-bold">{post?.author?.name}</h3>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="italic pt-10">{post?.description}</h2>
              <div className="flex flex-row flex-wrap space-x-2 justify-end place-items-end gap-y-2 md:gap-x-2 md:items-center">
                {post?.categories?.map((category) => (
                  <div
                    key={category?._id}
                    className="bg-[black] text-center text-white px-3 py-1 rounded-full text-sm"
                  >
                    {category?.title}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post?.body} components={RichTextComponents} />
    </article>
  );
}

export default PostPage;
