'use client'

import { useCallback, useEffect, useState } from 'react'
import type { ExperienceCarouselSection as ExperienceCarouselSectionProps } from '@/lib/types/pages/home'

export function ExperienceCarouselSection({
  heading,
  subheading,
  slides,
}: ExperienceCarouselSectionProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length
  const active = slides[index]

  useEffect(() => {
    if (paused || count < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 6000)
    return () => window.clearInterval(id)
  }, [count, paused])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count)
  }, [count])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count)
  }, [count])

  const headingLines = heading.split('\n')

  return (
    <section
      className="section-padding-lg bg-brand-white outline-none"
      aria-label="Inkijk in uw verblijf"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goPrev()
        if (e.key === 'ArrowRight') goNext()
      }}
    >
      <div className="container-site-wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="flex flex-col">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem]"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {slides.map((slide, i) => (
                <img
                  key={slide._key}
                  src={slide.image.asset.url}
                  alt={slide.image.asset.alt}
                  className={
                    i === index
                      ? 'absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-[2000ms] ease-in-out'
                      : 'absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[2000ms] ease-in-out'
                  }
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
            <div
              className="mt-4 pt-[10px] flex flex-wrap justify-start gap-2"
              role="group"
              aria-label="Kies impressie"
            >
              {slides.map((slide, i) => (
                <button
                  key={slide._key}
                  type="button"
                  aria-pressed={i === index}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? 'h-2.5 w-8 rounded-full bg-brand-pacific transition-all duration-300'
                      : 'h-2.5 w-2.5 rounded-full bg-brand-dust transition-all duration-300 hover:bg-brand-stone'
                  }
                  aria-label={`Ga naar ${slide.title}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col text-left">
            <h2 className="heading-rule text-brand-shadow font-medium">
              {headingLines.map((line, i) => (
                <span
                  key={i}
                  className="block"
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </h2>
            {subheading ? (
              <p className="mt-6 max-w-xl text-brand-stone leading-relaxed">
                {subheading}
              </p>
            ) : null}

            <div
              key={active._key}
              className="mt-10 space-y-3 transition-opacity duration-500"
              aria-live="polite"
              aria-atomic="true"
            >
              <h3 className="text-xl font-medium tracking-tight text-brand-shadow md:text-2xl">
                {active.title}
              </h3>
              <p className="max-w-xl text-brand-stone leading-relaxed">
                {active.caption}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-dust bg-brand-white text-brand-stone shadow-soft transition-colors hover:border-brand-pacific hover:text-brand-pacific"
                aria-label="Vorige impressie"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-dust bg-brand-white text-brand-stone shadow-soft transition-colors hover:border-brand-pacific hover:text-brand-pacific"
                aria-label="Volgende impressie"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative divider — zelfde patroon als onderaan intro */}
        <div className="mt-20 flex items-center gap-6" aria-hidden="true">
          <div className="flex-1 h-px bg-brand-dust" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-pacific" />
          <div className="flex-1 h-px bg-brand-dust" />
        </div>
      </div>
    </section>
  )
}
