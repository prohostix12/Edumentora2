"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Building2, Award, GraduationCap, MapPin, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

const universitiesData = [
  {
    id: 1,
    university: "Glocal University",
    location: "Saharanpur, Uttar Pradesh",
    accreditation: "UGC Approved, BCI, PCI",
    programs: "55+ UG & PG Courses",
    description: "Glocal University is a leading multidisciplinary institution, offering over 55 undergraduate, postgraduate, and professional courses across eight major schools, including Engineering, Management, Law, and Pharmacy. Spread across a scenic 350-acre campus in the Langha Range Hills, it provides a perfect blend of academic excellence and real-world application. Established under the Glocal University Act, 2011, and recognized by the UGC, the university emphasizes holistic growth through practical learning, industry exposure, and leadership development.",
    image: "/glocal_campus.jpg"
  },
  {
    id: 2,
    university: "Arni University",
    location: "Kathgarh, Kangra, HP",
    accreditation: "UGC Approved",
    programs: "Engineering, Arts, Management",
    description: "Established in 2009, Arni University is located in Kathgarh, Kangra, amidst the serene foothills of the Dhauladhar Mountain Ranges. Spanning 120 acres, the campus offers state-of-the-art infrastructure, including modern classrooms, well-equipped labs, a Wi-Fi-enabled environment, and comfortable hostels. Recognized by the UGC, Arni University delivers high-quality multidisciplinary education with over 200 expert instructors and an Industry 4.0 curriculum.",
    image: "/arni_campus.jpg"
  },
  {
    id: 3,
    university: "Maya Devi University",
    location: "Dehradun, Uttarakhand",
    accreditation: "UGC Approved, AICTE",
    programs: "Engineering, Pharmacy, Agri",
    description: "With a distinguished legacy of 15 years, established in 2010, Maya Group of Colleges has been conferred university status as Maya Devi University under the Uttarakhand Private University (Amendment) Act, 2024. The University is equipped with world-class infrastructure, strong social values, and a commitment to excellence in teaching, learning, and research. Through a strong corporate and industry interface, it provides an ideal platform for nurturing technocrats, entrepreneurs, and future leaders.",
    image: "/maya-devi_campus.png"
  },
  {
    id: 4,
    university: "Manipur University",
    location: "Imphal, Manipur",
    accreditation: "UGC Approved, NAAC",
    programs: "UG, PG, PhD Programs",
    description: "Manipur University, established in 1980 and converted into a Central University in 2005, is located in the historic Canchipur, Imphal. Spread across 287 acres, the university is a premier institution of higher learning in the Northeast. It offers a wide array of programs in Sciences, Humanities, Social Sciences, Medicine, and Engineering. Committed to academic excellence and research, Manipur University provides a dynamic and inclusive environment that fosters innovation, cultural growth, and global competitiveness.",
    image: "/manipur_international_university.jpg"
  }
];

function UniversitiesContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const filters = ['All', 'Glocal University', 'Arni University', 'Maya Devi University', 'Manipur University'];
  
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
    <main className="min-h-screen bg-[#faf9f6] pt-24 font-[Poppins]">
      <Header />
      
      {/* Modern Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0B1733] via-[#172A53] to-[#254175] overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-500 blur-[120px]"></div>
          <div className="absolute top-[20%] right-[15%] opacity-30">
            <GraduationCap size={180} className="text-white" strokeWidth={0.5} />
          </div>
          {/* Dotted Pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-24 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white leading-tight tracking-tight mb-6">
            Partner Universities
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
            Explore our globally recognized partner institutions and discover the perfect program for your academic journey and credit transfer.
          </p>
        </div>
      </div>

      {/* Filter & Grid Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
        
        {/* Modern Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-medium text-[15px] tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#E53935] text-white shadow-[0_8px_20px_-6px_rgba(229,57,53,0.5)] transform -translate-y-0.5'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#172A53] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {filteredData.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[28px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100/80 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(23,42,83,0.15)] hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top: Image Wrapper */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.university} 
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#172A53] to-[#254175] flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Middle: Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-[28px] font-semibold text-[#172A53] mb-2 leading-[1.2] tracking-tight">
                  {item.university}
                </h3>
                
                {item.location && (
                  <div className="flex items-center text-gray-500 mb-5 text-[15px]">
                    <MapPin className="w-4 h-4 mr-1.5 text-[#E53935]" />
                    {item.location}
                  </div>
                )}

                <p className="text-[16px] text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Info Row: Highlights */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 pt-6 border-t border-gray-100/80">
                  <div className="flex items-start text-[14px] text-gray-600">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">UGC Approved</span>
                  </div>
                  {item.accreditation && (
                    <div className="flex items-start text-[14px] text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item.accreditation}</span>
                    </div>
                  )}
                  {item.programs && (
                    <div className="flex items-start text-[14px] text-gray-600 col-span-2">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item.programs}</span>
                    </div>
                  )}
                </div>

                {/* Bottom: Buttons */}
                <div className="mt-auto flex gap-3 pt-2">
                  <Link href={`/contact`} className="flex-1 bg-[#172A53] hover:bg-[#0f1d3a] text-white text-[15px] font-medium py-3.5 px-4 rounded-xl flex items-center justify-center transition-colors shadow-sm">
                    View Details
                  </Link>
                  <Link href="/contact" className="flex-1 bg-white hover:bg-gray-50 text-[#172A53] text-[15px] font-medium py-3.5 px-4 rounded-xl border border-gray-200 flex items-center justify-center transition-colors">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center text-gray-500 py-32 text-xl font-medium animate-in fade-in">
            No universities found for {activeFilter}.
          </div>
        )}
      </div>

      {/* Informational Text Section */}
      <div className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8 text-[17px] text-gray-600 leading-[1.8]">
          <h2 className="text-3xl font-bold text-[#172A53] mb-8 text-center">Why Choose University Credit Transfer?</h2>
          <p>
            Many students reach a point where they want to change their university. The reason may be different for everyone – some go to another city with their family, some seek better courses or features, and others want a university that provides more career support. In such cases, starting the degree all over again would feel unfair. This is why University Credit Transfer exists.
          </p>
          <p>
            With University Credit Transfer, the subjects and credits a student has already earned will never go to waste. Instead, the new university reviews the mark sheets and syllabus from the previous institution and then accepts the subjects that match. After approval, the student can continue from the right semester rather than beginning from the first year.
          </p>
          <p>
            The university credit transfer saves both time and money. This is the main advantage of choosing this credit. Students do not need to repeat classes that they have already passed. It also provides flexibility, which gives them a chance to study in a suitable location that fits with their personal or business goals.
          </p>
          <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-[#172A53] font-medium">
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
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center text-gray-500 font-medium">Loading universities...</div>}>
      <UniversitiesContent />
    </Suspense>
  );
}
