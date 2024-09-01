import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

type RequestBody = Readonly<{
  name: string;
  email: string;
  password: string;
}>;

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const SALT_ROUNDS = 10;
  const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        provider: 'CREDENTIALS',
      },
    });

    const { password, ...result } = user;
    return new NextResponse(JSON.stringify(result));
  } catch (error) {
    // Error code P2002 is for unique constraint violation
    if ((error as { code?: string })?.code === 'P2002') {
      return new NextResponse(
        JSON.stringify({ message: 'Email already exists' }),
        { status: 409 },
      );
    }

    return new NextResponse(JSON.stringify({ message: 'Bad Request' }), {
      status: 400,
    });
  }
}
