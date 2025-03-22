import { canAccessAdminPages } from '@/app/permissions/general';
import { AdminNavLink } from '@/components/auth/AdminNavLink';
import { AuthenticatedNav } from '@/components/auth/AuthenticatedNav';
import { getCurrentUser } from '@/data/actions/clerk';
import Link from 'next/link';

export async function Navbar() {
  const user = await getCurrentUser({ allData: true });
  const isAdmin = canAccessAdminPages(user?.role);

  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link
          href="/"
          className="flex items-center mr-auto text-lg hover:underline px-2"
        >
          Course Platform
        </Link>
        {isAdmin && <AdminNavLink />}
        <AuthenticatedNav />
      </nav>
    </header>
  );
} 