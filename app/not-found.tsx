import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden',
  description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4">
        404
      </p>
      <h1 className="text-3xl font-medium text-neutral-900 mb-3">
        Pagina niet gevonden
      </h1>
      <p className="text-neutral-500 mb-8 max-w-md">
        De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-700 transition-colors"
      >
        Terug naar home
      </Link>
    </main>
  )
}
