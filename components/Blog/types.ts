import { IContentDocument } from '@nuxt/content/types/content'

export interface Author {
  name: string
  img: string
}

export interface Article extends IContentDocument {
  title: string
  description: string
  img: string
  alt: string
  author: Author
  created: string
}
