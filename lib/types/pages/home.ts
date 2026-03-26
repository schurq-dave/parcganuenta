import type { SeoMeta } from '@/lib/types/seo'

export interface HomePage {
  seo: SeoMeta
  hero: HeroSection
  intro: IntroSection
  experience: ExperienceCarouselSection
  aanbod: AanbodSection
  omgeving: OmgevingSection
  reviews: ReviewsSection
  faq: FaqSection
  cta: CtaBand
}

/* ── Section types ─────────────────────────── */

export interface HeroSection {
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
  backgroundImageUrl: string
  backgroundVideoUrl?: string
}

export interface IntroSection {
  label: string
  heading: string
  body: string
  ctas: IntroCtaItem[]
  imageUrl?: string
}

export interface IntroCtaItem {
  _key: string
  label: string
  href: string
  variant: 'primary' | 'accent' | 'ghost'
}

export interface ExperienceCarouselSection {
  heading: string
  subheading?: string
  slides: ExperienceSlide[]
}

export interface ExperienceSlide {
  _key: string
  title: string
  caption: string
  image: {
    asset: {
      url: string
      alt: string
    }
  }
}

export interface AanbodSection {
  label: string
  heading: string
  subheading: string
  villas: VillaCard[]
}

export interface VillaCard {
  _key: string
  title: string
  subtitle: string
  description: string
  priceLabel: string
  specs: VillaSpec[]
  imageUrl: string
  href: string
  ctaLabel: string
}

export interface VillaSpec {
  _key: string
  label: string
  value: string
}

export interface OmgevingSection {
  label: string
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
  backgroundImageUrl: string
  backgroundVideoUrl?: string
}

export interface ReviewsSection {
  label: string
  heading: string
  reviews: ReviewItem[]
}

export interface ReviewItem {
  _key: string
  quote: string
  authorName: string
  authorDetails: string
  villaLabel: string
  villaHref: string
  imageUrl: string
}

export interface FaqSection {
  label: string
  heading: string
  items: FaqItem[]
}

export interface FaqItem {
  _key: string
  question: string
  answer: string
}

export interface CtaBand {
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
  backgroundImageUrl?: string
  backgroundVideoUrl?: string
}
