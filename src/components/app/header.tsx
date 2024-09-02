'use client';

import { useSession } from 'next-auth/react';
import PcNavBar from './header/pc';
import MobileNavBar from './header/mobile';
import useUserInfo from '@/hooks/useUserInfo';
import { useEffect } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const {
    userInfo: { id, name, email },
    deleteUserInfo,
    isLoggedIn,
  } = useUserInfo();

  useEffect(() => {
    if (!session) {
      deleteUserInfo();
    }
  }, [session, deleteUserInfo]);

  const loginState = !!(session && isLoggedIn && id && name && email);

  return (
    <header className="z-10">
      <PcNavBar
        loginState={loginState}
        name={name}
        deleteUserInfo={deleteUserInfo}
      />
      <MobileNavBar />
    </header>
  );
}
