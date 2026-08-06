import React from 'react';
import ProfileManager from '@/components/admin/ProfileManager';

export default function AdminProfilePage() {
  return (
    <div className="p-8 font-[Poppins]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002147] mb-2">Profile</h1>
        <p className="text-gray-600">Manage your admin account security.</p>
      </div>

      <ProfileManager />
    </div>
  );
}
