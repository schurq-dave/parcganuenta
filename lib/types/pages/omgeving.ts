import type { SeoMeta } from '@/lib/types/seo'

export interface OmgevingPage {
  seo: SeoMeta
  hero: {
    heading: string
    subheading: string
    imageUrl: string
  }
  intro: {
    heading: string
    body: string
  }
  categories: OmgevingCategory[]
}

export interface OmgevingCategory {
  _key: string
  title: string
  description: string
  items: OmgevingItem[]
}

export interface OmgevingItem {
  _key: string
  name: string
  description: string
  distance?: string
  imageUrl?: string
}
