'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import Link from 'next/link';

export default function Navbar() {
  gsap.registerPlugin(useGSAP, SplitText);
  useGSAP(() => {
    SplitText.create('#name', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#link', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });
  }, []);

  const links = [
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

  return (
    <header className="py-4 px-4 lg:px-0">
      <nav className="flex items-center justify-between max-w-5xl mx-auto text-neutral-100">
        <Link href={'/'} className="font-bold text-2xl capitalize" id="name">
          huge weather
        </Link>
        <ul className="flex items-center gap-6 font-medium text-sm capitalize">
          {links.map((link) => (
            <Link
              id="link"
              key={link.id}
              href={link.href}
              className="hover:text-rose-500 transition duration-200">
              {link.path}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
