import { Button } from '@/components/ui/button';
import Logo from '@/shared/Logo';
import { Session } from 'next-auth';

type Props = Readonly<{
  session: Session | null;
}>;

export default function PCNavBar({ session }: Props) {
  return (
    <nav className="w-screen bg-white fixed top-0 px-8 hidden md:block">
      <div className="h-14 max-w-[75rem] m-auto flex items-center justify-between">
        <Logo />
        {session ? (
          <>logout</>
        ) : (
          <>
            <Button>Sign up</Button>
          </>
        )}
      </div>
    </nav>
  );
}
