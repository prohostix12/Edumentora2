// One-off insertion script for the Step 9 content-authority article:
// "Is B.Tech Credit Transfer Legitimate? Understanding the Recognition Framework"
// Run once with: node scripts/seed-legitimacy-blog.js
// Uses the exact same field shape as src/app/admin/blogs/actions.ts's createBlog().
// No shared renderer changes were needed — this article only uses plain
// paragraphs and bullet lists, both already supported since Step 8.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mainDis = [
  {
    subHeading: '',
    subPara:
      "When students first learn about B.Tech credit transfer, a common question comes up: is this actually legitimate, or is it some kind of loophole to bypass admission requirements? It's a fair question, and one worth asking before making any academic decision. Credit transfer is a real, recognized part of how higher education works in India — but that doesn't mean every claim made about it is accurate, or that outcomes are automatic. This article explains what legitimacy actually depends on, so you can evaluate any credit transfer option — including ours — with the right expectations.",
  },
  {
    subHeading: 'What Does "Legitimate" Mean in Academic Credit Transfer?',
    subPara:
      "Legitimacy in credit transfer isn't something a website or consultancy can simply declare — it comes from the process actually being grounded in real institutional recognition and evaluation, not from a marketing claim. When judging whether a credit transfer option is legitimate, it generally helps to look at things like: whether the receiving institution is a recognized university with an applicable admission and evaluation process, whether that institution has a defined way of assessing previously completed academic work, and whether official admission and academic policies are being followed rather than shortcuts around them. India's University Grants Commission (UGC) has also established a national mechanism — the Academic Bank of Credits (ABC) — intended to support credit recognition and transfer between institutions registered with it. Its existence shows that credit transfer, as a concept, sits within an official regulatory framework rather than outside it. That said, participation and specific processes can vary by institution, so this should not be read as meaning every university or every credit automatically qualifies.",
  },
  {
    subHeading: 'How Academic Credit Evaluation Generally Works',
    subPara:
      "At a general level, when a university considers recognizing a student's previous academic work, it typically reviews things such as the student's academic records and transcripts, the subjects and credits they have already completed, how closely those subjects match the receiving program's own syllabus, and the overall requirements of the program the student wants to join. This evaluation is usually specific to the individual student and the specific university — it is not a single fixed formula that applies identically everywhere. Different institutions can have different processes, timelines, and levels of documentation they require, which is why the same academic background can sometimes lead to different outcomes at different universities.",
  },
  {
    subHeading: 'What Students Should Verify Before Considering Credit Transfer',
    subPara:
      "Before proceeding with any credit transfer option, it's worth verifying the following:\n\n" +
      "- The recognition and official status of the institution you are considering, ideally confirmed directly through that institution's own official website or admissions office\n" +
      "- Whether the specific program you want to join has a defined credit transfer or evaluation process\n" +
      "- Your own academic transcripts and mark sheets, since evaluation depends on accurate previous records\n" +
      "- How that university evaluates subject or credit equivalence, and what happens if some subjects are not considered equivalent\n" +
      "- Whether you can get written or official confirmation of your evaluated status before making financial or academic commitments\n" +
      "- What documents will be required to complete the process\n" +
      "- Whether the receiving institution is actually able to accept a student with your specific academic background",
  },
  {
    subHeading: 'Credit Transfer Is Not the Same as a Guaranteed Shortcut',
    subPara:
      "It's worth being cautious of any claim that presents credit transfer as an automatic or guaranteed outcome — for example, a promise of guaranteed admission, guaranteed backlog clearance, guaranteed credit acceptance, or a guaranteed degree regardless of a student's academic history. Legitimate academic decisions are made by the receiving institution after it evaluates a student's records, not by a third party promising a specific result in advance. If credit transfer is right for a student's situation, it still requires actual evaluation and approval by the relevant university, not simply a claim that it will work out. Understanding this distinction is a useful way to judge whether information you're reading — from any source — is being realistic with you.",
  },
  {
    subHeading: 'Questions Students Should Ask Before Proceeding',
    subPara:
      "Before moving forward, it can help to have clear answers to:\n\n" +
      "- Which institution will actually evaluate my academic record, and is that clear from the start?\n" +
      "- How will my previous coursework and credits be assessed?\n" +
      "- Which documents will I need to provide, and in what format?\n" +
      "- What happens if some of my previously completed subjects are not considered equivalent?\n" +
      "- What official information can I review directly — such as the university's own policies — before making a decision?\n" +
      "- Is there a written or official confirmation I can expect once my academic evaluation is complete?",
  },
  {
    subHeading: 'When to Seek Guidance',
    subPara:
      "Students who discontinued their studies, have backlogs, or have a more complex academic history than a typical straightforward case often find it useful to have their specific records reviewed individually, since general information can only go so far. If you're trying to understand whether [B.Tech credit transfer options](/b-tech-credit-transfer) might be relevant to your own academic background, having your actual transcripts and completed subjects reviewed is generally more useful than relying on assumptions. You're also welcome to [learn more about Edumentora](/about-us) and how we approach this process before deciding whether to proceed.",
  },
  {
    subHeading: 'Conclusion',
    subPara:
      "B.Tech credit transfer is a legitimate, recognized part of how Indian higher education accommodates students who need to continue an interrupted degree — but legitimacy comes from real institutional evaluation, not from any guarantee. Before proceeding with credit transfer through any provider, students should verify the receiving institution's recognition, understand how their specific academic record will be evaluated, and be cautious of any promise that skips this evaluation altogether. Making decisions based on official information and your own academic records — rather than assumptions — is the most reliable way to move forward.",
  },
];

(async () => {
  const created = await prisma.blog.create({
    data: {
      date: new Date(),
      category: 'B.Tech Credit Transfer',
      sectionDis: 'Is B.Tech Credit Transfer Legitimate? Understanding the Recognition Framework',
      author: null,
      mainImage: null,
      mainDis,
    },
  });
  console.log('Created blog id:', created.id);
  console.log('URL: /blog/' + created.id);
  await prisma.$disconnect();
})();
