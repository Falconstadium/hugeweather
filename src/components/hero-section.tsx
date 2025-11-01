'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import Navbar from './navbar';

export default function Hero() {
  const heroContainer = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(SplitText);

  useGSAP(
    () => {
      if (!heroContainer.current) {
        return;
      }
      const children = gsap.utils.toArray(heroContainer.current?.children);

      gsap.from(children, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.5,
      });

      let split = SplitText.create('#title', { type: 'words, chars' });

      // now animate the characters in a staggered fashion
      gsap.from(split.chars, {
        duration: 1,
        y: 100, // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05, // 0.05 seconds between each
      });
    },
    { scope: heroContainer }
  );

  return (
    <>
      <Navbar />
      <section className="grid place-items-center place-content-center px-8 py-20 md:py-0 md:px-0 gap-6 max-w-2xl mx-auto">
        <div className="grid gap-4 text-center" ref={heroContainer}>
          <h3
            className="font-bold text-4xl md:text-6xl md:leading-13 uppercase text-neutral-100 text-shadow font-gambetta"
            id="title">
            Tropical escapes that won&#39;t break the bank
          </h3>
          <p
            className="text-sm text-neutral-300 font-medium md:text-base"
            id="desc">
            Discover paradise without emptying your wallet. We hunt the best
            tropical destinations for adventurous women seeking unforgettable
            experiences.
          </p>
          <div className="flex items-center justify-center gap-4" id="btn">
            <button
              type="button"
              className="bg-neutral-100 rounded-2xl py-1.5 px-4 text-sm font-medium  transition duration-200 ease-in-out hover:bg-neutral-300 active:bg-neutral-300">
              Explore
            </button>
            <button
              type="button"
              className="border border-neutral-100 text-neutral-100 rounded-2xl py-1.5 px-4 text-sm font-medium transition duration-200 ease-in-out hover:bg-neutral-950 hover:border-transparent active:bg-neutral-800/50">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="size-6 text-rose-500 animate-bounce mx-auto mb-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </>
  );
}
