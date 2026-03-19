import type { Metadata } from 'next'
import { omgevingPageData } from '@/lib/data/pages/omgeving'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(omgevingPageData.seo)
}

export default function OmgevingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(omgevingPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Omgeving', href: '/omgeving' },
          ],
          siteConfig.url
        )}
      />
      {/* Sections will be added when content is ready */}
    </>
  )
}
