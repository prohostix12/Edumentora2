import React from 'react';
import { PrismaClient } from '@prisma/client';
import UniversitiesClient from './UniversitiesClient';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const revalidate = 3600;

export default async function UniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center text-gray-500 font-medium">Loading universities...</div>}>
      <UniversitiesClient universities={universities} />
    </React.Suspense>
  );
}
