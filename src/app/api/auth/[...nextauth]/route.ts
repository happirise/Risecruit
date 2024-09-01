import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/sign-in`,
            {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' },
            },
          );
          const user = await res.json();

          if (res.ok && user) {
            return user;
          }

          return null;
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET || '',
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'google') {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/sign-in/google`,
          {
            method: 'POST',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const user = await res.json();

        if (res.ok && user) {
          return { ...token, ...user };
        }

        return null;
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24,
    secret: process.env.SECRET_KEY || '',
  },
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
