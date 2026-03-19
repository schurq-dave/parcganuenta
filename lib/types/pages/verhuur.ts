import type { SeoMeta } from '@/lib/types/seo'

export interface VerhuurPage {
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
  units: RentalUnit[]
  cta: {
    heading: string
    body: string
    ctaLabel: string
    ctaHref: string
  }
}

export interface RentalUnit {
  _key: string
  title: string
  description: string
  price: string
  imageUrl: string
  features: string[]
}
