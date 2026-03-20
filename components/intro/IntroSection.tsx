import Link from 'next/link'
import type { IntroSection as IntroSectionProps } from '@/lib/types/pages/home'

export function IntroSection({ label, heading, body, ctas, imageUrl }: IntroSectionProps) {
  const headingLines = heading.split('\n')

  return (
    <section className="section-padding-lg bg-brand-white" aria-label="Over Parc Ganuenta">
      <div className="container-site-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl text-left">
            {/* Label */}
            <p className="label-style mb-6">{label}</p>

            {/* Heading */}
            <h2 className="heading-rule text-brand-shadow mb-8">
              {headingLines.map((line, i) => (
                <span 
                  key={i} 
                  className="block font-medium"
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </h2>

            {/* Body */}
            <p className="text-brand-stone text-lg leading-relaxed mb-12">
              {body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              {ctas.map((cta) => {
                if (cta.variant === 'primary' || cta.variant === 'accent') {
                  return (
                    <Link
                      key={cta._key}
                      href={cta.href}
                      className="btn-group"
                    >
                      <span className={`btn ${cta.variant === 'accent' ? 'btn-accent' : 'btn-primary'}`}>{cta.label}</span>
                      <span className="btn-arrow-circle" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 13 L13 3 M6 3 h7 v7" />
                        </svg>
                      </span>
                    </Link>
                  )
                }

                return (
                  <Link
                    key={cta._key}
                    href={cta.href}
                    className="btn btn-ghost"
                  >
                    {cta.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="relative aspect-[4/3] rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img
                  src={imageUrl}
                  alt="Over Parc Ganuenta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex items-center gap-6" aria-hidden="true">
          <div className="flex-1 h-px bg-brand-dust" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-pacific" />
          <div className="flex-1 h-px bg-brand-dust" />
        </div>
      </div>
    </section>
  )
}
