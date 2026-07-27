import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, LogOut, Settings, MessageSquare } from 'lucide-react';
import { logoutAdmin } from './actions';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 font-[Poppins]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#172A53] text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Edumentora</h2>
          <p className="text-[#da251d] text-sm font-semibold tracking-wide">ADMIN PANEL</p>
        </div>
        
        <nav className="flex-1 px-4 mt-8 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/enquiries" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Your Enquiry</span>
          </Link>
          <Link href="/admin/contacts" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Contacts</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>

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
