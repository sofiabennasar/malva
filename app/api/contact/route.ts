import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, category, product, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Estudio Malva <no-reply@estudiomalva.com>',
      to: 'sales@estudiomalva.com',
      replyTo: email,
      subject: `New inquiry${product ? ` — ${product}` : ''}${category ? ` (${category})` : ''}`,
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Category: ${category || '—'}
Product: ${product || '—'}

${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
