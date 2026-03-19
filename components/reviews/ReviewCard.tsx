import Link from 'next/link'
import type { ReviewItem } from '@/lib/types/pages/home'

export function ReviewCard({ quote, authorName, authorDetails, villaLabel, villaHref, imageUrl }: ReviewItem) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-brand-white rounded-tr-3xl rounded-bl-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Quote side */}
      <div className="md:col-span-3 flex flex-col justify-between p-8 md:p-12">
        {/* Opening quote mark */}
        <div
          className="text-brand-pacific text-7xl font-serif leading-none mb-4 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote className="flex-1">
          <p className="text-brand-shadow text-lg md:text-xl leading-relaxed font-light italic mb-8">
            {quote.replace(/^"|"$|^'|'$|^"|"$/, '')}
          </p>
        </blockquote>

        <footer className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-brand-shadow font-medium text-sm">{authorName}</p>
            <p className="text-brand-stone text-xs tracking-wide mt-0.5">{authorDetails}</p>
          </div>
          <Link
            href={villaHref}
            className="text-xs font-medium tracking-wider uppercase text-brand-pacific hover:text-brand-sky transition-colors border-b border-brand-pacific hover:border-brand-sky pb-0.5"
            aria-label={`Bekijk ${villaLabel}`}
          >
            {villaLabel}
          </Link>
        </footer>
      </div>

      {/* Image side */}
      <div className="md:col-span-2 overflow-hidden min-h-[240px] md:min-h-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Verblijf van ${authorName}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-brand-platinum flex items-center justify-center">
            <span className="text-brand-dust text-xs tracking-wider uppercase">Afbeelding volgt</span>
          </div>
        )}
      </div>
    </article>
  )
}
