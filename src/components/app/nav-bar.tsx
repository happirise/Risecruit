'use client';

import { useSession } from 'next-auth/react';
import PCNavBar from './nav-bar/pc';
import MobileNavBar from './nav-bar/mobile';

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <>
      <PCNavBar session={session} />
      <MobileNavBar />
    </>
  );
}
