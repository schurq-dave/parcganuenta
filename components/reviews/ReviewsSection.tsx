import type { ReviewsSection as ReviewsSectionProps } from '@/lib/types/pages/home'
import { ReviewCard } from './ReviewCard'

export function ReviewsSection({ label, heading, reviews }: ReviewsSectionProps) {
  const headingLines = heading.split('\n')

  return (
    <section className="section-padding-lg bg-brand-white" aria-label="Ervaringen van gasten">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="label-style mb-5">{label}</p>
          <h2 className="heading-rule text-brand-shadow">
            {headingLines.map((line, i) => (
              <span key={i} className="block text-brand-platinum font-medium">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Review cards */}
        <div className="flex flex-col gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review._key} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
