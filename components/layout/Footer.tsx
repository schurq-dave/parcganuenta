'use client'

import Link from 'next/link'
import type { NavigationData } from '@/lib/types/navigation'
import type { SiteConfig } from '@/lib/types/site-config'

interface FooterProps {
  navigation: NavigationData['footer']
  siteName: SiteConfig['name']
}

export function Footer({ navigation, siteName }: FooterProps) {
  return (
    <footer className="bg-brand-shadow" aria-label="Sitenavigatie en juridische informatie">
      <div className="container-site-wide py-16 md:py-20">
        {/* Top — wordmark + nav columns + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block transition-opacity duration-300 hover:opacity-80 mb-4"
              aria-label={`${siteName} — home`}
            >
              <img 
                src="/images/logo-white.svg" 
                alt={siteName} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mt-4">
              Exclusieve wellness vakantievilla&apos;s aan de Oosterschelde in Zeeland.
            </p>
            {/* Pacific accent line */}
            <div className="mt-6 h-px w-8 bg-brand-pacific" aria-hidden="true" />
          </div>

          {/* Nav columns */}
          {navigation.columns.map((column) => (
            <div key={column.heading} className="md:col-span-1">
              <h3 className="text-xs font-medium uppercase tracking-widest text-brand-platinum mb-5">
                {column.heading}
              </h3>
              <ul className="space-y-3 list-none m-0 p-0">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-dust hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-medium uppercase tracking-widest text-brand-platinum mb-5">
              Nieuwsbrief
            </h3>
            <p className="text-sm text-brand-dust mb-4 leading-relaxed">
              Blijf op de hoogte van het laatste nieuws en exclusieve aanbiedingen.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-2.5">
                <input 
                  type="email" 
                  placeholder="Uw e-mailadres" 
                  required
                  className="flex-1 bg-transparent border border-brand-stone rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-pacific focus:bg-white/5 transition-colors"
                />
                <button 
                  type="submit"
                  aria-label="Aanmelden nieuwsbrief"
                  className="group flex-shrink-0 flex items-center justify-center w-[46px] h-[46px] bg-brand-white text-brand-shadow rounded-full hover:bg-brand-taupe hover:text-white transition-all duration-300"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:rotate-45"
                  >
                    <path d="M3 13 L13 3 M6 3 h7 v7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom — copyright + legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <p className="text-xs text-white/50">{navigation.copyright}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            <nav aria-label="Juridische links">
              <ul className="flex flex-wrap gap-5 list-none m-0 p-0">
                {navigation.legal.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>

            {/* Socials */}
            <nav aria-label="Social media">
              <ul className="flex items-center gap-4 list-none m-0 p-0">
                {navigation.socials.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                      aria-label={`Volg ons op ${social.platform}`}
                    >
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
