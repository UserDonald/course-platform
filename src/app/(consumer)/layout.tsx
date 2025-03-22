import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/data/actions/clerk';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Suspense } from 'react';
import { canAccessAdminPages } from '../permissions/general';

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link
          href="/"
          className="flex items-center mr-auto text-lg hover:underline px-2"
        >
          Course Platform
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <SignedIn>
            <AdminLink />
            <Link
              href="/courses"
              className="hover:bg-accent flex items-center px-2"
            >
              My Courses
            </Link>
            <Link
              href="/purchases"
              className="hover:bg-accent flex items-center px-2"
            >
              Purchase History
            </Link>
            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: '100%',
                      height: '100%',
                    },
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <Button className="self-center" asChild>
              <SignInButton>Sign In</SignInButton>
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
}

async function AdminLink() {
  const user = await getCurrentUser();

  if (!canAccessAdminPages(user.role)) return null;

  return (
    <Link href="/admin" className="hover:bg-accent flex items-center px-2">
      Admin
    </Link>
  );
}
