'use client';

import { UserButton } from '@clerk/nextjs';

export function UserButtonClient() {
  return (
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
  );
} 