import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';

export default function Testimonials() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    SplitText.create('#title4', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#testimonial',
            start: 'top center',
            end: 'bottom 80%',
          },
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#text2', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#testimonial',
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

    tl.from('#testi1', { opacity: 0, y: 50, duration: 1 });
    ScrollTrigger.create({
      animation: tl,
      trigger: '#testimonial',
      start: 'top 30%',
      end: 'bottom 80%',
    });
  });

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 lg:px-0">
      <div className="grid place-items-center text-center gap-2 pb-10">
        <h3
          className="font-semibold text-3xl md:text-5xl capitalize font-monts"
          id="title4">
          what travelers say
        </h3>
        <p className="font-medium text-neutral-400 text-sm" id="text2">
          Real stories from women who discovered the world
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="grid gap-4 place-items-center" id="testi1">
          <h4 className="md:text-lg font-semibold text-center uppercase">
            this trip changed everything i thought i knew about travel.
          </h4>
          <div className="grid gap-1 place-items-center">
            <Image
              src={'/pexels-olly-3763188.jpg'}
              alt="pic"
              width={50}
              height={50}
              className="size-20 rounded-full object-cover"
            />
            <h5 className="text-sm font-medium">Sarah Martinez</h5>
            <p className="text-sm text-neutral-300">
              Marketing director, tech startup
            </p>
          </div>
        </div>
        <div className="grid gap-4 place-items-center" id="testi1">
          <h4 className="md:text-lg font-semibold text-center uppercase">
            never felt more alive than during my huge weather adventure.
          </h4>
          <div className="grid gap-1 place-items-center">
            <Image
              src={'/pexels-olly-3763188.jpg'}
              alt="pic"
              width={50}
              height={50}
              className="size-20 rounded-full object-cover"
            />
            <h5 className="text-sm font-medium">Emma Rodriguez</h5>
            <p className="text-sm text-neutral-300">Freelance photographer</p>
          </div>
        </div>
        <div className="grid gap-4 place-items-center" id="testi1">
          <h4 className="md:text-lg font-semibold text-center uppercase">
            affordable luxury that exceeded all my expectations.
          </h4>
          <div className="grid gap-1 place-items-center">
            <Image
              src={'/pexels-olly-3763188.jpg'}
              alt="pic"
              width={50}
              height={50}
              className="size-20 rounded-full object-cover"
            />
            <h5 className="text-sm font-medium">Lisa Chen</h5>
            <p className="text-sm text-neutral-300">Software engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
