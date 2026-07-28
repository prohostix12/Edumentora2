const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.program.findMany().then(p => { 
  console.log(JSON.stringify(p, null, 2)); 
  prisma.$disconnect(); 
});
