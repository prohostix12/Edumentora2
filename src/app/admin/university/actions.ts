'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createUniversity(formData: FormData) {
  const name = formData.get('name') as string;
  const location = formData.get('location') as string;
  const description = formData.get('description') as string;
  const mainImage = formData.get('mainImage') as string | null;
  const certs = formData.getAll('certificates') as string[];
  const validCerts = certs.filter(c => c.trim() !== '');
  
  if (!name || !location || !description) return;
  
  await prisma.university.create({
    data: {
      name,
      location,
      description,
      mainImage,
      certificates: validCerts,
    },
  });
  
  revalidatePath('/admin/university');
}

export async function deleteUniversity(id: string) {
  await prisma.university.delete({
    where: { id },
  });
  
  revalidatePath('/admin/university');
}

export async function addCertificates(id: string, base64Images: string[]) {
  if (!id || !base64Images || base64Images.length === 0) return;

  await prisma.university.update({
    where: { id },
    data: {
      certificates: {
        push: base64Images,
      },
    },
  });

  revalidatePath('/admin/university');
}

export async function removeCertificate(id: string, urlToRemove: string, currentCertificates: string[]) {
  const updatedCertificates = currentCertificates.filter(url => url !== urlToRemove);

  await prisma.university.update({
    where: { id },
    data: {
      certificates: {
        set: updatedCertificates,
      },
    },
  });

  revalidatePath('/admin/university');
}
