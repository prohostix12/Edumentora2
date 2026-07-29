import React from 'react';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageBanner from '@/components/PageBanner';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { Calendar, ArrowLeft, Send } from 'lucide-react';
import { notFound } from 'next/navigation';
import { postComment } from './actions';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  if (!id || id.length !== 24) {
    notFound();
  }

  const blog = await prisma.blog.findUnique({
    where: { id },
  });

  if (!blog) {
    notFound();
  }

  const recentBlogs = await prisma.blog.findMany({
    where: { id: { not: id } },
    orderBy: { date: 'desc' },
    take: 5,
  });

  const comments = await prisma.comment.findMany({
    where: { blogId: id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-[Poppins]">
      <Header />
      
      <PageBanner badge={blog.category} title={blog.sectionDis}>
        <div className="pt-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all blogs
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-1.5 bg-white/10 text-red-200 text-sm font-semibold rounded-full border border-white/20 backdrop-blur-md">
              {blog.category}
            </span>
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 max-w-4xl tracking-tight font-[Poppins]">
            {blog.sectionDis}
          </h1>
        </div>
      </PageBanner>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
          
          {/* Left Column: Blog Content */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {blog.mainImage && (
              <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
                <img 
                  src={blog.mainImage} 
                  alt={blog.category} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-[#172A53] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
                {blog.mainDis.map((block, index) => (
                  <div key={index} className="mb-10 last:mb-0">
                    {block.subHeading && (
                      <h2 className="text-2xl md:text-3xl font-bold text-[#172A53] mb-4">
                        {block.subHeading}
                      </h2>
                    )}
                    {block.subPara && (
                      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {block.subPara}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8 mt-16 lg:mt-0">
            
            {/* Recent Blogs */}
            {recentBlogs.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#172A53] mb-6 pb-4 border-b border-gray-100">
                  Recent Blogs
                </h3>
                <div className="space-y-6">
                  {recentBlogs.map((recent) => (
                    <Link key={recent.id} href={`/blog/${recent.id}`} className="group flex gap-4 items-start">
                      {recent.mainImage ? (
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={recent.mainImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-400">
                          <span className="text-xs">No img</span>
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-[#172A53] line-clamp-2 group-hover:text-[#da251d] transition-colors mb-1">
                          {recent.sectionDis}
                        </h4>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(recent.date).toLocaleDateString()}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comment Form */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#172A53] mb-6 pb-4 border-b border-gray-100">
                Write your comment Here
              </h3>
              <form action={postComment} className="space-y-4">
                <input type="hidden" name="blogId" value={blog.id} />
                <div>
                  <input type="text" name="name" placeholder="Your Name *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53] transition-all text-sm text-[#172A53] placeholder:text-[#172A53]/70" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Your Email *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53] transition-all text-sm text-[#172A53] placeholder:text-[#172A53]/70" />
                </div>
                <div>
                  <input type="url" name="website" placeholder="Website (Optional)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53] transition-all text-sm text-[#172A53] placeholder:text-[#172A53]/70" />
                </div>
                <div>
                  <textarea name="content" placeholder="Comment *" required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53] transition-all resize-none text-sm text-[#172A53] placeholder:text-[#172A53]/70"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-[#da251d] hover:bg-[#172A53] text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Post comment
                </button>
              </form>
            </div>

            {/* Recent Comments */}
            {comments.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#172A53] mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
                  Recent comments <span className="bg-gray-100 text-[#172A53] px-2 py-0.5 rounded-full text-xs">{comments.length}</span>
                </h3>
                
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#172A53] text-sm">{comment.name}</h4>
                        <span className="text-xs text-gray-400">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
