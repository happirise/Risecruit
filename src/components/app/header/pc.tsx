import Logo from '@/shared/Logo';
import { signIn, signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type Props = Readonly<{
  loginState: boolean;
  name: string;
  deleteUserInfo: () => void;
}>;

export default function PcNavBar({ loginState, name, deleteUserInfo }: Props) {
  return (
    <nav className="w-screen bg-white fixed top-0 px-8 hidden md:block">
      <div className="h-14 max-w-[75rem] m-auto flex items-center justify-between">
        <Logo />
        {loginState ? (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <HamburgerMenuIcon width={24} height={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    deleteUserInfo();
                    signOut();
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </div>
    </nav>
  );
}
