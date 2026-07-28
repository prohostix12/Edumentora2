import React from 'react';
import { PrismaClient } from '@prisma/client';
import ApprenticeshipProgramManager from '@/components/admin/ApprenticeshipProgramManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminProgramsPage() {
  const programs = await prisma.program.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-80px)]">
      <ApprenticeshipProgramManager initialPrograms={programs} />
    </div>
  );
}
