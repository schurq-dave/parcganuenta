'use client'

import { useState } from 'react'
import type { FaqSection as FaqSectionProps } from '@/lib/types/pages/home'

export function FaqSection({ label, heading, items }: FaqSectionProps) {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenKey(prev => (prev === key ? null : key))
  }

  return (
    <section className="section-padding bg-brand-white" aria-label="Veelgestelde vragen">
      <div className="container-site-wide">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2
            className="heading-rule max-w-xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>

        {/* Accordion */}
        <div className="w-full">
          {items.map((item, index) => {
            const isOpen = openKey === item._key
            return (
              <div
                key={item._key}
                className={`border-t border-brand-dust ${index === items.length - 1 ? 'border-b' : ''}`}
              >
                <button
                  onClick={() => toggle(item._key)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-sans text-base font-medium text-brand-shadow group-hover:text-brand-pacific transition-colors duration-200">
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-dust flex items-center justify-center text-brand-stone group-hover:border-brand-pacific group-hover:text-brand-pacific transition-all duration-200"
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-6 text-brand-stone leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
