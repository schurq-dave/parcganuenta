import type { Metadata } from 'next'
import { homePageData } from '@/lib/data/pages/home'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { navigationData } from '@/lib/data/navigation'
import { organizationJsonLd, webPageJsonLd } from '@/lib/seo/jsonld'

import { JsonLd } from '@/components/seo/JsonLd'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/hero/HeroSection'
import { IntroSection } from '@/components/intro/IntroSection'
import { AanbodSection } from '@/components/aanbod/AanbodSection'
import { OmgevingSection } from '@/components/omgeving/OmgevingSection'
import { ReviewsSection } from '@/components/reviews/ReviewsSection'
import { CtaBand } from '@/components/cta/CtaBand'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(homePageData.seo)
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd(siteConfig)} />
      <JsonLd data={webPageJsonLd(homePageData.seo, siteConfig)} />

      {/* Transparent header overlaid on hero */}
      <Header
        siteName={siteConfig.name}
        navLinks={navigationData.primary}
        transparent
      />

      <main>
        {/* 1 — Hero */}
        <div className="bg-brand-white pb-[20px]">
          <HeroSection {...homePageData.hero} />
        </div>

        {/* 2 — Over Parc Ganuenta */}
        <IntroSection {...homePageData.intro} />

        {/* 3 — Ons aanbod / villa's */}
        <AanbodSection {...homePageData.aanbod} />

        {/* 4 — Omgeving */}
        <OmgevingSection {...homePageData.omgeving} />

        {/* 5 — Reviews */}
        <ReviewsSection {...homePageData.reviews} />

        {/* 6 — CTA band */}
        <CtaBand {...homePageData.cta} />
      </main>

      <Footer navigation={navigationData.footer} siteName={siteConfig.name} />
    </>
  )
}
