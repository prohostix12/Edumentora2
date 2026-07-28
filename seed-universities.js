const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const universitiesData = [
  {
    name: "Glocal University",
    location: "Saharanpur, Uttar Pradesh",
    certificates: ["UGC Approved", "BCI", "PCI"],
    description: "Glocal University is a leading multidisciplinary institution, offering over 55 undergraduate, postgraduate, and professional courses across eight major schools, including Engineering, Management, Law, and Pharmacy. Spread across a scenic 350-acre campus in the Langha Range Hills, it provides a perfect blend of academic excellence and real-world application. Established under the Glocal University Act, 2011, and recognized by the UGC, the university emphasizes holistic growth through practical learning, industry exposure, and leadership development.",
    mainImage: "/glocal_campus.jpg"
  },
  {
    name: "Arni University",
    location: "Kathgarh, Kangra, HP",
    certificates: ["UGC Approved"],
    description: "Established in 2009, Arni University is located in Kathgarh, Kangra, amidst the serene foothills of the Dhauladhar Mountain Ranges. Spanning 120 acres, the campus offers state-of-the-art infrastructure, including modern classrooms, well-equipped labs, a Wi-Fi-enabled environment, and comfortable hostels. Recognized by the UGC, Arni University delivers high-quality multidisciplinary education with over 200 expert instructors and an Industry 4.0 curriculum.",
    mainImage: "/arni_campus.jpg"
  },
  {
    name: "Maya Devi University",
    location: "Dehradun, Uttarakhand",
    certificates: ["UGC Approved", "AICTE"],
    description: "With a distinguished legacy of 15 years, established in 2010, Maya Group of Colleges has been conferred university status as Maya Devi University under the Uttarakhand Private University (Amendment) Act, 2024. The University is equipped with world-class infrastructure, strong social values, and a commitment to excellence in teaching, learning, and research. Through a strong corporate and industry interface, it provides an ideal platform for nurturing technocrats, entrepreneurs, and future leaders.",
    mainImage: "/maya-devi_campus.png"
  },
  {
    name: "Manipur University",
    location: "Imphal, Manipur",
    certificates: ["UGC Approved", "NAAC"],
    description: "Manipur University, established in 1980 and converted into a Central University in 2005, is located in the historic Canchipur, Imphal. Spread across 287 acres, the university is a premier institution of higher learning in the Northeast. It offers a wide array of programs in Sciences, Humanities, Social Sciences, Medicine, and Engineering. Committed to academic excellence and research, Manipur University provides a dynamic and inclusive environment that fosters innovation, cultural growth, and global competitiveness.",
    mainImage: "/manipur_international_university.jpg"
  }
];

async function main() {
  console.log('Seeding universities...');
  for (const uni of universitiesData) {
    // Check if it already exists to avoid duplicates
    const existing = await prisma.university.findFirst({
      where: { name: uni.name }
    });
    
    if (!existing) {
      await prisma.university.create({
        data: uni
      });
      console.log(`Created: ${uni.name}`);
    } else {
      console.log(`Skipped (already exists): ${uni.name}`);
    }
  }
  console.log('Seeding finished.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
