import { Navbar } from '@/components/nav/Navbar';
import { NavbarSkeleton } from '@/components/nav/NavbarSkeleton';
import { Suspense } from 'react';

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}
