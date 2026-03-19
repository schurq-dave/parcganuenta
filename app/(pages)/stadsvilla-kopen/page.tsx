import type { Metadata } from 'next'
import { stadsvillaKopenPageData } from '@/lib/data/pages/stadsvilla-kopen'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(stadsvillaKopenPageData.seo)
}

export default function StadsvillaKopenPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(stadsvillaKopenPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Stadsvilla kopen', href: '/stadsvilla-kopen' },
          ],
          siteConfig.url
        )}
      />
      {/* Sections will be added when content is ready */}
    </>
  )
}
