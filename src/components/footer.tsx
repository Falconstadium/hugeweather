export default function Footer() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-6 lg:px-0 grid gap-6 place-content-center place-items-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center gap-6">
        <div className="grid gap-2 place-items-center md:place-items-start">
          <h3 className="font-semibold text-lg">Huge Weather</h3>
          <p className="text-sm text-neutral-300 text-center md:text-start">
            Your gateway to extraodinary tropical adventures at unbeatable
            prices.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-3 place-items-center md:place-items-start pt-6 md:pt-0">
          <h5 className="font-medium text-amber-600">Company</h5>
          <div className="text-sm text-neutral-300 grid gap-1 text-center md:text-start">
            <p>Our Team</p>
            <p>Destinations</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="grid gap-3 place-items-center md:place-items-start">
          <h5 className="font-medium text-emerald-600">Support</h5>
          <div className="text-sm text-neutral-300 grid gap-1 text-center md:text-start">
            <p>Help Center</p>
            <p>Booking Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-neutral-700 mb-4"></div>
      <div>
        <p className="text-sm text-neutral-300">
          &copy; 2025 Huge Weather. All rights reserved.
        </p>
      </div>
    </section>
  );
}
