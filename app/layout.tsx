import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="h-full">
      <head>
        {/*
          Adobe Fonts (Typekit) — beide fonts moeten in dezelfde kit zitten.
          Ga naar fonts.adobe.com, maak een kit aan met:
            - azo-sans-web  (body / UI)
            - forma-djr-display  (headings)
          Vervang YOUR_KIT_ID hieronder met de kit-ID uit fonts.adobe.com.
          Na activatie zijn de fonts beschikbaar als CSS font-family namen.
        */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
