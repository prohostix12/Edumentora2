import React from 'react';
import { PrismaClient } from '@prisma/client';
import ReelManager from '@/components/admin/ReelManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminReelsPage() {
  const reels = await prisma.reel.findMany({ orderBy: { createdAt: 'asc' } });

  const promoReels = reels.filter((r) => r.category === 'PROMO');
  const successReels = reels.filter((r) => r.category === 'SUCCESS');

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Add Reels</h1>
        <p className="text-gray-600">Manage the videos shown in the two scrolling reel tracks on the home page &mdash; Promo (left track) and Success (right track).</p>
      </div>

      <ReelManager promoReels={promoReels} successReels={successReels} />
    </div>
  );
}
