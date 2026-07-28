'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createBlog(formData: FormData) {
  const dateStr = formData.get('date') as string;
  const category = formData.get('category') as string;
  const sectionDis = formData.get('sectionDis') as string;
  const mainImage = formData.get('mainImage') as string | null;
  const mainDisJson = formData.get('mainDis') as string;

  if (!dateStr || !category || !sectionDis || !mainDisJson) return;

  const date = new Date(dateStr);
  const mainDis = JSON.parse(mainDisJson) as { subHeading: string, subPara: string }[];

  await prisma.blog.create({
    data: {
      date,
      category,
      sectionDis,
      mainImage: mainImage || null,
      mainDis,
    },
  });

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/blog', 'layout'); // Just to be safe with dynamic child routes
}

export async function deleteBlog(id: string) {
  await prisma.blog.delete({
    where: { id },
  });

  revalidatePath('/admin/blogs');
  revalidatePath('/blog');
  revalidatePath('/blog', 'layout');
}
