'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { Dispatch, SetStateAction, useRef } from 'react';
import { links } from './navbar';

interface stateProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenu({ show, setShow }: stateProps) {
  const navMenu = useRef(null);

  useGSAP(() => {
    gsap.from(navMenu.current, {
      opacity: 0,
      right: '-100%',
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div
      className="absolute min-h-screen w-full top-0 right-0 bg-neutral-950/90 backdrop-blur-sm z-10 grid place-items-center place-content-center"
      ref={navMenu}>
      <button
        type="button"
        className="absolute top-4 right-4 z-10"
        onClick={() => setShow(!show)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-x text-white">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <ul className="grid gap-6 place-items-center font-medium capitalize py-6 md:hidden">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="hover:text-rose-500 transition duration-200 text-neutral-100">
            {link.path}
          </Link>
        ))}
      </ul>
    </div>
  );
}
