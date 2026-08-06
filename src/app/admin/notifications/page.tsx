import React from 'react';
import { PrismaClient } from '@prisma/client';
import NotificationManager from '@/components/admin/NotificationManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminNotificationsPage() {
  const notifications = await prisma.notification.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Notifications</h1>
        <p className="text-gray-600">Manage the scrolling notifications shown in the home page hero section&rsquo;s bottom marquee.</p>
      </div>

      <NotificationManager initialNotifications={notifications} />
    </div>
  );
}
