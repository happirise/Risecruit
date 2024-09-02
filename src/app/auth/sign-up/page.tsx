'use client';

import { Label } from '@/components/ui/label';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import useUserInfo from '@/hooks/useUserInfo';

export default function SignUp() {
  const router = useRouter();
  const { setUserInfo } = useUserInfo();
  const { data: session } = useSession();
  const [infoEntered, setInfoEntered] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (session) {
      const { user } = session;
      setUserInfo(user);
      router.push('/');
    }
  }, [session, router, setUserInfo]);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      setInfoEntered(true);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const password = (
      e.currentTarget.elements.namedItem('password') as HTMLInputElement
    ).value;
    const result = await fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const user = await result.json();
    if (result.ok && user) {
      await signIn('credentials', { email, password, redirect: false });
    }

    switch (result.status) {
      case 409:
        const { message } = user;
        setErrorMsg(message);
        break;
      default:
        setErrorMsg('Something went wrong. Please try again.');
        break;
    }
  };

  return (
    <>
      <title>Risecruit | Sign Up</title>
      <div className="z-50 flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>{' '}
          {errorMsg && (
            <p className="text-red-500 text-center text-sm mb-4">{errorMsg}</p>
          )}
          <form
            className="space-y-4"
            onSubmit={infoEntered ? handleSignUp : handleEmailSubmit}
          >
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </Label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <Label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </Label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Transition
              show={infoEntered}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="relative">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-8 right-0 pr-3 mt-1"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <EyeOpenIcon className="h-4.5 w-4.5" />
                  ) : (
                    <EyeClosedIcon className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </Transition>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-150"
            >
              {infoEntered ? 'Sign Up' : 'Continue'}
            </button>
            <div className="flex items-center my-4 text-sm">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button
              type="button"
              className="w-full bg-white text-black py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 flex justify-center items-center"
              onClick={() => signIn('google')}
            >
              <Image
                width={15}
                height={15}
                src="/images/auth/google-icon.svg"
                alt="Google"
                className="mr-2"
              />
              Continue with Google
            </button>
            {/* <button
            type="button"
            className="w-full bg-white text-black py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 flex justify-center items-center"
          >
            <img src="/github-icon.svg" alt="GitHub" className="h-5 mr-2" />
            Continue with GitHub
          </button> */}
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account?
            <a
              href="/auth/sign-in"
              className="text-indigo-600 hover:text-indigo-900 ml-1"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
