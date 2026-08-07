import React from 'react';
import { PrismaClient } from '@prisma/client';
import LeadsManager from '@/components/admin/LeadsManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic'; // Ensures this page is always dynamically rendered to show the latest data

export default async function EnquiriesPage() {
  const [enquiries, eligibilityRequests] = await Promise.all([
    prisma.enquiryList.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.eligibilityRequest.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Enquiry</h1>
        <p className="text-gray-600">View, update, and delete leads submitted through the contact form and eligibility check form.</p>
      </div>

      <React.Suspense fallback={<div className="text-gray-500 text-sm">Loading...</div>}>
        <LeadsManager initialEnquiries={enquiries} initialRequests={eligibilityRequests} />
      </React.Suspense>
    </div>
  );
}
