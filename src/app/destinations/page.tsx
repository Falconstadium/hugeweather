export default function Places() {
  return (
    <section className="px-6 py-20 container mx-auto grid gap-4 bg-neutral-900 text-neutral-100">
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
