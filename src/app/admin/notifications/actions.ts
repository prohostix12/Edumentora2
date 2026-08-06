'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type NotificationStatus = 'SHOW' | 'HIDE';

function revalidateAll() {
  revalidatePath('/admin/notifications');
  revalidatePath('/');
}

export async function createNotification(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text || !text.trim()) return;

  await prisma.notification.create({
    data: { text: text.trim(), status: 'SHOW' },
  });

  revalidateAll();
}

export async function updateNotification(id: string, formData: FormData) {
  const text = formData.get('text') as string;
  if (!text || !text.trim()) return;

  await prisma.notification.update({
    where: { id },
    data: { text: text.trim() },
  });

  revalidateAll();
}

export async function setNotificationStatus(id: string, status: NotificationStatus) {
  await prisma.notification.update({
    where: { id },
    data: { status },
  });

  revalidateAll();
}

export async function deleteNotification(id: string) {
  await prisma.notification.delete({ where: { id } });
  revalidateAll();
}

// Used by the home page (client component) to fetch visible notifications live.
export async function getPublicNotifications() {
  const notifications = await prisma.notification.findMany({
    where: { status: 'SHOW' },
    orderBy: { createdAt: 'asc' },
  });
  return notifications.map((n) => n.text);
}
