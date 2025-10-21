'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Link from 'next/link';

export default function Destinations() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  useGSAP(() => {
    SplitText.create('#title1', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: '#title1',
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#title2', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: '#title2',
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#text', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: '#text',
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    gsap.from('#place', {
      scrollTrigger: {
        trigger: '#img',
        start: 'top 85%',
      },
      width: 0,
      duration: 1,
    });
  }, []);

  return (
    <section className="px-6 py-20 container mx-auto grid gap-6">
      <div className="grid gap-4 text-center">
        <h3
          className=" capitalize bg-clip-text text-orange-500 font-medium"
          id="title1">
          trending destinations
        </h3>
        <h3
          className="font-bold text-2xl md:text-5xl font-monts capitalize"
          id="title2">
          Top tropical getaways for the bold traveler
        </h3>
        <p className="text-neutral-300 text-sm" id="text">
          Uncover breathtaking locations that promise adventure and relaxation
          in equal measure.
        </p>
      </div>

      <div className="grid gap-6 place-items-center" id="img">
        <div
          className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/heidi-kaden-kYxgm42SQso-unsplash.jpg')] bg-cover bg-center rounded w-full h-52 relative max-w-lg mx-auto origin-bottom-left"
          id="place">
          <div className="p-4 grid absolute bottom-0">
            <h4 className="font-bold text-xl">Santorini</h4>
            <p className="text-sm text-neutral-300 font-medium">
              Romantic sunset & white architecture
            </p>
          </div>
        </div>
        <Link href={'/destinations'}>See More</Link>
      </div>
    </section>
  );
}
