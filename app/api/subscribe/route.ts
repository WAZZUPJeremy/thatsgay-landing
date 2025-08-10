import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, hp } = await req.json();
    if (hp && hp.length > 0) {
      // Honeypot triggered – pretend success
      return NextResponse.json({ ok: true });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }
    const url = process.env.APPS_SCRIPT_URL;
    if (!url) {
      return NextResponse.json({ ok: false, error: 'missing_backend' }, { status: 500 });
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, ts: Date.now() }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'upstream_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'unexpected' }, { status: 500 });
  }
}
