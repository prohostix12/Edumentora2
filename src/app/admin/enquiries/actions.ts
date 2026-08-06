'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function updateEnquiry(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !phone || !email || !message) return;

  await prisma.enquiryList.update({
    where: { id },
    data: { name, phone, email, message },
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
