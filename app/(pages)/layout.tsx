import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/lib/data/site-config'
import { navigationData } from '@/lib/data/navigation'

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header siteName={siteConfig.name} navLinks={navigationData.primary} />
      <main className="flex-1">{children}</main>
      <Footer navigation={navigationData.footer} siteName={siteConfig.name} />
    </>
  )
}
