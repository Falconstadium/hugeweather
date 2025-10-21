'use client';

import About from '@/components/about';
import Catalogue from '@/components/catalogue';
import Destinations from '@/components/destinations';
import Footer from '@/components/footer';
import Hero from '@/components/hero-section';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/testimonials';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.from('#desti', {
      scrollTrigger: '#desti',
      scale: 0.7,
      rotate: 7,
      duration: 1,
      ease: 'power2.in',
    });

    gsap.from('#about', {
      scrollTrigger: '#about',
      scale: 0.7,
      rotate: -5,
      duration: 1,
      ease: 'power2.in',
    });
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      <main className="min-h-dvh bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/anders-jilden-cYrMQA7a3Wc-unsplash.jpg')] bg-no-repeat bg-cover bg-center grid grid-rows-[auto_1fr_auto] sticky top-0">
        <Navbar />
        <Hero />
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
      </main>
      {/* <main className="sticky top-0 min-h-dvh bg-gradient-to-br from-neutral-950 to-slate-950 text-neutral-100"></main> */}
      <main className="sticky top-0 min-h-dvh text-neutral-100">
        <div className="bg-neutral-950" id="desti">
          <Destinations />
        </div>
        <div className="bg-gray-950" id="about">
          <About />
        </div>
        <div className="bg-neutral-950">
          <Testimonials />
        </div>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg')] bg-no-repeat bg-cover bg-center">
          <Catalogue />
        </div>
        <div className="bg-neutral-950">
          <Footer />
        </div>
      </main>
    </div>
  );
}
