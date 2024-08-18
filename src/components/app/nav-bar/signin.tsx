import { signIn } from 'next-auth/react';
import AuthView from './auth-view';
import { Session } from 'next-auth';

type Props = Readonly<{
  session: Session | null;
}>;

export default function SignIn({ session }: Props) {
  const handleSignIn = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget as HTMLDivElement;

    switch (id) {
      case 'google':
        signIn('google');
        break;
      case 'line':
        alert('準備中です');
        break;
      default:
        console.error('Invalid signin method');
        break;
    }
  };

  return <AuthView category="signin" handler={handleSignIn} />;
}
