'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function postComment(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const website = formData.get('website') as string | null;
  const content = formData.get('content') as string;
  const blogId = formData.get('blogId') as string;

  if (!name || !email || !content || !blogId) return { success: false, error: 'Required fields missing' };

  try {
    await prisma.comment.create({
      data: {
        name,
        email,
        website: website || null,
        content,
        blogId,
      },
    });

    revalidatePath(`/blog/${blogId}`);
    return { success: true };
  } catch (error) {
    console.error('Error posting comment:', error);
    return { success: false, error: 'Failed to post comment' };
  }
}
