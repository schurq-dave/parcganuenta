'use client'

import { useState } from 'react'
import { VillaCard } from './VillaCard'
import type { VillaCard as VillaCardProps } from '@/lib/types/pages/home'

export function VillaCardGrid({ villas }: { villas: VillaCardProps[] }) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {villas.map((villa) => {
        const isHovered = hoveredKey === villa._key
        const isDimmed = hoveredKey !== null && !isHovered

        return (
          <div
            key={villa._key}
            onMouseEnter={() => setHoveredKey(villa._key)}
            onMouseLeave={() => setHoveredKey(null)}
            className="transition-all duration-500 ease-in-out"
            style={{
              transform: isHovered ? 'scale(1.03)' : isDimmed ? 'scale(0.97)' : 'scale(1)',
              opacity: isDimmed ? 0.75 : 1,
            }}
          >
            <VillaCard {...villa} />
          </div>
        )
      })}
    </div>
  )
}
