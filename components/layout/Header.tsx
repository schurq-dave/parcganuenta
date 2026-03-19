'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { NavLink } from '@/lib/types/navigation'
import type { SiteConfig } from '@/lib/types/site-config'

interface HeaderProps {
  siteName: SiteConfig['name']
  navLinks: NavLink[]
  transparent?: boolean
}

export function Header({ siteName, navLinks, transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  const isSolid = !transparent || scrolled

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isSolid
          ? 'bg-brand-white border-b border-brand-dust shadow-soft'
          : 'bg-transparent border-b border-white/10',
      ].join(' ')}
    >
      <div className="container-site">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo / wordmark */}
          <Link
            href="/"
            aria-label={`${siteName} — home`}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src="/images/logo-white.svg" 
              alt={siteName} 
              className={[
                "h-8 md:h-10 w-auto transition-all duration-300",
                isSolid ? "brightness-0" : "brightness-100"
              ].join(' ')}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Hoofdnavigatie" className="hidden md:block">
            <ul className="flex items-center gap-[45px] list-none m-0 p-0 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      'text-xs font-medium tracking-wider uppercase transition-colors duration-300',
                      isSolid
                        ? 'text-brand-stone hover:text-brand-shadow'
                        : 'text-brand-platinum hover:text-white',
                    ].join(' ')}
                    style={!isSolid ? { color: 'var(--color-brand-platinum)' } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className={[
              'md:hidden p-2 rounded-sm transition-colors',
              isSolid ? 'text-brand-shadow' : 'text-white',
            ].join(' ')}
            aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="md:hidden bg-brand-white border-t border-brand-dust">
          <nav aria-label="Mobiele navigatie">
            <ul className="flex flex-col list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-brand-platinum last:border-0">
                  <Link
                    href={link.href}
                    className="block px-4 py-4 text-sm text-brand-stone hover:text-brand-shadow hover:bg-brand-platinum transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
