import Link from 'next/link'
import type { HeroSection as HeroSectionProps } from '@/lib/types/pages/home'

export function HeroSection({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  backgroundImageUrl,
  backgroundVideoUrl,
}: HeroSectionProps) {
  const headingLines = heading.split('\n')

  return (
    <section
      className="relative flex min-h-screen items-end pb-20 md:pb-28 lg:pb-36"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {backgroundVideoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImageUrl}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
          >
            {!backgroundImageUrl && <div className="absolute inset-0 bg-brand-stone" />}
          </div>
        )}
        {/* Dark overlay — bottom-weighted for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full">
        <div className="max-w-3xl">
          {/* Eyebrow rule */}
          <div className="mb-6 h-px w-12 bg-brand-pacific" aria-hidden="true" />

          <h1 className="text-brand-platinum font-medium leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            {headingLines.map((line, i) => (
              <span key={i} className="block text-brand-platinum font-medium">
                {line}
              </span>
            ))}
          </h1>

          <p className="text-brand-platinum text-lg sm:text-xl mb-10 max-w-xl leading-relaxed font-light">
            {subheading}
          </p>

          <Link href={ctaHref} className="btn btn-accent">
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
        aria-hidden="true"
      >
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="text-white w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
