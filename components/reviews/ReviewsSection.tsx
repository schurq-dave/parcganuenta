'use client'

import { useState } from 'react'
import type { ReviewsSection as ReviewsSectionProps } from '@/lib/types/pages/home'
import { ReviewCard } from './ReviewCard'

export function ReviewsSection({ label, heading, reviews }: ReviewsSectionProps) {
  const headingLines = heading.split('\n')
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="section-padding-lg bg-brand-white" aria-label="Ervaringen van gasten">
      <div className="container-site-wide">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <h2 className="heading-rule text-brand-shadow">
            {headingLines.map((line, i) => (
              <span 
                key={i} 
                className="block font-medium"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </h2>
        </div>

        {/* Review cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {reviews.map((review, index) => (
            <ReviewCard 
              key={review._key} 
              {...review} 
              isActive={activeIndex === index}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
