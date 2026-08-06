import React from 'react';
import { PrismaClient } from '@prisma/client';
import UniversityProgramManager from '@/components/admin/UniversityProgramManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminUniversityProgramsPage() {
  const [programs, universities] = await Promise.all([
    prisma.universityProgram.findMany({
      include: { university: true },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.university.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true },
    }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">University Programs</h1>
        <p className="text-gray-600">Manage course programs shown under &ldquo;Our University Programs&rdquo; on each university&rsquo;s detail page.</p>
      </div>

      <UniversityProgramManager initialPrograms={programs} universities={universities} />
    </div>
  );
}
