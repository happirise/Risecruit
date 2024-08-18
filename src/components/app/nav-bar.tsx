'use client';

import { useSession } from 'next-auth/react';
import PcNavBar from './nav-bar/pc';
import MobileNavBar from './nav-bar/mobile';

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <>
      <PcNavBar session={session} />
      <MobileNavBar />
    </>
  );
}
