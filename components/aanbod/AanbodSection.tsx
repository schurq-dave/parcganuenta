import type { AanbodSection as AanbodSectionProps } from '@/lib/types/pages/home'
import { VillaCardGrid } from './VillaCardGrid'

export function AanbodSection({ label, heading, subheading, villas }: AanbodSectionProps) {
  return (
    <section className="section-padding-lg bg-brand-white" aria-label="Ons aanbod">
      <div className="container-site-wide">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="label-style mb-5">{label}</p>
          <h2 
            className="heading-rule text-brand-shadow font-medium mb-6"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="text-brand-stone leading-relaxed">{subheading}</p>
        </div>

        {/* Villa cards grid */}
        <VillaCardGrid villas={villas} />
      </div>
    </section>
  )
}
