'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createContact(formData: FormData) {
  const department = formData.get('department') as string;
  const lanphone = formData.get('lanphone') as string;
  const mob = formData.get('mob') as string;
  const email = formData.get('email') as string;

  if (!department || !lanphone || !mob || !email) return;

  await prisma.contact.create({
    data: {
      department,
      lanphone,
      mob,
      email,
    },
  });

  revalidatePath('/admin/contacts');
}

export async function updateContact(id: string, formData: FormData) {
  const department = formData.get('department') as string;
  const lanphone = formData.get('lanphone') as string;
  const mob = formData.get('mob') as string;
  const email = formData.get('email') as string;

  if (!department || !lanphone || !mob || !email) return;

  await prisma.contact.update({
    where: { id },
    data: {
      department,
      lanphone,
      mob,
      email,
    },
  });

  revalidatePath('/admin/contacts');
}

export async function deleteContact(id: string) {
  await prisma.contact.delete({
    where: { id },
  });

  revalidatePath('/admin/contacts');
}
