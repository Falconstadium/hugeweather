export default function Hero() {
  return (
    <section className="grid place-items-center place-content-center px-4 py-20 md:py-0 md:px-0 gap-6 max-w-2xl mx-auto">
      <div className="grid gap-4 text-center">
        <h3 className="font-bold text-3xl md:text-6xl uppercase text-neutral-50 text-shadow-2xs font-monts">
          Tropical escapes that won't break the bank
        </h3>
        <p className="text-sm text-neutral-300 font-medium">
          Discover paradise without emptying your wallet. We hunt the best
          tropical destinations for adventurous women seeking unforgettable
          experiences.
        </p>
        <div className="flex items-center justify-center gap-4">
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
  );
}
