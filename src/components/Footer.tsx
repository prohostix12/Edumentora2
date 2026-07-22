'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Smartphone, Mail, Map } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full text-white relative">
      
      {/* Main Footer Content */}
      <div className="bg-[#0f172a] bg-opacity-95 bg-[url('https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: About */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-6">About</h4>
              <p className="text-white/80 text-sm leading-relaxed pr-4">
                Your trusted partner in education, offering expert guidance and innovative learning resources to empower students and professionals for academic and career success.
              </p>
              <div className="pt-4">
                <Image 
                  src="/logo.svg" 
                  alt="Edumentora Logo" 
                  width={150} 
                  height={50}
                  className="brightness-0 invert opacity-90"
                  onError={(e) => {
                    // Fallback if logo.svg is not available in white
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback textual logo if image fails */}
                <div className="flex items-center gap-2">
                   <div className="text-2xl font-bold italic tracking-tighter">edu<span className="text-red-500">Mentora</span></div>
                </div>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#" },
                  { name: "About Us", href: "#" },
                  { name: "Credit Transfer", href: "#" },
                  { name: "Universities", href: "#" },
                  { name: "Contact Us", href: "#" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="group flex items-center text-white/80 hover:text-white text-sm transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2 text-white/60 group-hover:text-white transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Credit Transfer */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">Credit Transfer</h4>
              <ul className="space-y-4">
                {[
                  { name: "B.Tech Credit Transfer", href: "#" },
                  { name: "PG Credit Transfer", href: "#" },
                  { name: "UG Credit Transfer", href: "#" },
                  { name: "Diploma Credit Transfer", href: "#" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="group flex items-center text-white/80 hover:text-white text-sm transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2 text-white/60 group-hover:text-white transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">Contact Info</h4>
              <div className="space-y-6 text-sm">
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white mb-1 text-base">Phone Number</p>
                    <p className="text-white/80">+91 974458 7777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white mb-1 text-base">Email Address</p>
                    <p className="text-white/80">info@edumentora.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white mb-1 text-base">Location</p>
                    <p className="text-white/80">Calicut | Kochi</p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#da251d] py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm font-medium">Copyright &copy; {new Date().getFullYear()} Edumentora.</p>
        </div>
      </div>
      
    </footer>
  );
}
