import type { Metadata } from 'next'
import { verhuurPageData } from '@/lib/data/pages/verhuur'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(verhuurPageData.seo)
}

export default function VerhuurPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(verhuurPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Verhuur', href: '/verhuur' },
          ],
          siteConfig.url
        )}
      />
      {/* Sections will be added when content is ready */}
    </>
  )
}
