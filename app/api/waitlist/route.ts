import { NextResponse } from 'next/server'

const allowedRoles = new Set(['pilot', 'cabin-crew'])

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const role = typeof body.role === 'string' ? body.role : ''

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    if (!allowedRoles.has(role)) {
      return NextResponse.json({ error: 'A valid crew role is required.' }, { status: 400 })
    }

    // TODO: Replace this placeholder with Supabase, Airtable, Resend, or your CRM.
    // Keeping the API boundary now makes the frontend production-ready for backend integration later.
    if (process.env.NODE_ENV !== 'production') {
      console.info('[waitlist]', { email, role })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
  }
}
