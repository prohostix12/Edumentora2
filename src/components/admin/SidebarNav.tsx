'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Settings, MessageSquare, Image, GraduationCap, FileText, BookOpen } from 'lucide-react';

export default function SidebarNav() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { href: '/admin/enquiries', label: 'Your Enquiry', icon: MessageSquare },
    { href: '/admin/university', label: 'University', icon: GraduationCap },
    { href: '/admin/contacts', label: 'Contacts', icon: Users },
    { href: '/admin/gallery', label: 'Image Gallery', icon: Image },
    { href: '/admin/blogs', label: 'Blogs', icon: FileText },
    { href: '/admin/programs', label: 'Programs', icon: BookOpen },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="flex-1 px-4 mt-8 space-y-2">
      {links.map((link) => {
        const Icon = link.icon;
        // Strict matching for /admin to avoid highlighting it for child routes
        const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);

        return (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              isActive 
                ? 'bg-white/20 text-white font-semibold shadow-inner' 
                : 'hover:bg-white/10 text-white/80 hover:text-white'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-[#da251d]' : ''}`} />
            <span className="font-medium">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
