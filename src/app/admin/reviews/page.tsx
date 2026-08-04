import React from 'react';
import { PrismaClient } from '@prisma/client';
import ReviewManager from '@/components/admin/ReviewManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminReviewsPage() {
  let reviews: any[] = [];
  try {
    const db = prisma as any;
    const rawData = await db.$runCommandRaw({
      find: "reviews",
      sort: { postedDate: -1 }
    });
    
    if (rawData?.cursor?.firstBatch) {
      reviews = rawData.cursor.firstBatch.map((r: any) => ({
        id: r._id.$oid,
        username: r.username,
        postedDate: r.postedDate.$date,
        rating: r.rating,
        comment: r.comment,
        image: r.image || null,
        createdAt: r.createdAt.$date,
        updatedAt: r.updatedAt.$date
      }));
    }
  } catch (error) {
    console.error("Failed to fetch reviews (might not exist yet):", error);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#002147] tracking-tight">Reviews</h1>
        <p className="text-gray-500 mt-1">Manage all user reviews and testimonials here.</p>
      </div>

      <ReviewManager initialReviews={reviews} />
    </div>
  );
}
