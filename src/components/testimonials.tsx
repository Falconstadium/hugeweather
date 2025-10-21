import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="container mx-auto py-20 px-6">
      <div className="grid place-items-center text-center gap-2 pb-10">
        <h3 className="font-semibold text-2xl md:text-5xl capitalize font-monts">
          what travelers say
        </h3>
        <p className="font-medium text-neutral-400 text-sm">
          Real stories from women who discovered the world
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="grid gap-4 place-items-center">
          <h4 className="text-lg font-semibold text-center uppercase">
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
        <div className="grid gap-4 place-items-center">
          <h4 className="text-lg font-semibold text-center uppercase">
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
        <div className="grid gap-4 place-items-center">
          <h4 className="text-lg font-semibold text-center uppercase">
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
