import React from 'react';
import { PrismaClient } from '@prisma/client';
import EligibilityRequestManager from '@/components/admin/EligibilityRequestManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function EligibilityRequestPage() {
  const requests = await prisma.eligibilityRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Eligibility Requests</h1>
        <p className="text-gray-600">View, update, and delete eligibility request submissions from applicants.</p>
      </div>

      <EligibilityRequestManager initialRequests={requests} />
    </div>
  );
}
