import type { SeoMeta } from '@/lib/types/seo'

export interface LegalPage {
  seo: SeoMeta
  heading: string
  lastUpdated: string
  sections: LegalSection[]
}

export interface LegalSection {
  _key: string
  heading: string
  body: string
}
