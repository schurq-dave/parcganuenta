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

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-brand-platinum">
          <Link
            href={href}
            className="btn-group w-full"
            aria-label={`${ctaLabel} — ${title}`}
          >
            <span className="btn btn-accent w-full">{ctaLabel}</span>
            <span className="btn-arrow-circle" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 13 L13 3 M6 3 h7 v7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
