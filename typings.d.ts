

interface Base {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}

interface Block {
    _type: "block"
    _key: string
    children: Span[]
    markDefs: any[]
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span {
    _type: "span"
    _key: string
    marks: string[]
    text: string
}

interface Category extends Base {
    description: string
    title: string
}

interface Author {
    bio: Block[]
    name: string
    image: Image
    slug: Slug
}

interface Image {
    _type: "image"
    asset: Reference
}

interface MainImage {
    _type: "image"
    asset: Reference
}

interface Title {
    _type: "string"
    current: string
}

interface Reference {
    _type: "reference"
    _ref: string
}

interface Slug {
    _type: "slug"
    current: string
}

interface Post extends Base {
    author: Author
    body: Block[]
    categories: Category[]
    mainImage: Image
    slug: Slug
    title: string
    description: string
}