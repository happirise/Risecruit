import prisma from '@/app/lib/prisma';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

type RequestBody = Readonly<{
  email: string;
  password: string;
}>;

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...result } = user;

    return new NextResponse(JSON.stringify(result));
  }

  return new NextResponse(JSON.stringify(null));
}
