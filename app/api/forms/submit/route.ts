import { NextRequest, NextResponse } from 'next/server'

interface ContactFormPayload {
  name: string
  email: string
  phone?: string
  message: string
}

function isValidPayload(body: unknown): body is ContactFormPayload {
  if (typeof body !== 'object' || body === null) return false
  const b = body as Record<string, unknown>
  return (
    typeof b.name === 'string' &&
    typeof b.email === 'string' &&
    typeof b.message === 'string'
  )
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: 'Verplichte velden ontbreken.' },
        { status: 400 }
      )
    }

    // TODO: integrate email provider (Resend, Sendgrid, etc.)
    console.log('Contact form submission:', body)

    return NextResponse.json(
      { success: true, message: 'Bericht ontvangen.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}
