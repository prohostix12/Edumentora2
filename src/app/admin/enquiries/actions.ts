'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function updateEnquiry(id: string, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = (formData.get('lastName') as string) || null;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const company = (formData.get('company') as string) || null;
  const message = formData.get('message') as string;
  const source = formData.get('source') as string;

  if (!firstName || !phone || !email || !message || !source) return;

  await prisma.enquiryList.update({
    where: { id },
    data: { firstName, lastName, phone, email, company, message, source },
  });

  revalidatePath('/admin/enquiries');
  revalidatePath('/admin');
}

export async function deleteEnquiry(id: string) {
  await prisma.enquiryList.delete({
    where: { id },
  });

  revalidatePath('/admin/enquiries');
  revalidatePath('/admin');
}
