import type { Metadata } from 'next'
import { contactPageData } from '@/lib/data/pages/contact'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(contactPageData.seo)
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(contactPageData.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' },
          ],
          siteConfig.url
        )}
      />
      {/* Contact form and info sections will be added when content is ready */}
    </>
  )
}
