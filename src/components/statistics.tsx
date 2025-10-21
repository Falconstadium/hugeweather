export default function Statistics() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 pb-6">
      <div className="bg-neutral-100 rounded-2xl py-4 px-14 grid place-items-center shadow">
        <h4 className="font-semibold text-3xl">10M+</h4>
        <p className="text-neutral-500 text-sm capitalize">total customers</p>
      </div>
      <div className="bg-neutral-100 rounded-2xl py-4 px-14 grid place-items-center shadow">
        <h4 className="font-semibold text-3xl">9+</h4>
        <p className="text-neutral-500 text-sm capitalize">
          years of experience
        </p>
      </div>
      <div className="bg-neutral-100 rounded-2xl py-4 px-14 grid place-items-center shadow">
        <h4 className="font-semibold text-3xl">12K</h4>
        <p className="text-neutral-500 text-sm capitalize">
          total destinations
        </p>
      </div>
      <div className="bg-neutral-100 rounded-2xl py-4 px-14 grid place-items-center shadow">
        <h4 className="font-semibold text-3xl">5.0</h4>
        <p className="text-neutral-500 text-sm capitalize">average rating</p>
      </div>
    </div>
  );
}
