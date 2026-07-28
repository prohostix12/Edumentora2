import React from 'react';
import { PrismaClient } from '@prisma/client';
import CanvasBuilder from '@/components/admin/CanvasBuilder';

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
    <div className="p-6">
      <CanvasBuilder initialPrograms={programs} />
    </div>
  );
}
