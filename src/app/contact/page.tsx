import React from 'react';
import { PrismaClient } from '@prisma/client';
import ContactClient from './ContactClient';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const revalidate = 3600;

export default async function ContactPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return <ContactClient contacts={contacts} />;
}
