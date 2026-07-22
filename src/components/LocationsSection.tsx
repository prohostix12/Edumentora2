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
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {locations.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {col.map((location, index) => (
                <li key={index}>
                  <Link 
                    href={location.url} 
                    className="text-gray-700 hover:text-blue-600 hover:underline text-sm md:text-base transition-colors font-medium"
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
