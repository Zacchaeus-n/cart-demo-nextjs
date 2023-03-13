import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import PortableText from "react-portable-text";
import client from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
interface Props {
  params: {
    slug: string;
  };
}

// revalidation
export const revalidate = 60;

export async function generateStaticParams() {
  // static pages
  const query = groq`
        *[_type=='post'] {slug}
    `;

  const slugs: Post[] = await client.fetch(query);
  const sludRoutes = slugs?.map((slug) => slug?.slug?.current);
  return sludRoutes?.map((slug) => ({ slug }));
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
      <PortableText
        // Pass in block content straight from Sanity.io
        content={post?.body}
        
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h1: ({ children }: any) => (
            <h1 className="text-5xl py-10- font-bold">{children}</h1>
          ),
          h2: ({ children }: any) => (
            <h2 className="text-4xl py-10- font-bold">{children}</h2>
          ),
          h3: ({ children }: any) => (
            <h3 className="text-3xl py-10- font-bold">{children}</h3>
          ),
          h4: ({ children }: any) => (
            <h4 className="text-2xl py-10- font-bold">{children}</h4>
          ),
          h5: ({ children }: any) => (
            <h5 className="text-1xl py-10- font-bold">{children}</h5>
          ),
          h6: ({ children }: any) => (
            <h6 className="text-xl py-10- font-bold">{children}</h6>
          ),
          p: ({ children }: any) => (
            <p className="text-sm py-10- font-normal">{children}</p>
          ),
          blockquote: ({ children }: any) => (
            <blockquote className="border-l-[tomato] border-l-4 pl-5 py-5 my-5">
              {children}
            </blockquote>
          ),
          // image: ({ value }: any) => (
          //   <div className="relative w-full h-96 m-10">
          //     <Image
          //       className="object-cover object-left lg:object-center"
          //       src={urlFor(value).url()}
          //       alt="blog post image"
          //       fill
          //     />
          //   </div>
          // ),
          list: {
            bullet: ({ children }: any) => (
              <ul className="ml-10 my-5 list-disc space-x-5">{children}</ul>
            ),
            number: ({ children }: any) => (
              <ul className="mt-lg my-5 list-decimal">{children}</ul>
            ),
          },
          link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
              ? "noreferrer noopener"
              : undefined;
            return (
              <Link
                href={value.href}
                rel={rel}
                className="underline decoration-[tomato] hover:decoration-black"
              >
                {children}
              </Link>
            );
          },
        }}
      />
    </article>
  );
}

export default PostPage;
