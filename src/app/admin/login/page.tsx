'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authenticateAdmin } from '../actions';
import { Lock, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await authenticateAdmin(password);
      if (res.success) {
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-[Poppins]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#da251d]" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-[#172A53] mb-2">Admin Access</h1>
        <p className="text-center text-gray-500 mb-8">Enter your secure password to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da251d]/20 focus:border-[#da251d] transition-colors"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#172A53] hover:bg-[#0f1d3a] text-white py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Login'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
