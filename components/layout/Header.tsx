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
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  const isSolid = !transparent || scrolled || menuOpen

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isSolid
          ? 'bg-brand-white border-b border-brand-dust shadow-soft'
          : 'bg-transparent border-b border-white/10',
      ].join(' ')}
    >
      <div className="container-site-wide">
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
                  {link.isButton ? (
                    <Link 
                      href={link.href} 
                      className={[
                        'text-xs font-medium tracking-wider uppercase px-6 py-2.5 rounded-full border transition-colors duration-300',
                        isSolid 
                          ? 'border-brand-stone text-brand-stone hover:bg-brand-stone hover:border-brand-stone hover:text-white' 
                          : 'border-white text-white hover:bg-brand-stone hover:border-brand-stone hover:text-white'
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  ) : (
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
                  )}
                </li>
              ))}
              
              {/* Language Selector */}
              <li className="relative">
                <button 
                  aria-label="Kies taal"
                  onClick={() => setLangOpen(!langOpen)}
                  className={[
                    'flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300',
                    isSolid 
                      ? 'bg-white text-brand-stone border border-brand-dust hover:bg-brand-taupe hover:text-white hover:border-brand-taupe' 
                      : 'bg-white text-brand-stone hover:bg-brand-taupe hover:text-white'
                  ].join(' ')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div 
                  className={[
                    'absolute right-0 top-full mt-2 w-36 bg-brand-white rounded-2xl border border-brand-dust overflow-hidden transition-all duration-300 origin-top',
                    langOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                  ].join(' ')}
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="flex flex-col py-2">
                    <button 
                      className="px-4 py-2.5 text-sm text-left text-brand-stone hover:bg-brand-platinum hover:text-brand-shadow transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      EN — English
                    </button>
                    <button 
                      className="px-4 py-2.5 text-sm text-left text-brand-stone hover:bg-brand-platinum hover:text-brand-shadow transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      DE — Deutsch
                    </button>
                  </div>
                </div>
              </li>
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
                    className={link.isButton
                      ? 'block px-4 py-4 text-sm font-medium text-brand-stone hover:text-brand-shadow transition-colors'
                      : 'block px-4 py-4 text-sm text-brand-stone hover:text-brand-shadow hover:bg-brand-platinum transition-colors'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-b border-brand-platinum last:border-0">
                <button 
                  className="w-full text-left flex items-center gap-3 px-4 py-4 text-sm text-brand-stone hover:text-brand-shadow hover:bg-brand-platinum transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  Taal wijzigen
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
