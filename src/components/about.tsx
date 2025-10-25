import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';

export default function About() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    SplitText.create('#title3', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom 80%',
          },
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#text1', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom 80%',
          },
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    const tl = gsap.timeline();

    tl.from('#first', { opacity: 0, y: 50, duration: 1 });
    ScrollTrigger.create({
      animation: tl,
      trigger: '#about',
      start: 'top 50%',
      end: 'bottom 80%',
    });
  });

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 lg:px-0 grid gap-16">
      <div className="grid place-items-center text-center gap-2">
        <h3
          className="font-semibold text-3xl md:text-5xl capitalize text-emerald-600 font-monts"
          id="title3">
          meet our travel experts
        </h3>
        <p className="font-medium text-neutral-500 text-sm" id="text1">
          Our passionate team of travel specialists curates unforgettable
          experiences just for you
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-x-8">
        <div className="grid place-items-center text-center gap-4" id="first">
          <Image
            src={'/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'}
            alt="woman"
            width={40}
            height={40}
            className="object-cover rounded-full size-20 md:size-28"
          />
          <div>
            <h5 className="font-medium">Sarah Chen</h5>
            <p className="text-sm text-neutral-300">Tropical Specialist</p>
            <span className="text-xs font-light text-neutral-400">
              15+ years exploring paradise destinations
            </span>
          </div>
        </div>
        <div className="grid place-items-center text-center gap-4" id="first">
          <Image
            src={'/vince-veras-AJIqZDAUD7A-unsplash.jpg'}
            alt="woman"
            width={40}
            height={40}
            className="object-cover rounded-full size-20 md:size-28"
          />
          <div>
            <h5>Zoe Thompson</h5>
            <p className="text-sm text-neutral-300">Cultural Expert</p>
            <span className="text-xs font-light text-neutral-400">
              Authentic local experiences curator
            </span>
          </div>
        </div>
        <div className="grid place-items-center text-center gap-4" id="first">
          <Image
            src={'/christian-buehner-DItYlc26zVI-unsplash.jpg'}
            alt="woman"
            width={40}
            height={40}
            className="object-cover rounded-full size-20 md:size-28"
          />
          <div>
            <h5>John Park</h5>
            <p className="text-sm text-neutral-300">Adventure Guide</p>
            <span className="text-xs font-light text-neutral-400">
              Thrill-seeking destination expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
