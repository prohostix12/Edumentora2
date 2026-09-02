// One-off insertion script for the Step 10 content-authority article:
// "How Are Backlogs Evaluated for B.Tech Credit Transfer?"
// Run once with: node scripts/seed-backlog-evaluation-blog.js
// Uses the exact same field shape as src/app/admin/blogs/actions.ts's createBlog().
// No shared renderer changes needed — this article only uses plain
// paragraphs, a bullet list, and inline links, all already supported since
// the Step 8 renderer upgrade.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mainDis = [
  {
    subHeading: '',
    subPara:
      "If you've discontinued your B.Tech with one or more backlogs, one of the first questions that comes up is simple: will they be able to transfer my credits at all? It's a reasonable concern, and the honest answer is that it depends — backlogs don't automatically disqualify a student, but they also aren't something that gets waved through without any review. This article explains, in plain terms, how backlog situations are generally looked at during academic evaluation, and what actually affects the outcome.",
  },
  {
    subHeading: 'Why Backlogs Need Individual Academic Evaluation',
    subPara:
      "A backlog simply means a subject that hasn't been cleared yet, and by itself it doesn't say much about a student's overall academic standing. What matters more is the fuller picture — how many semesters were completed, which subjects were cleared, which ones are still pending, and how that maps against what the receiving university's program actually requires. Because this combination is different for every student, backlog situations are typically reviewed individually rather than judged by the backlog count alone.",
  },
  {
    subHeading: 'What Academic Records May Be Reviewed',
    subPara:
      "When a university looks at a student's academic background for credit transfer, the records that are typically considered can include the semester-wise mark sheets or transcripts, the list of subjects completed and subjects still pending, the syllabus followed in the previous course, and the total credits earned so far. Reviewing these together gives a university a clearer sense of a student's actual academic position than looking at backlogs in isolation.",
  },
  {
    subHeading: 'How Completed Subjects and Pending Subjects Can Affect Evaluation',
    subPara:
      "Completed subjects are generally checked for how closely they match the receiving program's own syllabus — this is often referred to as subject or credit equivalence. Pending subjects, meanwhile, are usually looked at separately: a university may want to understand which subjects remain, whether they can be completed alongside the new program, or whether they need to be cleared first. How this is handled can vary from one university to another, and can also depend on the specific subjects involved rather than the number of backlogs alone.",
  },
  {
    subHeading: 'Why There Is No Universal Backlog Rule',
    subPara:
      "There isn't one fixed number of backlogs that applies as a rule across every university or program, and treating any such number as universal would be misleading. What a university decides to do in one case doesn't necessarily apply the same way to another student, another program, or another year. This is exactly why academic evaluation exists — to look at each student's actual record instead of applying a blanket rule to everyone.",
  },
  {
    subHeading: 'What Students Should Prepare Before Requesting an Evaluation',
    subPara:
      "Having the following ready generally makes an academic evaluation smoother:\n\n" +
      "- Semester-wise mark sheets and transcripts\n" +
      "- A clear list of subjects completed and subjects still pending\n" +
      "- Details of the syllabus or course structure previously followed\n" +
      "- Any transfer or migration-related documents already available\n" +
      "- Basic details of the program you'd like to continue into",
  },
  {
    subHeading: 'Common Misunderstandings About Backlogs and Credit Transfer',
    subPara:
      "A few assumptions come up often and are worth addressing directly. Having backlogs does not automatically mean credit transfer isn't possible — but it also doesn't mean every backlog will simply be carried forward or cleared without review. Similarly, a low number of backlogs doesn't guarantee an outcome, just as a higher number doesn't automatically rule one out. The actual answer depends on an evaluation of the specific academic record, not a fixed number either way.",
  },
  {
    subHeading: 'When to Seek a Personal Academic Evaluation',
    subPara:
      "General information can only go so far, since backlog situations genuinely differ from student to student. If your discontinued B.Tech includes backlogs and you want to understand where you actually stand, students who need an individual academic review can explore our [credit transfer options for dropout and backlog students](/best-b-tech-credit-transfer-services-in-kerala-for-dropout-backlog-students), where your specific records can be looked at directly. You can also read more about [B.Tech credit transfer](/b-tech-credit-transfer) in general to understand how the process works before requesting a personal evaluation.",
  },
  {
    subHeading: 'Conclusion',
    subPara:
      "Backlogs are a normal part of many students' academic journeys, and having them doesn't close the door on credit transfer — but it also isn't something with a single guaranteed outcome. What matters is an honest look at your completed subjects, pending subjects, and academic records, evaluated against the program you want to continue into. Understanding this before you apply can help you set realistic expectations and know what to prepare.",
  },
];

(async () => {
  const created = await prisma.blog.create({
    data: {
      date: new Date(),
      category: 'B.Tech Credit Transfer',
      sectionDis: 'How Are Backlogs Evaluated for B.Tech Credit Transfer?',
      author: null,
      mainImage: null,
      mainDis,
    },
  });
  console.log('Created blog id:', created.id);
  console.log('URL: /blog/' + created.id);
  await prisma.$disconnect();
})();
