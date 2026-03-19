import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/data/site-config'
import { allPageSlugs } from '@/lib/data/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  return allPageSlugs.map((slug) => ({
    url: `${siteConfig.url}${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === '/' ? 'weekly' : 'monthly',
    priority: slug === '/' ? 1 : 0.8,
  }))
}
