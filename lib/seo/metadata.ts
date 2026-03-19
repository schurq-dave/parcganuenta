import type { Metadata } from 'next'
import type { SeoMeta } from '@/lib/types/seo'
import { siteConfig } from '@/lib/data/site-config'

export function buildMetadata(seo: SeoMeta): Metadata {
  const canonicalUrl = `${siteConfig.url}${seo.slug}`
  const ogImage = seo.ogImageUrl ?? siteConfig.defaultSeo.ogImageUrl

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: seo.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [ogImage],
    },
  }
}
