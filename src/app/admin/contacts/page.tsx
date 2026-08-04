import React from 'react';
import { PrismaClient } from '@prisma/client';
import ContactManager from '@/components/admin/ContactManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function ContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1B4B43] tracking-tight">Contact Management</h1>
        <p className="text-gray-500 mt-2">Manage the organization's contact details (Departments, Phones, Emails).</p>
      </div>

      <ContactManager initialContacts={contacts} />
    </div>
  );
}
