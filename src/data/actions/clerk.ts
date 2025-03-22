'use server';

import { db } from '@/drizzle/db';
import { UserRole, UserTable } from '@/drizzle/schema';
import { getUserIdTag } from '@/features/users/db/cache';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';

export interface CurrentUser {
  clerkUserId: string | null;
  userId: string | undefined;
  role: UserRole | undefined;
  user: typeof UserTable.$inferSelect | undefined;
  redirectToSignIn: () => Promise<void>;
}

export async function getCurrentUser({
  allData = false,
}: {
  allData?: boolean;
}): Promise<CurrentUser> {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  return {
    clerkUserId: userId,
    userId: sessionClaims?.dbId,
    role: sessionClaims?.role,
    user:
      allData && sessionClaims?.dbId != null
        ? await getUser(sessionClaims.dbId)
        : undefined,
    redirectToSignIn,
  };
}

async function getUser(id: string) {
  'use cache';
  cacheTag(getUserIdTag(id));

  return db.query.UserTable.findFirst({
    where: eq(UserTable.id, id),
  });
}
