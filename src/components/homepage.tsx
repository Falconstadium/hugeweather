'use client';

import About from '@/components/about';
import Catalogue from '@/components/catalogue';
import Destinations from '@/components/destinations';
import Footer from '@/components/footer';
import Hero from '@/components/hero-section';
import Testimonials from '@/components/testimonials';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomePage() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('#hero', {
      rotate: 2,
      scale: 0.9,
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: '#hero',
      start: 'top top',
      end: 'bottom 80%',
      scrub: 1,
    });

    const desti = gsap.timeline();
    desti.to('#desti', {
      rotate: -2,
      scale: 0.9,
    });
    ScrollTrigger.create({
      animation: desti,
      trigger: '#desti',
      start: 'top top',
      end: 'bottom 80%',
      scrub: 1,
    });
  });

  return (
    <div className="font-sans scroll-smooth overflow-x-hidden bg-black">
      <main
        className="min-h-dvh bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/anders-jilden-cYrMQA7a3Wc-unsplash.jpg')] bg-no-repeat bg-cover bg-center grid grid-rows-[auto_1fr_auto] sticky top-0"
        id="hero">
        <Hero />
      </main>
      <main
        className="sticky top-0 min-h-dvh bg-gradient-to-br from-neutral-950 to-slate-950 text-neutral-100"
        id="desti">
        <Destinations />
      </main>
      <main className="sticky top-0 min-h-dvh text-neutral-100">
        <div
          className="bg-gradient-to-br from-neutral-950 to-gray-950"
          id="about">
          <About />
        </div>
        <div
          className="bg-gradient-to-br from-neutral-950 to-gray-950"
          id="testimonial">
          <Testimonials />
        </div>
        <div
          className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg')] bg-no-repeat bg-cover bg-center"
          id="catalogue">
          <Catalogue />
        </div>
        <div
          className="bg-gradient-to-br from-neutral-950 to-gray-950"
          id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}
