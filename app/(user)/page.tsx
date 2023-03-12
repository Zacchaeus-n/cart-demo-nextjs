import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import client from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->,
    body
  } | order(_createdAt desc)
`

const HomePage = async () => {
  // checking if in preview mode
  let _previewData: any = previewData()
  if (_previewData) {
    return <PreviewSuspense fallback={(
      <div role={"status"}>
        <p className="text-center text-lg animate-pulse text-[tomato]">Loading preview data ...</p>
      </div>
    )}>
      <PreviewBlogList query={query} />
    </PreviewSuspense>;
  }
  
  // fetch data
  const posts = await client.fetch(query)
  return <BlogList posts={posts} />;
};

export default HomePage;
