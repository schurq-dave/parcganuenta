import Link from 'next/link'
import type { VillaCard as VillaCardProps } from '@/lib/types/pages/home'

export function VillaCard({
  title,
  subtitle,
  description,
  priceLabel,
  specs,
  imageUrl,
  href,
  ctaLabel,
}: VillaCardProps) {
  return (
    <article className="group flex flex-col bg-brand-white rounded-tr-3xl rounded-bl-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-brand-platinum flex items-center justify-center">
            <span className="text-brand-dust text-sm tracking-wider uppercase">Afbeelding volgt</span>
          </div>
        )}
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-brand-white/95 px-3 py-1.5">
          <span className="text-xs font-medium tracking-wider text-brand-stone uppercase">
            {priceLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        <p className="label-style mb-2">{subtitle}</p>
        <h3 className="text-2xl font-medium text-brand-shadow mb-4 tracking-tight">{title}</h3>
        <p className="text-brand-stone text-sm leading-relaxed mb-6">{description}</p>

        {/* Specs grid */}
        <dl className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 border-t border-brand-platinum pt-6">
          {specs.map((spec) => (
            <div key={spec._key} className="flex flex-col">
              <dt className="text-xs text-brand-dust uppercase tracking-wider">{spec.label}</dt>
              <dd className="text-sm text-brand-shadow font-medium mt-0.5">{spec.value}</dd>
            </div>
          ))}
        </dl>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={href}
            className="btn btn-ghost w-full"
            aria-label={`${ctaLabel} — ${title}`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
