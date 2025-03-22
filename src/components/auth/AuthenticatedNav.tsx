'use client';

import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { UserButtonClient } from './UserButtonClient';

export function AuthenticatedNav() {
  return (
    <>
      <SignedIn>
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
        <UserButtonClient />
      </SignedIn>
      <SignedOut>
        <Button className="self-center" asChild>
          <SignInButton>Sign In</SignInButton>
        </Button>
      </SignedOut>
    </>
  );
}
