'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import styled, { keyframes } from 'styled-components';
import Logo from '@/shared/Logo';
import Image from 'next/image';

const smoothScroll = keyframes`
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  60% {
    transform: translateX(0%);
    opacity: 1;
  }
  80% {
    transform: translateX(-50%);
    opacity: 1;
  }
  85% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  width: 100%;
  position: absolute;
  animation: ${smoothScroll} 8000ms cubic-bezier(0.4, 0, 0.2, 1) infinite;

  &:nth-child(2) {
    animation-delay: 4000ms;
  }
`;

const AuthButton = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
  height: 3rem;
  border-radius: 0.5rem;
  width: 60%;
`;

const OAUTH_PROVIDER = [
  {
    id: 'google',
    name: 'Google',
    color: 'bg-white text-gray-500',
    image: {
      src: '/images/auth/google.svg',
      size: 24,
      style: '',
    },
  },
  {
    id: 'line',
    name: 'LINE',
    color: 'bg-[#06C755] text-white',
    image: {
      src: '/images/auth/LINE.svg',
      size: 38,
      style: '-mt-1.5',
    },
  },
];

type Props = Readonly<{
  category: 'signin' | 'signup';
  handler: (event: React.MouseEvent<HTMLDivElement>) => void;
}>;

export default function AuthView({ category, handler }: Props) {
  const categoryTexts = {
    signin: 'Sign in',
    signup: 'Sign up',
  };

  const triggerButtonVariant: Record<
    'signin' | 'signup',
    'outline' | 'default'
  > = {
    signin: 'outline',
    signup: 'default',
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerButtonVariant[category]} className="h-9">
          {categoryTexts[category]}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Logo suffix={` ${categoryTexts[category]}`} />
          </DialogTitle>
          <DialogDescription className="pt-3 relative h-8 overflow-hidden">
            <AnimatedSpan>👔 企業の方は採用がより楽に</AnimatedSpan>
            <AnimatedSpan className="opacity-0">
              📚 学生の方は就活がより楽しく
            </AnimatedSpan>
          </DialogDescription>
        </DialogHeader>
        {/* <div></div> */}
        <div className="mt-3 grid gap-4 grid-rows-2">
          {OAUTH_PROVIDER.map(
            ({ id, name, color, image: { src, size, style } }) => (
              <AuthButton
                key={id}
                id={id}
                className={`${color} cursor-pointer drop-shadow-lg`}
                onClick={handler}
              >
                <div className="m-auto flex align-center -mt-1">
                  <Image
                    src={src}
                    alt={name}
                    width={size}
                    height={size}
                    className={style}
                  />
                  <div className="ml-3 font-bold">
                    {categoryTexts[category]} with {name}
                  </div>
                </div>
              </AuthButton>
            ),
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
