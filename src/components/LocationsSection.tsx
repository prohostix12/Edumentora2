'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LocationsSection() {
  const locations = [
    [
      { name: "B Tech Credit Transfer Alappuzha", url: "/b-tech-credit-transfer-alappuzha" },
      { name: "B Tech Credit Transfer Ernakulam", url: "/b-tech-credit-transfer-ernakulam" },
      { name: "B Tech Credit Transfer Idukki", url: "/b-tech-credit-transfer-idukki" },
      { name: "B Tech Credit Transfer Palakkad", url: "/b-tech-credit-transfer-palakkad" },
      { name: "B Tech Credit Transfer Wayanad", url: "/b-tech-credit-transfer-wayanad" }
    ],
    [
      { name: "B Tech Credit Transfer Kannur", url: "/b-tech-credit-transfer-kannur" },
      { name: "B Tech Credit Transfer Kasaragod", url: "/b-tech-credit-transfer-kasaragod" },
      { name: "B Tech Credit Transfer Kollam", url: "/b-tech-credit-transfer-kollam" },
      { name: "B Tech Credit Transfer Pathanamthitta", url: "/b-tech-credit-transfer-pathanamthitta" },
      { name: "BTech Credit Transfer in Kochi", url: "/b-tech-credit-transfer-in-kochi" }
    ],
    [
      { name: "B Tech Credit Transfer Kottayam", url: "/b-tech-credit-transfer-kottayam" },
      { name: "B Tech Credit Transfer Kozhikode", url: "/b-tech-credit-transfer-kozhikode" },
      { name: "B Tech Credit Transfer Malappuram", url: "/b-tech-credit-transfer-malappuram" },
      { name: "B Tech Credit Transfer Thrissur", url: "/b-tech-credit-transfer-thrissur" },
      { name: "B Tech Credit Transfer Thiruvananthapuram", url: "/b-tech-credit-transfer-thiruvananthapuram" }
    ]
  ];

  return (
    <section className="w-full bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_50%,_#fef6f2_100%)] py-16 border-t border-[#E8EDF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {locations.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-3 rounded-[1.5rem] border border-[#E8EDF7] bg-white/70 p-4 md:p-6 shadow-sm">
              {col.map((location, index) => (
                <li key={index}>
                  <Link 
                    href={location.url} 
                    className="block rounded-xl border border-transparent px-3 py-3 text-[15px] md:text-base font-semibold leading-relaxed text-[#172A53] transition-all duration-300 hover:border-[#E8EDF7] hover:bg-[#f8fbff] hover:text-[#da251d]"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
