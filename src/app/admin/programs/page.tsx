import React from 'react';
import { PrismaClient } from '@prisma/client';
import ProgramManager from '@/components/admin/ProgramManager';

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#172A53]">Programs Manager</h1>
        <p className="text-gray-500 mt-2">Build and customize dynamic programs with advanced content blocks.</p>
      </div>

      <ProgramManager initialPrograms={programs} />
    </div>
  );
}
