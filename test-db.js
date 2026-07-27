const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Attempt to connect to the database
    await prisma.$connect();
    console.log("connected database successful");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
