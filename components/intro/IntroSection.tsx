import Link from 'next/link'
import type { IntroSection as IntroSectionProps } from '@/lib/types/pages/home'

export function IntroSection({ label, heading, body, ctas }: IntroSectionProps) {
  const headingLines = heading.split('\n')

  return (
    <section className="section-padding-lg bg-brand-white" aria-label="Over Parc Ganuenta">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <p className="label-style text-center mx-auto mb-6">{label}</p>

          {/* Heading */}
          <h2 className="heading-rule heading-rule-centered text-brand-shadow mb-8">
            {headingLines.map((line, i) => (
              <span key={i} className="block text-brand-platinum font-medium">
                {line}
              </span>
            ))}
          </h2>

          {/* Body */}
          <p className="text-brand-stone text-lg leading-relaxed mx-auto mb-12">
            {body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta._key}
                href={cta.href}
                className={cta.variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost'}
              >
                {cta.label}
              </Link>
            ))}
          </div>
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
