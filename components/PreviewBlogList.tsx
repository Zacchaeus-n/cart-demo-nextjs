"use client"

import React, { FC } from 'react'
import { usePreview } from '../lib/sanity.preview'
import BlogList from './BlogList'

interface Props {
    query: string
}


const PreviewBlogList: FC<Props> = ({query}) => {
    const posts = usePreview(null, query)
    console.log("posts preview: ", posts)
  return (
    <BlogList posts={posts} />
  )
}

export default PreviewBlogList