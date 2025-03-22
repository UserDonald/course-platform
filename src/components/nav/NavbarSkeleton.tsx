import Link from 'next/link';

export function NavbarSkeleton() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link
          href="/"
          className="flex items-center mr-auto text-lg hover:underline px-2"
        >
          Course Platform
        </Link>
      </nav>
    </header>
  );
} 