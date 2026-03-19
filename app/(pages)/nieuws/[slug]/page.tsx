import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data/pages/nieuws'
import { buildMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/data/site-config'
import { webPageJsonLd, breadcrumbJsonLd } from '@/lib/seo/jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return buildMetadata(post.seo)
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <>
      <JsonLd data={webPageJsonLd(post.seo, siteConfig)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { label: 'Home', href: '/' },
            { label: 'Nieuws', href: '/nieuws' },
            { label: post.title, href: `/nieuws/${post.slug}` },
          ],
          siteConfig.url
        )}
      />
      <article>
        {/* Blog post content will be added when content is ready */}
      </article>
    </>
  )
}
