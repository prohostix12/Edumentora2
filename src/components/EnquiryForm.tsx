'use client';
import React, { useState } from 'react';
import { submitEnquiry } from '@/app/contact/actions';

interface EnquiryFormProps {
  onSuccess?: () => void;
  buttonText?: string;
  className?: string;
  isGrid?: boolean;
}

export default function EnquiryForm({ 
  onSuccess, 
  buttonText = "Send Message", 
  className = "space-y-6",
  isGrid = false
}: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const result = await submitEnquiry(formData);
    
    if (result.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      if (onSuccess) {
        // slight delay before calling onSuccess to let them see the success message
        setTimeout(() => onSuccess(), 2000);
      }
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">Thank you!</h3>
        <p>Your message has been sent successfully. We will be in touch soon.</p>
        {!onSuccess && (
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Send another message
          </button>
        )}
      </div>
    );
  }

  const TopFields = (
    <>
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="peer w-full px-4 pt-7 pb-3 text-[#1B4B43] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-3 text-xs font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
        >
          Enter your name
        </label>
      </div>
      <div className="relative">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          className="peer w-full px-4 pt-7 pb-3 text-[#1B4B43] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
          required
        />
        <label
          htmlFor="phone"
          className="absolute left-4 top-3 text-xs font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
        >
          Enter phone number
        </label>
      </div>
    </>
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center mb-6">
          {errorMessage}
        </div>
      )}
      
      {isGrid ? (
        TopFields
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {TopFields}
        </div>
      )}

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className="peer w-full px-4 pt-7 pb-3 text-[#1B4B43] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white placeholder-transparent"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-3 text-xs font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
        >
          Enter email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={isGrid ? 3 : 4}
          placeholder="Message"
          className="peer w-full px-4 pt-7 pb-3 text-[#1B4B43] font-medium rounded-xl border border-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors bg-gray-50 focus:bg-white resize-none placeholder-transparent"
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-4 top-3 text-xs font-semibold text-[#1B4B43] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#1B4B43] peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#1B4B43] pointer-events-none"
        >
          Message
        </label>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className={`w-full bg-[#da251d] hover:bg-[#b91c1c] text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${isGrid ? 'md:col-span-2' : ''}`}
      >
        {status === 'loading' ? 'Sending...' : buttonText}
      </button>
    </form>
  );
}
