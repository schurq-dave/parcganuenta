import type { NavigationData } from '@/lib/types/navigation'

export const navigationData: NavigationData = {
  primary: [
    { label: 'Stadsvilla kopen', href: '/stadsvilla-kopen' },
    { label: 'Verhuur', href: '/verhuur' },
    { label: 'Omgeving', href: '/omgeving' },
    { label: 'Nieuws', href: '/nieuws' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    columns: [
      {
        heading: 'Ontdekken',
        links: [
          { label: 'Stadsvilla kopen', href: '/stadsvilla-kopen' },
          { label: 'Verhuur', href: '/verhuur' },
          { label: 'Omgeving', href: '/omgeving' },
        ],
      },
      {
        heading: 'Over ons',
        links: [
          { label: 'Over ons', href: '/over-ons' },
          { label: 'Nieuws', href: '/nieuws' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    legal: [
      { label: 'Privacybeleid', href: '/privacy' },
      { label: 'Cookiebeleid', href: '/cookies' },
      { label: 'Algemene voorwaarden', href: '/voorwaarden' },
    ],
    copyright: `© ${new Date().getFullYear()} Parc Ganuenta. Alle rechten voorbehouden.`,
  },
}

export const allPageSlugs: string[] = [
  '/',
  '/stadsvilla-kopen',
  '/verhuur',
  '/omgeving',
  '/nieuws',
  '/over-ons',
  '/contact',
  '/privacy',
  '/cookies',
  '/voorwaarden',
]
