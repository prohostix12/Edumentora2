import React from 'react';
import { PrismaClient } from '@prisma/client';
import GalleryManager from '@/components/admin/GalleryManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminGalleryPage() {
  const galleries = await prisma.gallery.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Image Gallery Management</h1>
        <p className="text-gray-600">Create sections and add images to show on the public gallery page.</p>
      </div>

      <GalleryManager initialGalleries={galleries} />
    </div>
  );
}
