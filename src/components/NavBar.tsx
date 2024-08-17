'use client';

import { useSession } from 'next-auth/react';
import { Logo } from '../shared/Logo';

export const NavBar = () => {
  const { data: session } = useSession();
  return (
    <>
      {/* PC Nav */}
      <nav className="border-b h-14 bg-white px-8 hidden md:flex items-center">
        <Logo size="text-3xl" />
      </nav>
      {/* Mobile Nav */}
      <nav className="border-b h-16 bg-white md:hidden items-center fixed bottom-0 w-screen border-t grid grid-cols-5 text-center pt-2 pb-5 text-xs">
        <a className="h-full flex items-center bg-blue-100">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 1</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-200">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 2</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-300">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 3</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-400">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 4</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-500">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 5</span>
          </div>
        </a>
      </nav>
      {session ? 'logout' : 'login'}
    </>
  );
};
