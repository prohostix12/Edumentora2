// One-off insertion script for the Step 11 content-authority article:
// "How Much Academic Time Can You Save or Lose With B.Tech Credit Transfer?"
// Run once with: node scripts/seed-academic-time-blog.js
// Uses the exact same field shape as src/app/admin/blogs/actions.ts's createBlog().
// No shared renderer changes needed — plain paragraphs, one bullet list, and
// inline links are all already supported since the Step 8 renderer upgrade.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Verified against the live database before writing this file — this is the
// real id of the existing "B.Tech Discontinued After 2 or 3 Years? Know
// Your Options." post, not an invented one.
const DISCONTINUED_POST_ID = '6a7ac6153f54f002c1660622';

const mainDis = [
  {
    subHeading: '',
    subPara:
      "One of the biggest worries for students considering B.Tech credit transfer is time — will I lose the years I've already put in, or will I have to start all over again? It's a valid concern, especially after already investing semesters of effort into a degree. The honest answer is that academic time isn't something that can be promised in advance; it depends on an evaluation of what you've already completed. This article looks at the factors that actually influence how much of your previous study may carry forward, so you can go into the process with realistic expectations rather than assumptions.",
  },
  {
    subHeading: 'Why Academic Time Is Different for Every Student',
    subPara:
      "No two students arrive at credit transfer with the same academic history. One student may have completed several semesters with only a couple of pending subjects, while another may have a shorter academic record or subjects that don't closely match the new program's syllabus. Because of this, how much time is ultimately saved — or how much additional study is needed — can vary significantly from one student to the next. There isn't a single timeline that applies to everyone.",
  },
  {
    subHeading: 'What Happens to Subjects You Have Already Completed',
    subPara:
      "Subjects you've already completed are typically reviewed against the syllabus of the program you want to join, to see how closely the content matches. This process is sometimes referred to as subject or credit equivalence. Some subjects may match closely enough to be recognized, while others may only partially align, or may need to be reviewed more carefully. This means completed subjects are not simply carried over automatically — they go through an evaluation step first.",
  },
  {
    subHeading: 'Why You May Not Need to Start Completely From the Beginning',
    subPara:
      "For many students, credit transfer is worth exploring precisely because it does not always mean restarting the degree from year one. If a meaningful portion of your previous coursework is recognized, it may be possible to continue from a more advanced point than starting fresh. That said, this isn't guaranteed for every student or every subject — it depends on how your specific academic record compares to the receiving program's requirements.",
  },
  {
    subHeading: 'What Can Affect Your Academic Placement',
    subPara:
      "Several factors can influence where a student is placed after evaluation, including the number of semesters or years already completed, how closely the previous syllabus matches the new program, the number and nature of any pending subjects or backlogs, and the specific academic policies of the receiving institution. Because these factors differ for every student, academic placement is generally decided on a case-by-case basis rather than through a fixed formula.",
  },
  {
    subHeading: 'Why Some Subjects May Need Further Evaluation',
    subPara:
      "Even when a subject appears similar by name, the actual course content, credit weightage, or depth of the syllabus can differ between institutions. This is why some subjects may need a closer look before a decision is made, rather than being accepted purely based on the subject title. In some cases, a subject might be partially recognized, or a student may be asked to complete an equivalent requirement separately.",
  },
  {
    subHeading: 'Can You Continue From the Same Semester?',
    subPara:
      "Whether you can continue from the same semester you left off, or from an earlier or later point, depends entirely on how your previous academic record is evaluated. Some students may be able to continue close to where they stopped, while others may need to complete additional subjects to meet the new program's requirements. This is decided during the academic evaluation itself and is not something that can be determined in advance without reviewing actual records.",
  },
  {
    subHeading: 'How to Get a Clearer Estimate of Your Remaining Study Time',
    subPara:
      "Since academic time depends on an individual evaluation, the most reliable way to get a realistic picture is to have your actual transcripts and completed subjects reviewed rather than relying on general assumptions. If you're exploring [B.Tech credit transfer](/b-tech-credit-transfer), understanding how the evaluation process works can help set the right expectations before you commit to a decision. Similarly, [students who have discontinued their studies](/blog/" +
      DISCONTINUED_POST_ID +
      ") partway through often find it useful to have their records assessed individually, since the number of years already completed is only one part of the picture.",
  },
  {
    subHeading: 'What Documents Can Help With an Academic Evaluation',
    subPara:
      "Having the following ready can help make an academic evaluation more accurate:\n\n" +
      "- Semester-wise mark sheets and transcripts\n" +
      "- Details of the syllabus or curriculum previously followed\n" +
      "- A list of subjects completed and any pending subjects\n" +
      "- Any existing transfer or migration-related documents\n" +
      "- Basic details of the program you want to continue into",
  },
  {
    subHeading: 'Conclusion',
    subPara:
      "There's no universal answer to how much academic time you'll save or lose with credit transfer — it depends on your specific academic record and how it's evaluated against the program you want to join. Rather than assuming a fixed outcome in either direction, the more useful step is understanding what factors are actually considered, and having your own records reviewed to get a realistic picture of where you stand.",
  },
];

(async () => {
  const created = await prisma.blog.create({
    data: {
      date: new Date(),
      category: 'B.Tech Credit Transfer',
      sectionDis: 'How Much Academic Time Can You Save or Lose With B.Tech Credit Transfer?',
      author: null,
      mainImage: null,
      mainDis,
    },
  });
  console.log('Created blog id:', created.id);
  console.log('URL: /blog/' + created.id);
  await prisma.$disconnect();
})();
