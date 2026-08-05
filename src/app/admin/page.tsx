import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-8 font-[Poppins]">
      <h1 className="text-3xl font-bold text-[#002147] mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F5F5F5] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center h-32">
          <p className="text-gray-500 font-medium mb-1">Total Submissions</p>
          <h2 className="text-4xl font-bold text-[#002147]">0</h2>
        </div>
        <div className="bg-[#F5F5F5] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center h-32">
          <p className="text-gray-500 font-medium mb-1">New This Week</p>
          <h2 className="text-4xl font-bold text-[#002147]">0</h2>
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-[#002147] mb-4">Welcome to Edumentora Admin</h2>
        <p className="text-gray-600">
          This is your admin dashboard. You can view contact submissions, manage your application settings, and view user analytics here. Use the sidebar to navigate to different sections of the admin panel.
        </p>
      </div>
    </div>
  );
}
