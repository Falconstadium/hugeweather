import Image from 'next/image';

export default function About() {
  return (
    <section className="container mx-auto py-20 px-6 grid gap-16">
      <div className="grid place-items-center text-center gap-2">
        <h3 className="font-semibold text-2xl md:text-5xl capitalize bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-green-800 font-monts">
          meet our travel experts
        </h3>
        <p className="font-medium text-neutral-500 text-sm">
          Our passionate team of travel specialists curates unforgettable
          experiences just for you
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-x-8">
        <div className="grid place-items-center text-center gap-4">
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
        <div className="grid place-items-center text-center gap-4">
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
        <div className="grid place-items-center text-center gap-4">
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
