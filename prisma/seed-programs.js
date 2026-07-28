/**
 * Seed Script: Clear all Programs and insert clean dummy data.
 * Run with: node prisma/seed-programs.js
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const dummyPrograms = [
  {
    topic: 'Apprenticeship',
    heroImage: null,
    heading: 'Employee Apprenticeship-Learning Program (EALP)',
    subHeading: 'Convert Work Experience into Academic Credits',
    paragraph:
      'The Employee Apprenticeship-Based Learning Program (EALP) is a unique opportunity for working professionals to complete their degree without restarting from the beginning. This program recognizes your work experience and converts it into academic credits, allowing you to earn a UG or PG degree in a shorter time while continuing your job.',
    blocks: [
      {
        type: 'text',
        heading: 'How It Works',
        paragraph:
          'The EALP is built around the idea that real-world experience is as valuable as classroom learning. We evaluate your years of service and map them against accredited university curricula to award you the credits you deserve.',
      },
      {
        type: 'cards',
        heading: 'Key Benefits',
        paragraph: 'Here is why thousands of working professionals choose the EALP every year.',
        cards: [
          {
            cardHeading: 'Work Experience as Credits',
            cardPara:
              'If you have 2+ years of work experience, it will be evaluated and counted as part of your degree. You skip subjects where you already have practical knowledge.',
          },
          {
            cardHeading: 'Reduced Study Duration',
            cardPara:
              'Instead of the traditional 3–4 year degree, your work experience helps you complete the course faster. The exact duration depends on your experience.',
          },
          {
            cardHeading: 'Flexible Learning Options',
            cardPara:
              'Study through online classes, weekend sessions, or a hybrid model while continuing your job. Course content is industry-relevant, ensuring practical learning.',
          },
        ],
      },
      {
        type: 'arrows',
        heading: 'Available Degree Programs',
        paragraph: 'You can complete your degree in various fields, including:',
        points: [
          {
            pointHeading: 'Undergraduate Programs',
            pointList: [
              'BBA (Bachelor of Business Administration) – Ideal for business professionals',
              'B.Com (Bachelor of Commerce) – Perfect for accountants and finance experts',
              'BCA (Bachelor of Computer Applications) – Best for IT professionals',
              'B.Sc IT (Bachelor of Science in Information Technology) – For software experts',
              'B.Tech (Bachelor of Technology) – Suitable for engineering professionals',
              'BA (Bachelor of Arts) – Various specializations in humanities and social sciences',
            ],
          },
          {
            pointHeading: 'Postgraduate Programs',
            pointList: [
              'MBA (Master of Business Administration) – Perfect for managers and executives',
              'M.Com (Master of Commerce) – Ideal for senior finance professionals',
              'MCA (Master of Computer Applications) – For senior IT professionals',
              'M.Sc IT (Master of Science in Information Technology) – Best for tech leads',
              'M.Tech (Master of Technology) – For senior engineers seeking advancement',
            ],
          },
        ],
      },
    ],
  },
  {
    topic: 'WILP',
    heroImage: null,
    heading: 'Work Integrated Learning Program (WILP)',
    subHeading: 'Earn Your Degree While You Work',
    paragraph:
      "Edumentora's Work Integrated Learning Program (WILP) is specially designed for working professionals who wish to pursue higher education without interrupting their careers. This program seamlessly integrates academic learning with your professional responsibilities, allowing you to gain a recognized UGC-approved degree.",
    blocks: [
      {
        type: 'text',
        heading: 'Program Overview',
        paragraph:
          "WILP bridges the gap between formal education and industry experience. Unlike conventional degree programs, WILP allows learners to apply academic concepts directly in their workplace—making learning relevant, practical, and immediately impactful. Whether you're looking for a promotion, a career switch, or simply the satisfaction of completing a degree, WILP is your pathway.",
      },
      {
        type: 'cards',
        heading: 'Why Choose WILP?',
        paragraph: 'The WILP is specifically designed keeping a working professional\'s challenges in mind.',
        cards: [
          {
            cardHeading: 'No Career Break Required',
            cardPara:
              'Continue working full-time while earning your degree. The program is structured around weekends and evenings so you never have to choose between work and education.',
          },
          {
            cardHeading: 'Industry-Aligned Curriculum',
            cardPara:
              'Curriculum is developed in collaboration with industry experts to ensure that what you learn in the classroom is directly applicable to your professional role.',
          },
          {
            cardHeading: 'UGC Recognised Degrees',
            cardPara:
              'All degrees offered through WILP are approved by the UGC and accredited by NAAC, ensuring your qualification is recognized by employers across India and internationally.',
          },
          {
            cardHeading: 'Mentorship Support',
            cardPara:
              'Access dedicated academic mentors who guide you through coursework, assignments, and examinations so you are never left to navigate the journey alone.',
          },
        ],
      },
      {
        type: 'arrows',
        heading: 'Eligibility & Specialisations',
        paragraph: 'WILP is open to a wide range of professionals across industries.',
        points: [
          {
            pointHeading: 'Eligibility Criteria',
            pointList: [
              'Minimum 1 year of full-time work experience in any industry',
              'Must be currently employed at the time of admission',
              '12th Pass or equivalent for UG programs',
              'Graduation in any discipline for PG programs',
              'No age bar — anyone can apply regardless of age',
            ],
          },
          {
            pointHeading: 'Popular Specialisations',
            pointList: [
              'Business Administration & Management',
              'Information Technology & Computer Science',
              'Commerce & Financial Management',
              'Human Resource Management',
              'Marketing & Supply Chain Management',
              'Engineering Technology (Lateral Entry)',
            ],
          },
        ],
      },
    ],
  },
];

async function main() {
  console.log('🗑️  Deleting all existing programs...');
  await prisma.program.deleteMany({});
  console.log('✅ All programs deleted.');

  console.log('🌱 Seeding new programs...');
  for (const program of dummyPrograms) {
    const created = await prisma.program.create({ data: program });
    console.log(`   ✅ Created: "${created.heading}"`);
  }

  console.log('\n🎉 Done! 2 dummy programs have been created.');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
