'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import Navbar from './navbar';

export default function Hero() {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    SplitText.create('#title', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
          ease: 'power1.in',
        });
      },
    });

    SplitText.create('#desc', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
          ease: 'power2.in',
        });
      },
    });

    gsap.from('#btn button', {
      opacity: 0,
      y: -50,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.in',
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="grid place-items-center place-content-center px-4 py-20 md:py-0 md:px-0 gap-6 max-w-2xl mx-auto">
        <div className="grid gap-4 text-center">
          <h3
            className="font-bold text-3xl md:text-6xl uppercase text-neutral-100 text-shadow font-monts"
            id="title">
            Tropical escapes that won&#39;t break the bank
          </h3>
          <p className="text-sm text-neutral-300 font-medium" id="desc">
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
              className="border border-neutral-100 text-neutral-100 rounded-2xl py-1.5 px-4 text-sm font-medium transition duration-200 ease-in-out hover:bg-neutral-900 hover:border-transparent active:bg-neutral-800/50">
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
