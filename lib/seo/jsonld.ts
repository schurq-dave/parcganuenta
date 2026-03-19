import type { SiteConfig } from '@/lib/types/site-config'
import type { SeoMeta } from '@/lib/types/seo'

export function organizationJsonLd(config: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    contactPoint: {
      '@type': 'ContactPoint',
      email: config.contact.email,
      telephone: config.contact.phone,
    },
    sameAs: Object.values(config.social).filter(Boolean),
  }
}

export function webPageJsonLd(seo: SeoMeta, config: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.metaTitle,
    description: seo.metaDescription,
    url: `${config.url}${seo.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: config.name,
      url: config.url,
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export interface Breadcrumb {
  label: string
  href: string
}

export function breadcrumbJsonLd(crumbs: Breadcrumb[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  }
}
