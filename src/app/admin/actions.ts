'use server';

import { cookies } from 'next/headers';

export async function authenticateAdmin(password: string) {
  if (password === 'Abhy@123') {
    const cookieStore = await cookies();
    cookieStore.set('admin_auth_token', 'authenticated', { secure: true, httpOnly: true, path: '/' });
    return { success: true };
  }
  return { success: false };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth_token');
}
