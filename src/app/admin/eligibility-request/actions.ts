'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function updateEligibilityRequest(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const place = formData.get('place') as string;
  const course = formData.get('course') as string;
  const previousUniversity = formData.get('previousUniversity') as string;
  const courseCompletedYear = formData.get('courseCompletedYear') as string;
  const contactNumber = formData.get('contactNumber') as string;

  if (!name || !place || !course || !previousUniversity || !courseCompletedYear || !contactNumber) return;

  await prisma.eligibilityRequest.update({
    where: { id },
    data: { name, place, course, previousUniversity, courseCompletedYear, contactNumber },
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
