'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createReview(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const postedDateStr = formData.get('postedDate') as string;
    const ratingStr = formData.get('rating') as string;
    const comment = formData.get('comment') as string;
    const image = formData.get('image') as string;

    if (!username || !postedDateStr || !ratingStr || !comment) {
      return { success: false, error: 'All fields are required.' };
    }

    const rating = parseInt(ratingStr, 10);
    const postedDate = new Date(postedDateStr);

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return { success: false, error: 'Rating must be between 1 and 5.' };
    }

    const db = prisma as any;
    await db.$runCommandRaw({
      insert: "reviews",
      documents: [{
        username,
        postedDate: { $date: postedDate.toISOString() },
        rating,
        comment,
        image: image || null,
        createdAt: { $date: new Date().toISOString() },
        updatedAt: { $date: new Date().toISOString() }
      }]
    });

    revalidatePath('/admin/reviews');
    return { success: true };
  } catch (error) {
    console.error('Failed to create review:', error);
    return { success: false, error: 'Failed to create review. Please try again.' };
  }
}

export async function deleteReview(id: string) {
  try {
    const db = prisma as any;
    await db.$runCommandRaw({
      delete: "reviews",
      deletes: [{
        q: { _id: { $oid: id } },
        limit: 1
      }]
    });
    
    revalidatePath('/admin/reviews');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete review:', error);
    return { success: false, error: 'Failed to delete review.' };
  }
}

export async function updateReview(id: string, formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const postedDateStr = formData.get('postedDate') as string;
    const ratingStr = formData.get('rating') as string;
    const comment = formData.get('comment') as string;
    const image = formData.get('image') as string;

    if (!username || !postedDateStr || !ratingStr || !comment) {
      return { success: false, error: 'All fields are required.' };
    }

    const rating = parseInt(ratingStr, 10);
    const postedDate = new Date(postedDateStr);

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return { success: false, error: 'Rating must be between 1 and 5.' };
    }

    const db = prisma as any;
    await db.$runCommandRaw({
      update: "reviews",
      updates: [{
        q: { _id: { $oid: id } },
        u: {
          $set: {
            username,
            postedDate: { $date: postedDate.toISOString() },
            rating,
            comment,
            image: image || null,
            updatedAt: { $date: new Date().toISOString() }
          }
        }
      }]
    });

    revalidatePath('/admin/reviews');
    return { success: true };
  } catch (error) {
    console.error('Failed to update review:', error);
    return { success: false, error: 'Failed to update review. Please try again.' };
  }
}
