import type { SeoMeta } from '@/lib/types/seo'

export interface OverOnsPage {
  seo: SeoMeta
  hero: {
    heading: string
    subheading: string
    imageUrl: string
  }
  story: {
    heading: string
    body: string
    imageUrl: string
  }
  team: TeamMember[]
  values: ValueItem[]
}

export interface TeamMember {
  _key: string
  name: string
  role: string
  bio: string
  imageUrl: string
}

export interface ValueItem {
  _key: string
  title: string
  description: string
}
