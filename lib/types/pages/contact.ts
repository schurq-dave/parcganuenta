import type { SeoMeta } from '@/lib/types/seo'

export interface ContactPage {
  seo: SeoMeta
  hero: {
    heading: string
    subheading: string
  }
  form: {
    heading: string
    subheading: string
    successMessage: string
  }
  info: {
    heading: string
    address: string
    email: string
    phone: string
    mapEmbedUrl?: string
  }
}
