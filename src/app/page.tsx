import About from '@/components/about';
import Catalogue from '@/components/catalogue';
import Destinations from '@/components/destinations';
import Footer from '@/components/footer';
import Hero from '@/components/hero-section';
import Navbar from '@/components/navbar';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="font-sans">
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
      <main className="sticky top-0 min-h-dvh bg-gradient-to-br from-neutral-950 to-gray-900 text-neutral-100">
        <Destinations />
      </main>
      <main className="sticky top-0 min-h-dvh bg-slate-900 text-neutral-100">
        <div className="bg-gray-950">
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
