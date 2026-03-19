import type { SeoMeta } from '@/lib/types/seo'

export interface NieuwsPage {
  seo: SeoMeta
  hero: {
    heading: string
    subheading: string
  }
}

export interface BlogPost {
  _key: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  author: string
  category: string
  imageUrl: string
  body: string
  seo: SeoMeta
}
