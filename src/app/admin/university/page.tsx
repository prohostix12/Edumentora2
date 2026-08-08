import React from 'react';
import { PrismaClient } from '@prisma/client';
import UniversityManager from '@/components/admin/UniversityManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminUniversityPage() {
  const universities = await prisma.university.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      brochure: true,
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">University Management</h1>
        <p className="text-gray-600">Add universities and manage their certificates and approvals.</p>
      </div>

      <UniversityManager initialUniversities={universities} />
    </div>
  );
}
