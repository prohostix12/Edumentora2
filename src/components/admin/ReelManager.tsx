'use client';

import React, { useState, useTransition, useRef } from 'react';
import { Upload, Trash2, RefreshCw } from 'lucide-react';
import { createReel, updateReel, deleteReel, type ReelCategory } from '@/app/admin/reels/actions';

type Reel = {
  id: string;
  category: string;
  videoUrl: string;
};

export default function ReelManager({ promoReels, successReels }: { promoReels: Reel[]; successReels: Reel[] }) {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<ReelCategory>('PROMO');
  const [replacingId, setReplacingId] = useState<string | null>(null);
  const addFormRef = useRef<HTMLFormElement>(null);

  const reels = activeTab === 'PROMO' ? promoReels : successReels;

  const handleAdd = (formData: FormData) => {
    startTransition(() => {
      createReel(activeTab, formData).then(() => {
        addFormRef.current?.reset();
      });
    });
  };

  const handleReplace = (id: string, file: File) => {
    const formData = new FormData();
    formData.set('video', file);
    startTransition(() => {
      updateReel(id, formData).then(() => {
        setReplacingId(null);
      });
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      startTransition(() => {
        deleteReel(id);
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('PROMO')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
            activeTab === 'PROMO'
              ? 'bg-[#002147] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Promo ({promoReels.length})
        </button>
        <button
          onClick={() => setActiveTab('SUCCESS')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
            activeTab === 'SUCCESS'
              ? 'bg-[#002147] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          Success ({successReels.length})
        </button>
      </div>

      {/* Upload Field */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-[#002147] mb-4">
          Add {activeTab === 'PROMO' ? 'Promo' : 'Success'} Video
        </h2>
        <form ref={addFormRef} action={handleAdd} className="flex flex-col gap-4">
          <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-[#002147]/40 transition-colors">
            <Upload className="w-6 h-6 text-gray-400" />
            <span className="text-sm font-semibold text-gray-500">Choose a video file to upload</span>
            <input type="file" name="video" accept="video/*" required className="text-sm text-gray-600" />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="self-end px-6 py-2 bg-[#8B0000] text-white font-medium rounded-xl hover:bg-[#8B0000]/90 transition-colors disabled:opacity-70"
          >
            {isPending ? 'Uploading...' : 'Add Video'}
          </button>
        </form>
      </div>

      {/* Video List */}
      <div>
        <h3 className="text-lg font-bold text-[#002147] mb-4">
          {activeTab === 'PROMO' ? 'Left' : 'Right'} Section Videos ({reels.length})
        </h3>
        {reels.length === 0 ? (
          <div className="py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 border-dashed">
            No {activeTab === 'PROMO' ? 'promo' : 'success'} videos added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel) => (
              <div key={reel.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="relative aspect-[9/16] bg-black">
                  <video src={reel.videoUrl} className="w-full h-full object-cover" controls preload="metadata" />
                </div>
                <div className="p-3 flex items-center justify-between gap-2">
                  <label className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 rounded-lg cursor-pointer transition-colors">
                    <RefreshCw className={`w-3.5 h-3.5 ${replacingId === reel.id && isPending ? 'animate-spin' : ''}`} />
                    Replace
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setReplacingId(reel.id);
                          handleReplace(reel.id, file);
                        }
                        e.target.value = '';
                      }}
                    />
                  </label>
                  <button
                    onClick={() => handleDelete(reel.id)}
                    disabled={isPending}
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-red-500 hover:bg-red-50 py-2 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
