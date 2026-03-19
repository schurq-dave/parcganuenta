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
          azo-sans-web is an Adobe Fonts (Typekit) typeface.
          Replace the kit ID below with your own from fonts.adobe.com.
          Once active, the font is available as 'azo-sans-web' — already
          set as --font-sans in globals.css.
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
