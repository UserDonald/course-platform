'use client';

import Link from 'next/link';
import { Suspense } from 'react';

export function AdminNavLink() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link href="/admin" className="hover:bg-accent flex items-center px-2">
        Admin
      </Link>
    </Suspense>
  );
} 