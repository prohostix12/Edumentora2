const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.enquiryList.create({
      data: {
        name: "Test",
        phone: "12345",
        email: "test@test.com",
        message: "Test message",
      },
    });
    console.log("Insert successful:", result);
  } catch (error) {
    console.error("Failed to insert:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
