export interface SiteConfig {
  name: string
  url: string
  locale: string
  description: string
  social: {
    instagram?: string
    facebook?: string
    linkedin?: string
  }
  contact: {
    email: string
    phone?: string
    address?: string
  }
  defaultSeo: {
    ogImageUrl: string
  }
}
