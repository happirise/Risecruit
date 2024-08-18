import Logo from '@/shared/Logo';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SignIn from './signin';
import SignUp from './signup';

type Props = Readonly<{
  session: Session | null;
}>;

export default function PcNavBar({ session }: Props) {
  const user = session?.user;

  return (
    <nav className="w-screen bg-white fixed top-0 px-8 hidden md:block">
      <div className="h-14 max-w-[75rem] m-auto flex items-center justify-between">
        <Logo />
        {session ? (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar>
                  <AvatarImage src={user?.image || ''} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-2">
            <SignIn session={session} />
            <SignUp session={session} />
          </div>
        )}
      </div>
    </nav>
  );
}
