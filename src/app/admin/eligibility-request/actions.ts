'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function updateEligibilityRequest(id: string, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = (formData.get('lastName') as string) || null;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const company = (formData.get('company') as string) || null;
  const message = formData.get('message') as string;
  const source = formData.get('source') as string;

  if (!firstName || !email || !phone || !message || !source) return;

  await prisma.eligibilityRequest.update({
    where: { id },
    data: { firstName, lastName, email, phone, company, message, source },
  });

  revalidatePath('/admin/eligibility-request');
  revalidatePath('/admin');
}

export async function deleteEligibilityRequest(id: string) {
  await prisma.eligibilityRequest.delete({
    where: { id },
  });

  revalidatePath('/admin/eligibility-request');
  revalidatePath('/admin');
}
