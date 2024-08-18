import AuthView from './auth-view';
import { Session } from 'next-auth';

type Props = Readonly<{
  session: Session | null;
}>;

export default function SignUp({ session }: Props) {
  const handleSignUp = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget as HTMLDivElement;

    switch (id) {
      case 'google':
        console.log('google signup');
        break;
      case 'line':
        alert('準備中です');
        break;
      default:
        console.error('Invalid signup method');
        break;
    }
  };

  return <AuthView category="signup" handler={handleSignUp} />;
}
