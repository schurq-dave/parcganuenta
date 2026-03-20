import type { NavigationData } from '@/lib/types/navigation'

export const navigationData: NavigationData = {
  primary: [
    { label: 'Stadsvilla kopen', href: '/stadsvilla-kopen' },
    { label: 'Verhuur', href: '/verhuur' },
    { label: 'Omgeving', href: '/omgeving' },
    { label: 'Nieuws', href: '/nieuws' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact', isButton: true },
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
    socials: [
      { 
        platform: 'Facebook', 
        href: 'https://facebook.com/parcganuenta',
        icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 011-1h3z'
      },
      { 
        platform: 'Instagram', 
        href: 'https://instagram.com/parcganuenta',
        icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A1.5 1.5 0 0119 8v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 19V8a1.5 1.5 0 011.5-1.5z'
      },
      { 
        platform: 'LinkedIn', 
        href: 'https://linkedin.com/company/parcganuenta',
        icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z'
      }
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
