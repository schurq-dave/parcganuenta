import type { SeoMeta } from '@/lib/types/seo'

export interface StadsvillaKopenPage {
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
  specs: SpecItem[]
  gallery: GalleryImage[]
  cta: {
    heading: string
    body: string
    ctaLabel: string
    ctaHref: string
  }
}

export interface SpecItem {
  _key: string
  label: string
  value: string
}

export interface GalleryImage {
  _key: string
  url: string
  alt: string
}
