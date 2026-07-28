import React from 'react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { logoutAdmin } from './actions';
import SidebarNav from '@/components/admin/SidebarNav';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 font-[Poppins] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#172A53] text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Edumentora</h2>
          <p className="text-[#da251d] text-sm font-semibold tracking-wide">ADMIN PANEL</p>
        </div>
        
        <SidebarNav />

        <div className="p-4">
          <form action={async () => {
            'use server';
            await logoutAdmin();
            redirect('/admin/login');
          }}>
            <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
