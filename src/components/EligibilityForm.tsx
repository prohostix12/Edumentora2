'use client';

import React, { useState } from 'react';
import { submitEligibilityRequest } from '@/app/eligibility/actions';

interface EligibilityFormProps {
  className?: string;
}

export default function EligibilityForm({ className = 'space-y-6' }: EligibilityFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupState, setPopupState] = useState<'checking' | 'success' | 'error'>('checking');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setPopupState('checking');
    setShowPopup(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitEligibilityRequest(formData);

    if (result.success) {
      setStatus('success');
      setPopupState('success');
      e.currentTarget.reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
      setPopupState('error');
    }
  };

  return (
    <>
      <form className={`w-full ${className}`} onSubmit={handleSubmit}>
        {status === 'error' && !showPopup && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center mb-4">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="phone"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Phone
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="place"
              name="place"
              placeholder="Place"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="place"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Place
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="course"
              name="course"
              placeholder="Course"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="course"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Course
            </label>
          </div>

          <div className="relative col-span-2">
            <input
              type="text"
              id="previousUniversity"
              name="previousUniversity"
              placeholder="Previous University"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="previousUniversity"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Previous University
            </label>
          </div>

          <div className="relative col-span-2">
            <input
              type="text"
              id="courseCompletedYear"
              name="courseCompletedYear"
              placeholder="Course Completed Year"
              className="peer w-full px-3.5 pt-5 pb-1.5 text-sm text-[#1B4B43] font-medium rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#C9A66B]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/15 focus:border-[#C9A66B] transition-all placeholder-transparent"
              required
            />
            <label
              htmlFor="courseCompletedYear"
              className="absolute left-3.5 top-1.5 text-[10px] font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
            >
              Course Completed Year
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-[#C9A66B] to-[#8A6D3B] hover:from-[#8A6D3B] hover:to-[#8A6D3B] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#C9A66B]/25 hover:shadow-xl hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Checking...' : 'Check Eligibility Now'}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border border-gray-100">
            <div className="flex flex-col gap-4">
              {popupState === 'checking' && (
                <>
                  <h3 className="text-2xl font-bold text-[#1B4B43]">Checking Eligibility</h3>
                  <p className="text-gray-600">We are checking your details now. Please wait a moment.</p>
                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-3/4 bg-[#C9A66B] animate-pulse" />
                  </div>
                </>
              )}

              {popupState === 'success' && (
                <>
                  <h3 className="text-2xl font-bold text-[#1B4B43]">Request Submitted</h3>
                  <p className="text-gray-600">Your eligibility request has been saved. We will contact you shortly.</p>
                </>
              )}

              {popupState === 'error' && (
                <>
                  <h3 className="text-2xl font-bold text-[#1B4B43]">Submission Failed</h3>
                  <p className="text-gray-600">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </>
              )}

              <button
                onClick={() => {
                  if (popupState === 'success') {
                    setShowPopup(false);
                    setStatus('idle');
                  } else {
                    setShowPopup(false);
                  }
                }}
                className="mt-4 w-full bg-[#da251d] hover:bg-[#b91c1c] text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {popupState === 'checking' ? 'Close' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
