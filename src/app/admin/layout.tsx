import React from 'react';
import { redirect } from 'next/navigation';
import { logoutAdmin } from './actions';
import AdminShell from '@/components/admin/AdminShell';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  async function handleLogout() {
    'use server';
    await logoutAdmin();
    redirect('/');
  }

  return <AdminShell onLogout={handleLogout}>{children}</AdminShell>;
}
