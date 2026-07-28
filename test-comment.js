const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const blog = await prisma.blog.findFirst();
    if (!blog) {
      console.log('No blog found!');
      return;
    }

    const comment = await prisma.comment.create({
      data: {
        name: "Test User",
        email: "test@example.com",
        content: "This is a test comment!",
        blogId: blog.id,
      },
    });
    console.log('Created comment successfully:', comment.id);
  } catch (error) {
    console.error('Error creating comment:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
