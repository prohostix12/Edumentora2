'use client';

import React, { useTransition, useState } from 'react';
import { createSection, deleteSection, addImages, removeImageUrl } from '@/app/admin/gallery/actions';
import { Trash2, Plus, Image as ImageIcon, Upload, Loader2 } from 'lucide-react';

type Gallery = {
  id: string;
  section: string;
  images: string[];
};

export default function GalleryManager({ initialGalleries }: { initialGalleries: Gallery[] }) {
  const [isPending, startTransition] = useTransition();
  const [uploadingSectionId, setUploadingSectionId] = useState<string | null>(null);

  const handleCreateSection = (formData: FormData) => {
    startTransition(() => {
      createSection(formData);
    });
  };

  const handleDeleteSection = (id: string) => {
    if (confirm('Are you sure you want to delete this entire section and all its images?')) {
      startTransition(() => {
        deleteSection(id);
      });
    }
  };

  const handleRemoveImage = (id: string, url: string, currentImages: string[]) => {
    if (confirm('Remove this image?')) {
      startTransition(() => {
        removeImageUrl(id, url, currentImages);
      });
    }
  };

  // Helper to compress image before converting to base64
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
          
          // Compress to webp for better sizing in MongoDB
          const dataUrl = canvas.toDataURL('image/webp', 0.8);
          resolve(dataUrl);
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, sectionId: string) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingSectionId(sectionId);

    try {
      const base64Images: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const compressedBase64 = await compressImage(files[i]);
        base64Images.push(compressedBase64);
      }

      startTransition(() => {
        addImages(sectionId, base64Images).finally(() => {
          setUploadingSectionId(null);
        });
      });
    } catch (error) {
      console.error("Error processing images:", error);
      alert("Failed to process images.");
      setUploadingSectionId(null);
    }
    
    // Reset file input
    e.target.value = '';
  };

  return (
    <div className="space-y-8">
      {/* Create Section Form */}
      <div className="bg-[#F5F5F5] p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-[#002147] mb-4">Create New Section</h2>
        <form action={handleCreateSection} className="flex gap-4">
          <input
            type="text"
            name="sectionName"
            required
            className="flex-1 px-4 py-2 border border-gray-200 text-[#002147] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147]"
          />
          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2 bg-[#8B0000] text-white font-medium rounded-xl hover:bg-[#8B0000]/90 transition-colors disabled:opacity-70 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Section
          </button>
        </form>
      </div>

      {/* Existing Sections */}
      <div className="space-y-6">
        {initialGalleries.map((gallery) => (
          <div key={gallery.id} className="bg-[#F5F5F5] p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{gallery.section}</h3>
                <p className="text-sm text-gray-500">{gallery.images.length} images</p>
              </div>
              <button
                onClick={() => handleDeleteSection(gallery.id)}
                disabled={isPending || uploadingSectionId === gallery.id}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                title="Delete Section"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Add Image Form (File Upload) */}
            <div className="flex gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
              <label className="flex-1 flex flex-col items-center justify-center py-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
                {uploadingSectionId === gallery.id ? (
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing and Uploading...
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-600">Click to select images</span>
                    <span className="text-xs text-gray-500 mt-1">Supports multiple JPG, PNG, WEBP</span>
                  </>
                )}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, gallery.id)}
                  disabled={isPending || uploadingSectionId === gallery.id}
                />
              </label>
            </div>

            {/* Images Grid */}
            {gallery.images.length === 0 ? (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                No images in this section yet. Upload some files above!
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {gallery.images.map((url, index) => (
                  <div key={index} className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <img
                      src={url}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => handleRemoveImage(gallery.id, url, gallery.images)}
                        disabled={isPending}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transform scale-75 group-hover:scale-100 transition-all"
                        title="Remove Image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {initialGalleries.length === 0 && (
          <div className="text-center py-16 bg-[#F5F5F5] rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Gallery Sections</h3>
            <p className="text-gray-500">Create your first section above to start building your gallery.</p>
          </div>
        )}
      </div>
    </div>
  );
}
