'use client';

import React, { useTransition, useState } from 'react';
import { createUniversity, deleteUniversity, addCertificates, removeCertificate } from '@/app/admin/university/actions';
import { Trash2, Plus, Upload, Loader2, MapPin } from 'lucide-react';

type University = {
  id: string;
  name: string;
  location: string;
  description: string;
  mainImage?: string | null;
  certificates: string[];
};

export default function UniversityManager({ initialUniversities }: { initialUniversities: University[] }) {
  const [isPending, startTransition] = useTransition();
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null);
  const [textCertificates, setTextCertificates] = useState<string[]>(['']);

  const handleCreateUniversity = (formData: FormData) => {
    startTransition(() => {
      createUniversity(formData);
      const form = document.getElementById('add-university-form') as HTMLFormElement;
      if (form) form.reset();
      setMainImageBase64(null);
      setTextCertificates(['']);
    });
  };

  const handleDeleteUniversity = (id: string) => {
    if (confirm('Are you sure you want to delete this university and all its certificates?')) {
      startTransition(() => {
        deleteUniversity(id);
      });
    }
  };

  const handleRemoveCertificate = (id: string, url: string, currentCerts: string[]) => {
    if (confirm('Remove this certificate?')) {
      startTransition(() => {
        removeCertificate(id, url, currentCerts);
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
          
          const dataUrl = canvas.toDataURL('image/webp', 0.8);
          resolve(dataUrl);
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingId(id);

    try {
      const base64Images: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const compressedBase64 = await compressImage(files[i]);
        base64Images.push(compressedBase64);
      }

      startTransition(() => {
        addCertificates(id, base64Images).finally(() => {
          setUploadingId(null);
        });
      });
    } catch (error) {
      console.error("Error processing images:", error);
      alert("Failed to process images.");
      setUploadingId(null);
    }
    
    e.target.value = '';
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
      {/* Create University Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-[#172A53] mb-4">Add New University</h2>
        <form id="add-university-form" action={handleCreateUniversity} className="flex flex-col gap-4">
          <input type="hidden" name="mainImage" value={mainImageBase64 || ''} />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="University Name (e.g. Glocal University)"
              required
              className="flex-1 px-4 py-2 border border-gray-200 text-[#172A53] placeholder-[#172A53] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53]"
            />
            <input
              type="text"
              name="location"
              placeholder="Location (e.g. Saharanpur, UP)"
              required
              className="flex-1 px-4 py-2 border border-gray-200 text-[#172A53] placeholder-[#172A53] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 h-32">
            <textarea
              name="description"
              placeholder="Brief description about the university..."
              required
              className="flex-1 px-4 py-2 border border-gray-200 text-[#172A53] placeholder-[#172A53] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53] resize-none h-full"
            />
            <div className="w-full md:w-1/4 h-full flex flex-col items-center justify-center p-2 border border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden">
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
                  <span className="text-sm font-medium">Add Logo/Image</span>
                </div>
              )}
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleMainImageChange} />
            </div>
          </div>
          
          {/* Dynamic Certificates Text Fields */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-gray-700">Certificates & Approvals</label>
            {textCertificates.map((cert, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  name="certificates"
                  value={cert}
                  onChange={(e) => {
                    const newCerts = [...textCertificates];
                    newCerts[index] = e.target.value;
                    setTextCertificates(newCerts);
                  }}
                  placeholder="e.g. UGC Approved, NAAC A+"
                  className="flex-1 px-4 py-2 border border-gray-200 text-[#172A53] placeholder-[#172A53] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172A53]/20 focus:border-[#172A53]"
                />
                {index === textCertificates.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setTextCertificates([...textCertificates, ''])}
                    className="px-4 py-2 bg-gray-100 text-[#172A53] font-medium rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="self-end px-6 py-2 bg-[#172A53] text-white font-medium rounded-xl hover:bg-[#172A53]/90 transition-colors disabled:opacity-70 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add University
          </button>
        </form>
      </div>

      {/* Existing Universities */}
      <div className="space-y-6">
        {initialUniversities.map((uni) => (
          <div key={uni.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                {uni.mainImage && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                    <img src={uni.mainImage} alt={uni.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 mt-1 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{uni.location}</span>
                  </div>
                  <p className="text-sm text-gray-700 max-w-3xl">{uni.description}</p>
                </div>
              </div>
              <button
                onClick={() => handleDeleteUniversity(uni.id)}
                disabled={isPending || uploadingId === uni.id}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors flex-shrink-0"
                title="Delete University"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Certificates Text List */}
            {uni.certificates.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Certificates & Approvals ({uni.certificates.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {uni.certificates.map((cert, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#172A53]/10 text-[#172A53] text-sm font-medium rounded-full flex items-center gap-2">
                      {cert}
                      <button
                        onClick={() => handleRemoveCertificate(uni.id, cert, uni.certificates)}
                        disabled={isPending}
                        className="hover:text-red-500 transition-colors"
                        title="Remove Certificate"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {initialUniversities.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Universities Yet</h3>
            <p className="text-gray-500">Add a university above to start managing certificates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
