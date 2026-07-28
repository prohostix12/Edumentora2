'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createProgram(formData: FormData) {
  const topic = formData.get('topic') as string;
  const heading = formData.get('heading') as string;
  const subHeading = formData.get('subHeading') as string | null;
  const paragraph = formData.get('paragraph') as string;
  const heroImage = formData.get('heroImage') as string | null;
  const blocksJson = formData.get('blocks') as string;

  if (!topic || !heading || !paragraph || !blocksJson) return;

  const blocks = JSON.parse(blocksJson);

  await prisma.program.create({
    data: {
      topic,
      heading,
      subHeading,
      paragraph,
      heroImage: heroImage || null,
      blocks,
    },
  });

  revalidatePath('/admin/programs');
  revalidatePath('/programs');
}

export async function deleteProgram(id: string) {
  await prisma.program.delete({
    where: { id },
  });

  revalidatePath('/admin/programs');
  revalidatePath('/programs');
}
