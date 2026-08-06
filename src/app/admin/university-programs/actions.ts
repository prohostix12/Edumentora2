'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

function revalidateAll(universityId?: string) {
  revalidatePath('/admin/university-programs');
  revalidatePath('/universities');
  if (universityId) revalidatePath(`/universities/${universityId}`);
}

export async function createUniversityProgram(formData: FormData) {
  const universityId = formData.get('universityId') as string;
  const courseDescription = formData.get('courseDescription') as string;
  const feeStructure = (formData.get('feeStructure') as string) || null;
  const eligibilityCriteria = (formData.getAll('eligibilityCriteria') as string[]).filter(v => v.trim() !== '');
  const careerOpportunities = (formData.getAll('careerOpportunities') as string[]).filter(v => v.trim() !== '');

  if (!universityId || !courseDescription) return;

  await prisma.universityProgram.create({
    data: {
      universityId,
      courseDescription,
      feeStructure,
      eligibilityCriteria,
      careerOpportunities,
    },
  });

  revalidateAll(universityId);
}

export async function updateUniversityProgram(id: string, formData: FormData) {
  const universityId = formData.get('universityId') as string;
  const courseDescription = formData.get('courseDescription') as string;
  const feeStructure = (formData.get('feeStructure') as string) || null;
  const eligibilityCriteria = (formData.getAll('eligibilityCriteria') as string[]).filter(v => v.trim() !== '');
  const careerOpportunities = (formData.getAll('careerOpportunities') as string[]).filter(v => v.trim() !== '');

  if (!universityId || !courseDescription) return;

  await prisma.universityProgram.update({
    where: { id },
    data: {
      universityId,
      courseDescription,
      feeStructure,
      eligibilityCriteria,
      careerOpportunities,
    },
  });

  revalidateAll(universityId);
}

export async function deleteUniversityProgram(id: string) {
  const existing = await prisma.universityProgram.findUnique({ where: { id } });
  await prisma.universityProgram.delete({ where: { id } });
  revalidateAll(existing?.universityId);
}
