// One-off insertion script for the Step 8 content-authority article:
// "Credit Transfer vs Lateral Entry: What's the Difference?"
// Run once with: node scripts/seed-lateral-entry-blog.js
// Uses the exact same field shape as src/app/admin/blogs/actions.ts's createBlog().
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mainDis = [
  {
    subHeading: '',
    subPara:
      "Many students preparing to continue an unfinished engineering degree come across two very different terms — academic credit transfer and lateral entry — and assume they mean the same thing. They don't. One is a way to carry forward credits you've already earned when moving between universities. The other is a separate admission route into the second year of a B.Tech program, generally meant for diploma holders. Confusing the two can lead to wrong expectations about eligibility, documents, and how much of your previous study will actually count. This article explains both terms in plain language so you can understand which one, if either, may be relevant to your situation.",
  },
  {
    subHeading: 'What Is Academic Credit Transfer?',
    subPara:
      "Academic credit transfer is a process that allows a student who has already completed part of a degree — one or more semesters or years — to move to another recognized university and have that previously completed academic work evaluated and counted toward the new degree, instead of restarting the course from the beginning. It is typically considered by students who discontinued their studies partway through, whether due to college-related issues, personal circumstances, or academic difficulties such as backlogs. The receiving university reviews the student's academic records, syllabus, and completed credits, and determines how much of that work can be recognized. Credit transfer does not automatically apply to every student or every university — recognition depends on the specific institution's evaluation of the student's academic history.",
  },
  {
    subHeading: 'What Is Lateral Entry?',
    subPara:
      "Lateral entry is a different academic pathway. It refers to direct admission into the second year of a four-year B.Tech program, most commonly for students who hold a diploma in engineering (or, in some cases, a B.Sc. with the required subjects). Rather than transferring credits from an incomplete B.Tech, a lateral entry student is starting the B.Tech degree for the first time, but is permitted to skip the first year based on the technical education already completed at the diploma level. Lateral entry has its own eligibility norms, seat availability, and admission process, which are set by the respective university or admitting authority, and can vary from one institution to another.",
  },
  {
    subHeading: 'Credit Transfer vs Lateral Entry',
    subPara:
      "The table below compares the two pathways at a general level. Because exact rules can vary between universities, this is meant as an overview rather than a fixed set of rules that applies everywhere.\n\n" +
      "| Aspect | Academic Credit Transfer | Lateral Entry |\n" +
      "|---|---|---|\n" +
      "| Who it may apply to | Students who already started a degree (B.Tech, UG, PG, or Diploma) and did not complete it | Diploma holders (or other eligible candidates) who have not yet started a B.Tech |\n" +
      "| Previous academic background | Partial completion of the same or a related degree program | Completion of a diploma or equivalent qualification |\n" +
      "| Purpose | Continue an incomplete degree without repeating already-completed coursework | Enter a B.Tech program directly into the second year |\n" +
      "| Academic progression | Resumes from an evaluated point based on completed credits | Begins the B.Tech degree, skipping only the first year |\n" +
      "| University/institution evaluation | Each university evaluates the student's records, syllabus match, and credits individually | Each university follows its own lateral entry admission and eligibility process |\n" +
      "| Typical student situation | Discontinued studies due to backlogs, a college issue, or personal circumstances | Completed a diploma and wants to pursue a B.Tech degree next |\n\n" +
      "Because both eligibility and credit recognition depend on the specific university and the student's individual academic record, this comparison is general in nature and not a guarantee of outcome for any particular case.",
  },
  {
    subHeading: 'Which Option May Be Relevant for You?',
    subPara:
      "Whether credit transfer or lateral entry applies to your situation depends largely on where you currently stand academically. If you have already started a B.Tech, UG, PG, or Diploma program and discontinued it partway through, credit transfer is generally the relevant pathway to look into, since it is built around evaluating and carrying forward the work you've already completed. If, instead, you hold a diploma and have not yet begun a B.Tech degree, lateral entry may be the more applicable route. In some cases, students explore [B.Tech credit transfer](/b-tech-credit-transfer) as the appropriate next step after realizing lateral entry does not apply to their situation, since they had already begun — and not completed — a degree program rather than only holding a diploma. The right pathway ultimately depends on your specific academic history and the requirements of the institution you're applying to.",
  },
  {
    subHeading: 'Important Things to Check Before Applying',
    subPara:
      "Before pursuing either pathway, it helps to have the following ready and reviewed:\n\n" +
      "- Your academic records and mark sheets from every completed semester or year\n" +
      "- A clear list of the subjects and credits you have already completed\n" +
      "- The specific eligibility requirements of the university or program you're considering, since these can differ from one institution to another\n" +
      "- The receiving university's policies on credit evaluation or lateral entry admission, including any subjects or backlogs that may need to be cleared\n" +
      "- Required documents such as transcripts, mark sheets, transfer or migration certificates, and identity proof\n\n" +
      "Students who are unsure which pathway applies to them — for example, someone who completed a diploma and is weighing [diploma to degree options](/diploma-credit-transfer) against a fresh lateral entry admission — are usually better off having their specific academic history reviewed individually rather than assuming based on general information alone.",
  },
  {
    subHeading: 'Conclusion',
    subPara:
      "Academic credit transfer and lateral entry solve two different problems. Credit transfer is for students who have already begun a degree and want their completed work recognized so they can continue rather than start over. Lateral entry is a separate admission route into the second year of a B.Tech program, primarily for diploma holders. Neither pathway guarantees admission or credit recognition automatically — both depend on an individual evaluation of academic records against the specific university's requirements. Understanding this distinction early can help you ask the right questions and avoid pursuing a pathway that doesn't match your actual academic background.",
  },
];

(async () => {
  const created = await prisma.blog.create({
    data: {
      date: new Date(),
      category: 'Academic Credit Transfer',
      sectionDis: "Credit Transfer vs Lateral Entry: What's the Difference?",
      author: null,
      mainImage: null,
      mainDis,
    },
  });
  console.log('Created blog id:', created.id);
  console.log('URL: /blog/' + created.id);
  await prisma.$disconnect();
})();
