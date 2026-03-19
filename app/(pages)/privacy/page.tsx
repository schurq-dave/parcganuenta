import type { Metadata } from 'next'
import { privacyPageData } from '@/lib/data/pages/legal'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(privacyPageData.seo)
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(privacyPageData.seo, siteConfig)} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-medium text-neutral-900 mb-4">
          {privacyPageData.heading}
        </h1>
        {privacyPageData.lastUpdated && (
          <p className="text-sm text-neutral-500 mb-10">
            Laatst bijgewerkt: {privacyPageData.lastUpdated}
          </p>
        )}
        <div className="space-y-8">
          {privacyPageData.sections.map((section) => (
            <section key={section._key}>
              <h2 className="text-xl font-medium text-neutral-800 mb-3">
                {section.heading}
              </h2>
              <p className="text-neutral-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
