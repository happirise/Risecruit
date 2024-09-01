import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

type RequestBody = Readonly<{
  provider: 'google';
  access_token: string;
  expires_at: number;
  error?: string;
}>;

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { error } = body;

  if (error) {
    return new NextResponse(JSON.stringify({ error: error }), { status: 400 });
  }

  const { provider, access_token, expires_at } = body;

  if (provider !== 'google') {
    return new NextResponse(JSON.stringify({ error: 'Invalid provider' }), {
      status: 400,
    });
  }

  if (expires_at < Date.now() / 1000) {
    return new NextResponse(JSON.stringify({ error: 'Expired token' }), {
      status: 400,
    });
  }

  const res = await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  const data = await res.json();

  if (data && !data.verified_email) {
    return new NextResponse(JSON.stringify({ error: 'Email not verified' }), {
      status: 400,
    });
  }

  if (data) {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (user) {
      const { password, ...result } = user;

      return new NextResponse(JSON.stringify(result));
    }
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: '',
      provider: 'GOOGLE',
    },
  });

  const { password, ...result } = user;

  return new NextResponse(JSON.stringify(result));
}
