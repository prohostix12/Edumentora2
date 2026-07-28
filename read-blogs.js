const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
  const blogs = await prisma.blog.findMany();
  fs.writeFileSync('blogs-output.json', JSON.stringify(blogs, null, 2));
  console.log('Wrote blogs to blogs-output.json');
}

main().catch(console.error).finally(() => prisma.$disconnect());
