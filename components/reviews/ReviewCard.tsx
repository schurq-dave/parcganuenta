import Link from 'next/link'
import type { ReviewItem } from '@/lib/types/pages/home'

interface ReviewCardProps extends ReviewItem {
  isActive?: boolean
  onMouseEnter?: () => void
}

export function ReviewCard({ quote, authorName, authorDetails, villaLabel, villaHref, imageUrl, isActive, onMouseEnter }: ReviewCardProps) {
  return (
    <article 
      className={`relative w-full aspect-[3/4] md:aspect-[4/5] rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden cursor-pointer transition-transform duration-500 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'}`} 
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Verblijf van ${authorName}`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
        />
      ) : (
        <div className="absolute inset-0 bg-brand-platinum flex items-center justify-center">
          <span className="text-brand-dust text-xs tracking-wider uppercase">Afbeelding volgt</span>
        </div>
      )}

      {/* Gradient overlay for default state (bottom text visibility) */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

      {/* Default State: Author Name at the bottom */}
      <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-white text-2xl font-medium">{authorName}</h3>
        <p className="text-white/80 text-sm mt-1">{authorDetails}</p>
      </div>

      {/* Hover State: Dark overlay with Quote and Villa */}
      <div className={`absolute inset-0 bg-brand-shadow/75 p-6 md:p-8 flex flex-col justify-end transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex-1 flex flex-col justify-end pb-6">
          {/* Quote mark */}
          <div className="text-brand-pacific text-5xl md:text-6xl font-serif leading-none select-none mb-2" aria-hidden="true">
            &ldquo;
          </div>

          <blockquote className="mt-2">
            <p className="text-white text-base md:text-lg leading-relaxed font-light italic">
              {quote.replace(/^"|"$|^'|'$|^"|"$/, '')}
            </p>
          </blockquote>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 flex flex-row items-center justify-between gap-4">
          <span className="text-white/80 text-sm font-medium">{authorName}</span>
          <Link
            href={villaHref}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white rounded-full px-5 py-2.5 text-xs font-medium tracking-wider uppercase hover:bg-brand-stone hover:border-brand-stone transition-colors shrink-0"
            aria-label={`Bekijk ${villaLabel}`}
          >
            <span>{villaLabel}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 13 L11 8 L6 3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
