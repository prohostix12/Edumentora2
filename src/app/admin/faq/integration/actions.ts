'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export async function saveCrmConfig(formData: FormData) {
  const cookieStore = await cookies();
  if (cookieStore.get('admin_auth_token')?.value !== 'authenticated') {
    throw new Error('Unauthorized');
  }

  const apiKey = String(formData.get('crmApiKey') || '').trim();
  const endpointUrl = String(formData.get('crmEndpointUrl') || '').trim();

  if (!apiKey || !endpointUrl) {
    throw new Error('CRM API key and endpoint URL are required.');
  }

  const config = await prisma.crmConfig.findFirst();
  if (config) {
    await prisma.crmConfig.update({
      where: { id: config.id },
      data: { apiKey, endpointUrl },
    });
  } else {
    await prisma.crmConfig.create({ data: { apiKey, endpointUrl } });
  }

  redirect('/admin/faq/integration?saved=1');
}