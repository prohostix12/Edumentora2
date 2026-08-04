import React from 'react';
import PageBanner from '@/components/PageBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <main className="min-h-screen bg-[#F9F9F9] font-[Poppins]">
      <Header />
      
      <PageBanner 
        badge="Latest Insights" 
        title="Our Blog" 
        subtitle="Stay updated with the latest news, guides, and insights about education and career."
        isGradientText={true}
      />

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1B4B43] mb-2">No blogs found</h2>
            <p className="text-gray-500">Check back later for new articles and insights.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#E6D3B0] flex flex-col group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {blog.mainImage ? (
                    <img 
                      src={blog.mainImage} 
                      alt={blog.category} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1B4B43]/5 text-[#1B4B43]/30">
                      <span className="font-medium text-lg">Edumentora Blog</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-[#C9A66B] text-white text-sm font-semibold rounded-full shadow-lg">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4 text-[#C9A66B]" />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1B4B43] mb-4 line-clamp-2 leading-tight">
                    {blog.sectionDis}
                  </h3>
                  
                  <div className="mt-auto pt-6">
                    <Link 
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[#C9A66B] font-bold hover:text-[#1B4B43] transition-colors group/link"
                    >
                      Read Full Article 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
<Footer />
      <FloatingWhatsApp />
    </main>
  );
}
