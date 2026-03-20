import Link from 'next/link'
import type { OmgevingSection as OmgevingSectionProps } from '@/lib/types/pages/home'

export function OmgevingSection({
  label,
  heading,
  body,
  ctaLabel,
  ctaHref,
  backgroundImageUrl,
  backgroundVideoUrl,
}: OmgevingSectionProps) {
  const headingLines = heading.split('\n')

  return (
    <section
      className="relative min-h-[70vh] flex items-center py-24 md:py-36"
      aria-label="De omgeving"
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
          <div className="absolute inset-0 bg-brand-stone" />
        )}
        {/* Gradient: darker on the right side where text sits */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site-wide w-full flex justify-end">
        <div className="max-w-lg">
          {/* Label */}
          <p className="text-brand-pacific text-xs font-medium tracking-widest uppercase mb-6">
            {label}
          </p>

          {/* Heading */}
          <h2 className="text-white text-4xl md:text-5xl tracking-tight leading-tight mb-8">
            {headingLines.map((line, i) => (
              <span 
                key={i} 
                className="block"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </h2>

          {/* Body */}
          <p className="text-brand-platinum text-lg leading-relaxed mb-10 max-w-[52ch]">
            {body}
          </p>

          {/* CTA */}
          <Link href={ctaHref} className="btn btn-ghost-white">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
