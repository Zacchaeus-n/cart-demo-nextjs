import client from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

// get the pre-configured url-builder from sanity client
const builder = imageUrlBuilder(client)
// this help build an image url for next Image component

const urlFor = (source: any) => builder.image(source)

export default urlFor