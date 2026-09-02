// One-off insertion script for the content-authority article:
// "How to Choose a Credit Transfer Institute in Kerala: What to Actually Check"
// Run once with: node scripts/seed-how-to-choose-institute-blog.js
// Uses the exact same field shape as src/app/admin/blogs/actions.ts's createBlog().
// No shared renderer changes needed — this article only uses plain
// paragraphs and one inline link, both already supported since Step 8.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mainDis = [
  {
    subHeading: '',
    subPara:
      "If you've searched for credit transfer options in Kerala, you've probably noticed every institute calls itself the best, the No. 1, or the most trusted. That makes the decision harder, not easier — a claim in a headline doesn't tell you anything about whether an institute will actually get your credits recognized. Here's what genuinely matters, based on how the credit transfer process itself works.",
  },
  {
    subHeading: "1. Confirm the receiving university's recognition yourself",
    subPara:
      "Before anything else, check that the university you'd be transferring into is UGC-recognized and, for engineering programs, AICTE-approved — directly on the UGC and AICTE websites, not just on the institute's own page. A consultancy can be well-meaning and still point you toward a university whose recognition status has changed. This five-minute check protects a degree you may spend two or three years finishing.",
  },
  {
    subHeading: '2. Understand how your credits actually get evaluated',
    subPara:
      'Legitimate credit transfer isn\'t a blanket approval — it\'s a subject-by-subject comparison. The receiving university reviews your mark sheets and the syllabus you followed, and maps each completed subject against its own curriculum. Subjects that align closely are carried forward as credit; anything that doesn\'t align clearly gets flagged for the university\'s own decision. If an institute promises 100% of your credits will transfer before it has even seen your academic records, that\'s a claim to be skeptical of — the honest answer is "it depends on the overlap," not a fixed number.',
  },
  {
    subHeading: '3. Ask what happens to backlogs specifically',
    subPara:
      "If you're transferring with pending backlogs, ask directly how those are handled — whether they need to be cleared before admission, alongside it, or under some other arrangement specific to the receiving university. This varies by institution and shouldn't be glossed over in the first conversation.",
  },
  {
    subHeading: '4. Check whether the study mode fits your actual situation',
    subPara:
      "Regular, distance, and online formats aren't interchangeable, and not every university offers all three for every program. If you need flexibility because of work or location, confirm that upfront rather than assuming it's available.",
  },
  {
    subHeading: '5. Look for a real, verifiable reason for the gap requirement',
    subPara:
      "Universities considering a credit transfer application are typically evaluating why you're transferring — relocation, a paused semester, an institution that closed or lost recognition. A process that skips this evaluation entirely, or treats every applicant identically, is worth a second look.",
  },
  {
    subHeading: '6. Be cautious of pressure to pay before verification is complete',
    subPara:
      "A trustworthy process lets you verify recognition and get a realistic sense of your credit mapping before you're asked to commit financially. If you're being pushed to pay quickly, before your records have even been reviewed, slow down.",
  },
  {
    subHeading: '7. Talk to a real person, and ask for specifics',
    subPara:
      'A generic brochure answer ("yes, we handle everything") is not the same as someone reviewing your actual mark sheets and explaining what\'s realistic for your case. Ask questions until you get an answer specific to your situation, not a marketing line.',
  },
  {
    subHeading: '',
    subPara:
      "None of this is about any one institute being better than another — it's the same evaluation any reasonable applicant should run before choosing where to continue their degree. [Edumentora's own process](/b-tech-credit-transfer) follows exactly this structure: recognition verification first, subject-by-subject credit mapping, and a clear conversation about backlogs and study-mode options before anything else.",
  },
];

(async () => {
  const created = await prisma.blog.create({
    data: {
      date: new Date(),
      category: 'Academic Credit Transfer',
      sectionDis: 'How to Choose a Credit Transfer Institute in Kerala: What to Actually Check',
      author: null,
      mainImage: null,
      mainDis,
    },
  });
  console.log('Created blog id:', created.id);
  console.log('URL: /blog/' + created.id);
  await prisma.$disconnect();
})();
