'use server';

import { UserRole } from '@/drizzle/schema';
import { auth } from '@clerk/nextjs/server';

export interface CurrentUser {
  clerkUserId: string | null;
  userId: string | undefined;
  role: UserRole | undefined;
  redirectToSignIn: () => Promise<void>;
}

export async function getCurrentUser(): Promise<CurrentUser> {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  return {
    clerkUserId: userId,
    userId: sessionClaims?.dbId,
    role: sessionClaims?.role,
    redirectToSignIn,
  };
} 