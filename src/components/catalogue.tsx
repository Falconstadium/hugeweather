import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function Catalogue() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    SplitText.create('#title5', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#catalogue',
            start: 'top center',
            end: 'bottom 20%',
          },
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });
    SplitText.create('#text3', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          scrollTrigger: {
            trigger: '#catalogue',
            start: 'top center',
            end: 'bottom 20%',
          },
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    SplitText.create('#btn1', {
      type: 'lines, chars',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          scrollTrigger: {
            trigger: '#catalogue',
            start: 'top center',
            end: 'bottom 20%',
          },
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      },
    });

    const tl = gsap.timeline();
    tl.from('#btn5', {
      opacity: 0,
      y: -50,
      duration: 1,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: '#catalogue',
      start: 'bottom bottom',
      end: 'bottom 20%',
    });

    const rating = gsap.timeline();
    rating.from('#stats', {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.1,
    });
    ScrollTrigger.create({
      animation: rating,
      trigger: '#catalogue',
      start: 'bottom bottom',
      end: 'bottom 20%',
    });
  });

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 lg:px-0">
      <div className="grid place-items-center gap-6 text-center">
        <div className="grid gap-1">
          <h3
            className="font-semibold text-2xl md:text-5xl capitalize font-monts"
            id="title5">
            ready for your next adventure
          </h3>
          <p className="font-medium text-neutral-300 text-sm" id="text3">
            Discover tropical destinations that will transform your travel
            experience forever.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="bg-neutral-950 py-2 px-5 rounded-3xl transition-colors duration-200 ease-in-out hover:bg-neutral-900 capitalize text-sm font-medium"
            id="btn5">
            view full catalogue
          </button>
          <button
            type="button"
            className="border-2 border-neutral-950 py-2 px-5 rounded-3xl transition-colors duration-200 ease-in-out hover:border-transparent hover:bg-neutral-950 capitalize text-sm font-medium flex items-center gap-2"
            id="btn5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            call us now
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2" id="stats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-yellow-500">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2" id="stats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5">
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clipRule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <span className="text-sm">10K+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2" id="stats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5">
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">100% Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
