import React from 'react';
import { PrismaClient } from '@prisma/client';
import FaqManager from '@/components/admin/FaqManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AboutFaqPage() {
  const faqs = await prisma.faq.findMany({
    where: { type: 'ABOUT' },
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">About FAQ</h1>
        <p className="text-gray-600">Manage the FAQs shown in the &ldquo;Frequently Asked Questions&rdquo; section on the /about-us page.</p>
      </div>

      <FaqManager
        type="ABOUT"
        initialFaqs={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))}
      />
    </div>
  );
}
