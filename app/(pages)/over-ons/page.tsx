import type { Metadata } from 'next'
import { overOnsPageData } from '@/lib/data/pages/over-ons'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(overOnsPageData.seo)
}

export default function OverOnsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(overOnsPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Over ons', href: '/over-ons' },
          ],
          siteConfig.url
        )}
      />
      {/* Sections will be added when content is ready */}
    </>
  )
}
