import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { logoutAdmin } from './actions';
import AdminShell from '@/components/admin/AdminShell';

// Belt-and-suspenders alongside robots.ts's Disallow: /admin — this also
// keeps /admin/login itself (reachable pre-auth) out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  async function handleLogout() {
    'use server';
    await logoutAdmin();
    redirect('/');
  }

  return <AdminShell onLogout={handleLogout}>{children}</AdminShell>;
}
