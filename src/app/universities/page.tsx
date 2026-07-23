"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import UniversitiesSection from '@/components/UniversitiesSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const universitiesData = [
  {
    id: 1,
    university: "Glocal University",
    description: "Glocal University is a leading multidisciplinary institution, offering over 55 undergraduate, postgraduate, and professional courses across eight major schools, including Engineering, Management, Law, and Pharmacy. Spread across a scenic 350-acre campus in the Langha Range Hills, it provides a perfect blend of academic excellence and real-world application. Established under the Glocal University Act, 2011, and recognized by the UGC, the university emphasizes holistic growth through practical learning, industry exposure, and leadership development. With experienced faculty, state-of-the-art facilities, and global partnerships, Glocal University prepares students to thrive in a competitive world and make a meaningful impact.",
    image: "/glocal_campus.jpg"
  },
  {
    id: 2,
    university: "Arni University",
    description: "Established in 2009, Arni University is located in Kathgarh, Kangra, amidst the serene foothills of the Dhauladhar Mountain Ranges. Spanning 120 acres, the campus offers state-of-the-art infrastructure, including modern classrooms, well-equipped labs, a Wi-Fi-enabled environment, and comfortable hostels. Recognized by the UGC, Arni University delivers high-quality multidisciplinary education with over 200 expert instructors and an Industry 4.0 curriculum. Committed to fostering leadership, innovation, and academic excellence, the university ensures holistic student development through diverse learning opportunities, industry collaborations, and career-focused training, preparing students to make meaningful contributions to society.",
    image: "/arni_campus.jpg"
  },
  {
    id: 3,
    university: "Maya Devi University",
    description: "With a distinguished legacy of 15 years, established in 2010, Maya Group of Colleges has been conferred university status as Maya Devi University under the Uttarakhand Private University (Amendment) Act, 2024. The University is equipped with world-class infrastructure, strong social values, and a commitment to excellence in teaching, learning, and research. Through a strong corporate and industry interface, it provides an ideal platform for nurturing technocrats, entrepreneurs, and future leaders. Maya Devi University is dedicated to advancing professional education across engineering, management, agriculture, applied sciences, pharmacy, hospitality, commerce, animation, and computer applications.",
    image: "/maya-devi_campus.png"
  }
];

function UniversitiesContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const filters = ['All', 'Glocal University', 'Arni University', 'Maya Devi University'];
  
  const initialFilter = filterParam && filters.includes(filterParam) ? filterParam : 'All';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    if (filterParam && filters.includes(filterParam)) {
      setActiveFilter(filterParam);
    } else {
      setActiveFilter('All');
    }
  }, [filterParam]);

  const filteredData = activeFilter === 'All' 
    ? universitiesData 
    : universitiesData.filter(item => item.university === activeFilter);

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#172A53] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partner Universities
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Explore our UGC-approved partner universities and discover the perfect program for your credit transfer or higher education journey.
          </p>
        </div>
      </div>

      <UniversitiesSection />

      {/* Filter Section */}
      <div id="universities-list" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm md:text-base tracking-wide transition-all duration-300 shadow-sm ${
                activeFilter === filter
                  ? 'bg-[#da251d] text-white shadow-md transform -translate-y-1'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#172A53] border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Content List */}
        <div className="space-y-12">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row group transition-all hover:shadow-2xl">
              
              {/* Left: Image & Header */}
              <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden bg-[#172A53]">
                {item.image ? (
                  <img src={item.image} alt={item.university} className="object-cover w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#172A53] to-[#da251d] opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                   <h3 className="text-3xl md:text-4xl font-black text-white opacity-100 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-700 ease-out">
                     {item.university}
                   </h3>
                </div>
              </div>

              {/* Right: Body */}
              <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-between space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {item.description}
                </p>
                <div className="flex justify-start">
                  <Link href="/contact" className="bg-[#da251d] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State (Just in case) */}
        {filteredData.length === 0 && (
          <div className="text-center text-gray-500 py-20 text-xl font-medium">
            No universities found for {activeFilter}.
          </div>
        )}
      </div>

      {/* Informational Text Section */}
      <div className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
          <p>
            Many students reach a point where they want to change their university. The reason may be different for everyone – some go to another city with their family, some seek better courses or features, and others want a university that provides more career support. In such cases, starting the degree all over again would feel unfair. This is why University Credit Transfer exists.
          </p>
          <p>
            With University Credit Transfer, the subjects and credits a student has already earned will never go to waste. Instead, the new university reviews the mark sheets and syllabus from the previous institution and then accepts the subjects that match. After approval, the student can continue from the right semester rather than beginning from the first year.
          </p>
          <p>
            The university credit transfer saves both time and money. This is the main advantage of choosing this credit. Students do not need to repeat classes that they have already passed. It also provides flexibility, which gives them a chance to study in a suitable location that fits with their personal or business goals.
          </p>
          <p>
            For students who are thinking about moving, understanding University Credit Transfer can make the shift simple and smooth. It values past efforts and helps them finish their degree on time.
          </p>
        </div>
      </div>

      <LocationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default function UniversitiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">Loading...</div>}>
      <UniversitiesContent />
    </Suspense>
  );
}
