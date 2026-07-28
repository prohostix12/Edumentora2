const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const blog = await prisma.blog.create({
      data: {
        date: new Date(),
        category: "Test",
        sectionDis: "Test",
        mainImage: null,
        mainDis: [{ subHeading: "", subPara: "Test para" }],
      },
    });
    console.log('Created blog successfully:', blog.id);
  } catch (error) {
    console.error('Error creating blog:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
