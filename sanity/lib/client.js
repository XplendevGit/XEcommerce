import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const imgBuilder = ImageUrlBuilder(client)

export function urlFor(source) {
  return imgBuilder.image(source)
}
