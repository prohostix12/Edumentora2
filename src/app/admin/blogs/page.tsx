import React from 'react';
import { PrismaClient } from '@prisma/client';
import BlogManager from '@/components/admin/BlogManager';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1B4B43] tracking-tight mb-2">Blog Management</h1>
        <p className="text-gray-500">Create and manage your blog articles and content blocks.</p>
      </div>

      <BlogManager initialBlogs={blogs} />
    </div>
  );
}
