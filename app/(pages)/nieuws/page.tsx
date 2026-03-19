import type { Metadata } from 'next'
import { nieuwsPageData } from '@/lib/data/pages/nieuws'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(nieuwsPageData.seo)
}

export default function NieuwsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(nieuwsPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Nieuws', href: '/nieuws' },
          ],
          siteConfig.url
        )}
      />
      {/* Blog post list will be added when content is ready */}
    </>
  )
}
