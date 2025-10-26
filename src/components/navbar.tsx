'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef, useState } from 'react';
import NavMenu from './nav-menu';

export const links = [
  {
    id: 1,
    href: '/',
    path: 'home',
  },
  {
    id: 2,
    href: '/',
    path: 'contact',
  },
  {
    id: 3,
    href: '/',
    path: 'blog',
  },
  {
    id: 4,
    href: '/',
    path: 'products',
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  const nameRef = useRef(null);
  const menuRef = useRef(null);
  const linkRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.from(nameRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power1.out',
    });

    gsap.from(menuRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power1.out',
    });

    if (!linkRef.current) return;

    const children = gsap.utils.toArray(linkRef.current?.children);
    gsap.from(children, {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.05,
      ease: 'power2.out',
    });
  }, []);

  return (
    <header className="py-4 px-6 lg:px-0">
      <nav className="flex items-center justify-between max-w-5xl mx-auto text-neutral-100">
        <Link
          href={'/'}
          className="font-bold text-2xl capitalize"
          ref={nameRef}>
          huge weather
        </Link>
        <ul
          className="hidden md:flex items-center gap-6 font-medium text-sm capitalize"
          ref={linkRef}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="hover:text-rose-500 transition duration-200">
              {link.path}
            </Link>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden"
          ref={menuRef}
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </button>
      </nav>
      {show && <NavMenu show={show} setShow={setShow} />}
    </header>
  );
}
