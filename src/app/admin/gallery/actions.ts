'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createSection(formData: FormData) {
  const sectionName = formData.get('sectionName') as string;
  if (!sectionName) return;
  await prisma.gallery.create({
    data: {
      section: sectionName,
      images: [],
    },
  });

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
}

export async function deleteSection(id: string) {
  await prisma.gallery.delete({
    where: { id },
  });

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
}

export async function addImages(id: string, base64Images: string[]) {
  if (!id || !base64Images || base64Images.length === 0) return;

  await prisma.gallery.update({
    where: { id },
    data: {
      images: {
        push: base64Images,
      },
    },
  });

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
}

export async function removeImageUrl(id: string, urlToRemove: string, currentImages: string[]) {
  const updatedImages = currentImages.filter(url => url !== urlToRemove);

  await prisma.gallery.update({
    where: { id },
    data: {
      images: {
        set: updatedImages,
      },
    },
  });

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
}
