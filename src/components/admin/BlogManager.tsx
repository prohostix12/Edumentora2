'use client';

import React, { useTransition, useState } from 'react';
import { createBlog, deleteBlog } from '@/app/admin/blogs/actions';
import { Plus, Trash2, Calendar, LayoutList, Text, Upload } from 'lucide-react';

type BlogSection = {
  subHeading: string;
  subPara: string;
};

type Blog = {
  id: string;
  date: Date;
  category: string;
  sectionDis: string;
  mainImage?: string | null;
  mainDis: BlogSection[];
};

export default function BlogManager({ initialBlogs }: { initialBlogs: Blog[] }) {
  const [isPending, startTransition] = useTransition();
  const [mainDis, setMainDis] = useState<BlogSection[]>([{ subHeading: '', subPara: '' }]);
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null);

  const handleCreateBlog = (formData: FormData) => {
    // Inject the mainDis JSON string into the form data
    formData.set('mainDis', JSON.stringify(mainDis));

    startTransition(async () => {
      try {
        await createBlog(formData);
        const form = document.getElementById('add-blog-form') as HTMLFormElement;
        if (form) form.reset();
        setMainDis([{ subHeading: '', subPara: '' }]);
        setMainImageBase64(null);
        alert('Blog published successfully!');
      } catch (error) {
        console.error('Error creating blog:', error);
        alert('Failed to publish blog! Please check the terminal for errors. You may need to restart the server.');
      }
    });
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      startTransition(() => {
        deleteBlog(id);
      });
    }
  };

  const addMainDisSection = () => {
    setMainDis([...mainDis, { subHeading: '', subPara: '' }]);
  };

  const updateMainDisSection = (index: number, field: keyof BlogSection, value: string) => {
    const updated = [...mainDis];
    updated[index][field] = value;
    setMainDis(updated);
  };

  const removeMainDisSection = (index: number) => {
    if (mainDis.length === 1) return;
    const updated = mainDis.filter((_, i) => i !== index);
    setMainDis(updated);
  };

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          const dataUrl = canvas.toDataURL('image/webp', 0.8);
          resolve(dataUrl);
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleMainImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      const compressedBase64 = await compressImage(files[0]);
      setMainImageBase64(compressedBase64);
    } catch (error) {
      console.error("Error processing main image:", error);
      alert("Failed to process main image.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Create Blog Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-[#002147] mb-4">Add New Blog</h2>
        <form id="add-blog-form" action={handleCreateBlog} className="flex flex-col gap-6">
          <input type="hidden" name="mainImage" value={mainImageBase64 || ''} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-2 border border-gray-200 text-[#002147] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                placeholder="e.g. Technology, Education"
                required
                className="w-full px-4 py-2 border border-gray-200 text-[#002147] placeholder-[#002147]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 h-32">
            <div className="flex-1 space-y-2 h-full">
              <label className="text-sm font-semibold text-gray-700">Section Description (Intro)</label>
              <textarea
                name="sectionDis"
                placeholder="Short description or intro paragraph..."
                required
                className="w-full px-4 py-2 border border-gray-200 text-[#002147] placeholder-[#002147]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] resize-none h-[calc(100%-28px)]"
              />
            </div>
            <div className="w-full md:w-1/4 h-full flex flex-col items-center justify-center p-2 border border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden mt-7 md:mt-0">
              {mainImageBase64 ? (
                <>
                   <img src={mainImageBase64} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-medium">Change Image</span>
                   </div>
                </>
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <Upload className="w-5 h-5 mb-1 text-gray-400" />
                  <span className="text-sm font-medium">Add Image</span>
                </div>
              )}
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleMainImageChange} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">Main Description Blocks</label>
            </div>
            
            <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
              {mainDis.map((section, index) => (
                <div key={index} className="flex gap-4 items-start relative bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex-1 space-y-3">
                    <input
                      type="text"
                      placeholder="Sub Heading"
                      value={section.subHeading}
                      onChange={(e) => updateMainDisSection(index, 'subHeading', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 text-[#002147] placeholder-[#002147]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147]"
                    />
                    <textarea
                      placeholder="Sub Paragraph"
                      value={section.subPara}
                      onChange={(e) => updateMainDisSection(index, 'subPara', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-200 text-[#002147] placeholder-[#002147]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] resize-none"
                    />
                  </div>
                  
                  {mainDis.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMainDisSection(index)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors mt-1"
                      title="Remove Block"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addMainDisSection}
                className="w-full py-3 bg-white border border-dashed border-gray-300 text-gray-500 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Another Block
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isPending}
            className="self-end px-8 py-3 bg-[#da251d] text-white font-medium rounded-xl hover:bg-[#da251d]/90 transition-colors disabled:opacity-70 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Publish Blog
          </button>
        </form>
      </div>

      {/* Existing Blogs */}
      <div className="space-y-6">
        {initialBlogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              disabled={isPending}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
              title="Delete Blog"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            
            <div className="flex gap-4 items-center mb-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(blog.date).toLocaleDateString()}</span>
              <span className="flex items-center gap-1.5"><LayoutList className="w-4 h-4" /> {blog.category}</span>
            </div>
            
            <div className="flex items-start gap-6">
              {blog.mainImage && (
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                  <img src={blog.mainImage} alt="Blog main" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#002147] pr-12 mb-2">{blog.sectionDis}</h3>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
              <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2"><Text className="w-4 h-4" /> Content Blocks ({blog.mainDis.length})</h4>
              
              <div className="grid grid-cols-1 gap-4">
                {blog.mainDis.map((block, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {block.subHeading && <h5 className="font-bold text-[#002147] mb-1">{block.subHeading}</h5>}
                    {block.subPara && <p className="text-sm text-gray-600 leading-relaxed">{block.subPara}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {initialBlogs.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-gray-100 border-dashed">
            No blogs created yet.
          </div>
        )}
      </div>
    </div>
  );
}
