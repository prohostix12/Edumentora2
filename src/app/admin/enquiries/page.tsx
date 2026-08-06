import React from 'react';
import { PrismaClient } from '@prisma/client';
import EnquiryManager from '@/components/admin/EnquiryManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic'; // Ensures this page is always dynamically rendered to show the latest data

export default async function EnquiriesPage() {
  // Fetch data from the database
  const enquiries = await prisma.enquiryList.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Your Enquiries</h1>
        <p className="text-gray-600">View, update, and delete the messages submitted through the contact form.</p>
      </div>

      <EnquiryManager initialEnquiries={enquiries} />
    </div>
  );
}
