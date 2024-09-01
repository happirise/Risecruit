import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import AuthContext from '@/context/auth-context';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Risecruit',
  description: '👔 企業の方は採用がより楽に、📚 学生の方は就活がより楽しく',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <title>Risecruit</title>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
