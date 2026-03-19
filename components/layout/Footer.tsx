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
      <div className="container-site py-16 md:py-20">
        {/* Top — wordmark + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div>
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
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-4">
              Exclusieve wellness vakantievilla&apos;s aan de Oosterschelde in Zeeland.
            </p>
            {/* Pacific accent line */}
            <div className="mt-6 h-px w-8 bg-brand-pacific" aria-hidden="true" />
          </div>

          {/* Nav columns */}
          {navigation.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-white/30 mb-5">
                {column.heading}
              </h3>
              <ul className="space-y-3 list-none m-0 p-0">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — copyright + legal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/30">{navigation.copyright}</p>

          <nav aria-label="Juridische links">
            <ul className="flex flex-wrap gap-5 list-none m-0 p-0">
              {navigation.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-brand-platinum/30 hover:text-brand-platinum/60 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
