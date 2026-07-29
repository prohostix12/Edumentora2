'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Settings, MessageSquare, Image, GraduationCap, FileText, BookOpen, Star } from 'lucide-react';

const links = [
  { href: '/admin',           label: 'Dashboard',    icon: LayoutDashboard, exact: true },
  { href: '/admin/enquiries', label: 'Your Enquiry', icon: MessageSquare },
  { href: '/admin/university',label: 'University',   icon: GraduationCap },
  { href: '/admin/contacts',  label: 'Contacts',     icon: Users },
  { href: '/admin/reviews',   label: 'Reviews',      icon: Star },
  { href: '/admin/gallery',   label: 'Image Gallery',icon: Image },
  { href: '/admin/blogs',     label: 'Blogs',        icon: FileText },
  { href: '/admin/programs',  label: 'Programs',     icon: BookOpen },
  { href: '/admin/settings',  label: 'Settings',     icon: Settings },
];

export default function SidebarNav({ collapsed = false }: { collapsed?: boolean }) {
  const pathname = usePathname();

  return (
    <nav className={`flex-1 space-y-1 overflow-hidden transition-all duration-300 ${collapsed ? 'px-2 mt-4' : 'px-4 mt-6'}`}>
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            title={collapsed ? link.label : undefined}
            className={`flex items-center rounded-xl transition-all duration-200 ${
              collapsed ? 'justify-center p-2.5' : 'gap-3 px-4 py-3'
            } ${
              isActive
                ? 'bg-white/20 text-white font-semibold shadow-inner'
                : 'hover:bg-white/10 text-white/70 hover:text-white'
            }`}
          >
            <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#da251d]' : ''}`} />
            {!collapsed && (
              <span className="font-medium whitespace-nowrap overflow-hidden">{link.label}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
