const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const structuredPrograms = [
  {
    topic: 'Apprenticeship',
    heroImage: null,
    heading: 'Apprenticeship program at Edumentora',
    subHeading: 'Earn a Recognized Degree Faster by Converting Your Work Experience into Academic Credits',
    paragraph: 'Edumentora’s apprenticeship credit transfer lets you carry your earned experience to new opportunities. Stay on track, keep learning, and grow without interruption.',
    blocks: [
      {
        type: 'apprenticeship-layout',
        data: {
          overviews: [
            {
              heading: 'Employee Apprenticeship-Learning Program (EALP)',
              subHeading: 'Earn a Recognized Degree Faster by Converting Your Work Experience into Academic Credits',
              paragraph: 'The Employee Apprenticeship-Based Learning Program (EALP) is a unique opportunity for working professionals to complete their degree without restarting from the beginning. This program recognizes your work experience and converts it into academic credits, allowing you to earn a UG or PG degree in a shorter time while continuing your job.'
            }
          ],
          howItWorksBlocks: [
            {
              sectionTitle: 'How it Works',
              steps: [
                { heading: 'Work Experience as Academic Credits', description: 'If you have 2+ years of work experience, it will be evaluated and counted as part of your degree. You don’t need to study subjects where you already have practical knowledge.' },
                { heading: 'Reduced Study Duration', description: 'Instead of the traditional 3–4-year degree, your work experience helps you complete the course faster. The exact duration depends on your experience and the course requirements.' },
                { heading: 'Flexible Learning Options', description: 'Study through online classes, weekend sessions, or a hybrid model while continuing your job. Course content is industry-relevant, ensuring practical learning.' }
              ]
            }
          ],
          programsBlocks: [
            {
              sectionTitle: 'Available Degree Programs',
              ugPrograms: [
                'BBA (Bachelor of Business Administration) – Ideal for business professionals',
                'B.Com (Bachelor of Commerce) – Perfect for accountants and finance experts',
                'BCA (Bachelor of Computer Applications) – Best for IT professionals',
                'B.Sc IT (Bachelor of Science in Information Technology) – For software and tech experts',
                'B.Tech (Bachelor of Technology) – Suitable for engineering professionals in various fields',
                'BA (Bachelor of Arts) – Various specializations in humanities and social sciences'
              ],
              pgPrograms: [
                'MBA (Master of Business Administration) – For career growth in management',
                'M.Com (Master of Commerce) – Advanced knowledge for commerce and finance professionals',
                'MCA (Master of Computer Applications) – Higher studies in IT and computer applications',
                'M.Tech (Master of Technology) – For engineers looking for specialization and advanced knowledge'
              ],
              whoCanApply: [
                'Working professionals who discontinued their studies and want to complete their degree.',
                'Employees with 2+ years of industry experience who want an academic qualification.',
                'People seeking career growth and better job opportunities.',
                'Corporate professionals who want to upskill and move up the career ladder.'
              ],
              image: ''
            }
          ],
          whyChooseBlocks: [
            {
              sectionTitle: 'Why Choose EALP?',
              points: [
                'Complete Your Degree Faster – Work experience reduces study time.',
                'Work & Study Together – No need to quit your job.',
                'Flexible Learning – Online, weekend, or hybrid classes available.',
                'Recognized Degree – Accepted for jobs, promotions, and further studies.',
                'Industry-Relevant Curriculum – Courses designed to match your field of work.'
              ],
              conclusion: 'This program helps you achieve your educational goals while leveraging your professional experience. Your hard work and skills deserve academic recognition—now you can earn your degree without starting from scratch!'
            }
          ]
        }
      }
    ]
  },
  {
    topic: 'WILP',
    heroImage: null,
    heading: 'Work Integrated Learning Program (WILP)',
    subHeading: 'Earn Your Degree While You Work',
    paragraph: "Edumentora's Work Integrated Learning Program (WILP) is specially designed for working professionals who wish to pursue higher education without interrupting their careers. This program seamlessly integrates academic learning with your professional responsibilities, allowing you to gain a recognized UGC-approved degree.",
    blocks: [
      {
        type: 'apprenticeship-layout',
        data: {
          overviews: [
            {
              heading: 'Program Overview',
              subHeading: '',
              paragraph: "WILP bridges the gap between formal education and industry experience. Unlike conventional degree programs, WILP allows learners to apply academic concepts directly in their workplace—making learning relevant, practical, and immediately impactful. Whether you're looking for a promotion, a career switch, or simply the satisfaction of completing a degree, WILP is your pathway."
            }
          ],
          howItWorksBlocks: [
            {
              sectionTitle: 'Why Choose WILP?',
              steps: [
                { heading: 'No Career Break Required', description: 'Continue working full-time while earning your degree. The program is structured around weekends and evenings so you never have to choose between work and education.' },
                { heading: 'Industry-Aligned Curriculum', description: 'Curriculum is developed in collaboration with industry experts to ensure that what you learn in the classroom is directly applicable to your professional role.' },
                { heading: 'UGC Recognised Degrees', description: 'All degrees offered through WILP are approved by the UGC and accredited by NAAC, ensuring your qualification is recognized by employers across India and internationally.' }
              ]
            }
          ],
          programsBlocks: [
            {
              sectionTitle: 'Eligibility & Specialisations',
              ugPrograms: [
                'Minimum 1 year of full-time work experience in any industry',
                'Must be currently employed at the time of admission',
                '12th Pass or equivalent for UG programs'
              ],
              pgPrograms: [
                'Graduation in any discipline for PG programs',
                'No age bar — anyone can apply regardless of age'
              ],
              whoCanApply: [
                'Business Administration & Management',
                'Information Technology & Computer Science',
                'Commerce & Financial Management',
                'Human Resource Management',
                'Marketing & Supply Chain Management',
                'Engineering Technology (Lateral Entry)'
              ],
              image: ''
            }
          ],
          whyChooseBlocks: []
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Seeding new structured programs...');
  for (const program of structuredPrograms) {
    const created = await prisma.program.create({ data: program });
    console.log(`   ✅ Created: "${created.heading}"`);
  }

  console.log('\n🎉 Done! Programs have been created.');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
