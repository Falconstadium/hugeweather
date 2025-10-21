export default function Destinations() {
  return (
    <section className="px-6 py-20 container mx-auto grid gap-6">
      <div className="grid gap-4 text-center">
        <h3 className=" capitalize bg-clip-text text-transparent bg-gradient-to-br from-rose-500 to-rose-300 font-medium">
          trending destinations
        </h3>
        <h3 className="font-bold text-2xl md:text-5xl font-monts">
          Top tropical getaways for the bold traveler
        </h3>
        <p className="text-neutral-300 text-sm">
          Uncover breathtaking locations that promise adventure and relaxation
          in equal measure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 w-full">
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)),url('/heidi-kaden-kYxgm42SQso-unsplash.jpg')] bg-cover bg-center rounded w-full h-52 relative">
          <div className="p-4 grid absolute bottom-0">
            <h4 className="font-bold text-xl">Santorini</h4>
            <p className="text-sm text-neutral-300 font-medium">
              Romantic sunset & white architecture
            </p>
          </div>
        </div>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url('/sebastian-pena-lambarri-U_i6h9Y50wQ-unsplash.jpg')] bg-cover bg- rounded w-full h-52 relative">
          <div className="p-4 grid absolute bottom-0">
            <h4 className="font-bold text-xl">Bali</h4>
            <p className="text-sm text-neutral-300 font-medium">
              Pristine beaches and vibrant culture await in this indonesian
              paradise.
            </p>
          </div>
        </div>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url('/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg')] bg-cover bg-center rounded w-full h-52 relative">
          <div className="p-4 grid absolute bottom-0">
            <h4 className="font-bold text-xl">Maldives</h4>
            <p className="text-sm text-neutral-300 font-medium">
              Overwater villas & crystal waters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
