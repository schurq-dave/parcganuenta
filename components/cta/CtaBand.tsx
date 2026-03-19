import Link from 'next/link'
import type { CtaBand as CtaBandProps } from '@/lib/types/pages/home'

export function CtaBand({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  backgroundImageUrl,
  backgroundVideoUrl,
}: CtaBandProps) {
  const headingLines = heading.split('\n')

  return (
    <section
      className="relative py-28 md:py-40 flex items-center justify-center text-center"
      aria-label="Contacteer ons"
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
        ) : backgroundImageUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-brand-shadow" />
        )}
        {/* Stone-tinted overlay for brand warmth */}
        <div className="absolute inset-0 bg-brand-shadow/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site">
        {/* Decorative rule */}
        <div className="mx-auto mb-8 h-px w-16 bg-brand-pacific" aria-hidden="true" />

        <h2 className="text-white text-3xl md:text-5xl tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
          {headingLines.map((line, i) => (
            <span key={i} className="block font-medium">
              {line}
            </span>
          ))}
        </h2>

        <p className="text-brand-platinum text-lg mb-10 max-w-md mx-auto leading-relaxed">
          {subheading}
        </p>

        <Link href={ctaHref} className="btn btn-accent">
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
