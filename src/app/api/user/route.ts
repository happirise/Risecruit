import prisma from '@/app/lib/prisma';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const token = await getToken({
    req: req as any,
    secret: process.env.SECRET_KEY,
  });

  const isAuthenticated = !!token;
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = token as { id: number };
  const user = await prisma.user.findUnique({
    where: { id },
  });

  const userResumes = await prisma.resume.findMany({
    where: { user_id: id },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const { password, ...result } = user;

  return NextResponse.json({ user: result, userResumes });
}
