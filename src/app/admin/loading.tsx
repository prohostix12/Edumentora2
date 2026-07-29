import React from 'react';
import { Loader2 } from 'lucide-react';

export default function AdminLoading() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[500px]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-[#172A53] animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading data...</p>
      </div>
    </div>
  );
}
