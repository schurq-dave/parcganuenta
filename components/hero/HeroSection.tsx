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
      className="relative flex min-h-screen flex-col overflow-hidden"
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
            <source src={backgroundVideoUrl} type="video/quicktime" />
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
        {/* Donkerbruine overlay met lichte opacity */}
        <div className="absolute inset-0 bg-[#3E2723]/30" />
      </div>

      {/* H1 — verticaal gecentreerd in de hero */}
      <div className="relative z-10 flex flex-1 items-center justify-center container-site-wide pt-32">
        <h1 className="text-brand-platinum font-medium leading-tight text-4xl sm:text-5xl lg:text-[80px] tracking-tight text-center max-w-4xl">
          {headingLines.map((line, i) => (
            <span 
              key={i} 
              className="block text-brand-platinum font-medium"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </h1>
      </div>

      {/* Onderste balk — button links, subtekst midden */}
      <div className="relative z-10 container-site-wide w-full pb-32 md:pb-28 lg:pb-36">
        <div className="w-full flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-10">
          {/* CTA links */}
          <div className="md:flex-1 flex md:justify-start justify-center">
            <Link href={ctaHref} className="btn-group">
              <span className="btn btn-accent">{ctaLabel}</span>
              <span className="btn-arrow-circle" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 13 L13 3 M6 3 h7 v7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Subtekst midden */}
          <p className="md:flex-1 text-brand-platinum text-base sm:text-lg leading-relaxed font-light text-center max-w-sm">
            {subheading}
          </p>

          {/* Lege kolom rechts voor symmetrie */}
          <div className="hidden md:block md:flex-1" aria-hidden="true" />
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
