'use server';

import { cookies } from 'next/headers';
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const DEFAULT_PASSWORD = 'edumentora123';

function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const hashBuffer = Buffer.from(hash, 'hex');
  const candidateBuffer = scryptSync(password, salt, 64);
  if (hashBuffer.length !== candidateBuffer.length) return false;
  return timingSafeEqual(hashBuffer, candidateBuffer);
}

async function getAdminConfig() {
  const configs = await prisma.adminConfig.findMany({ take: 1 });
  return configs[0] || null;
}

export async function authenticateAdmin(password: string) {
  const config = await getAdminConfig();

  const isValid = config
    ? verifyPassword(password, config.passwordHash)
    : password === DEFAULT_PASSWORD;

  if (isValid) {
    const cookieStore = await cookies();
    cookieStore.set('admin_auth_token', 'authenticated', { secure: true, httpOnly: true, path: '/' });
    return { success: true };
  }
  return { success: false };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth_token');
}

export async function changeAdminPassword(oldPassword: string, newPassword: string) {
  if (!newPassword || newPassword.length < 6) {
    return { success: false, error: 'New password must be at least 6 characters.' };
  }

  const config = await getAdminConfig();

  const oldPasswordValid = config
    ? verifyPassword(oldPassword, config.passwordHash)
    : oldPassword === DEFAULT_PASSWORD;

  if (!oldPasswordValid) {
    return { success: false, error: 'Current password is incorrect.' };
  }

  const passwordHash = hashPassword(newPassword);

  if (config) {
    await prisma.adminConfig.update({ where: { id: config.id }, data: { passwordHash } });
  } else {
    await prisma.adminConfig.create({ data: { passwordHash } });
  }

  return { success: true };
}
