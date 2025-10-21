import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="py-4 px-4 md:px-0">
      <nav className="flex items-center justify-between container mx-auto text-neutral-100">
        <Link href={'/'} className="font-bold text-2xl capitalize">
          huge weather
        </Link>
        <ul className="flex items-center gap-6 font-medium text-sm capitalize">
          <li>
            <Link
              href={'/'}
              className="hover:text-rose-500 transition duration-200">
              home
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="hover:text-rose-500 transition duration-200">
              contact
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="hover:text-rose-500 transition duration-200">
              products
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="hover:text-rose-500 transition duration-200">
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
