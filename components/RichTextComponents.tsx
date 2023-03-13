import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PortableText from 'react-portable-text'
import urlFor from '../lib/urlFor'

const RichTextComponents = {
    types: {
      image: ({value}: any) => <div className="relative w-full h-96 m-10">
      <Image
        className="object-cover object-left lg:object-center"
        src={urlFor(value).url()}
        alt="blog post image"
        fill
      />
    </div>,
    list: {
      bullet: ({children}: any) => <ul className="ml-10 my-5 list-disc space-x-5">{children}</ul>,
      number: ({children}: any) => <ul className="mt-lg my-5 list-decimal">{children}</ul>
    },
    blocks: {
      h1: ({children}: any) => <h1 className="text-5xl py-10- font-bold">{children}</h1>,
      h2: ({children}: any) => <h2 className="text-4xl py-10- font-bold">{children}</h2>,
      h3: ({children}: any) => <h3 className="text-3xl py-10- font-bold">{children}</h3>,
      h4: ({children}: any) => <h4 className="text-2xl py-10- font-bold">{children}</h4>,
      h5: ({children}: any) => <h5 className="text-1xl py-10- font-bold">{children}</h5>,
      h6: ({children}: any) => <h6 className="text-xl py-10- font-bold">{children}</h6>,
      p: ({children}: any) => <p className="text-sm py-10- font-normal">{children}</p>,
      blockquote: ({children}: any) => <blockquote className="border-l-[tomato] border-l-4 pl-5 py-5 my-5">{children}</blockquote>,

    },
      callToAction: ({value, isInline}: {value: any, isInline: boolean}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
  
    marks: {
      link: ({children, value}:any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <Link href={value.href} rel={rel} className="underline decoration-[tomato] hover:decoration-black">
            {children}
          </Link>
        )
      },
    },
  }
  
  // const YourComponent = (props) => {
  //   return <PortableText value={props.value} components={myPortableTextComponents} />
  // }

export default RichTextComponents