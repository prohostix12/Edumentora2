'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function createUniversity(formData: FormData) {
  const name = formData.get('name') as string;
  const location = formData.get('location') as string;
  const description = formData.get('description') as string;
  const mainImage = formData.get('mainImage') as string | null;
  const certs = formData.getAll('certificates') as string[];
  const validCerts = certs.filter(c => c.trim() !== '');
  
  const visionHeading = formData.get('visionHeading') as string | null;
  const visionPara = formData.get('visionPara') as string | null;
  const facilitiesHeading = formData.get('facilitiesHeading') as string | null;
  const facilitiesPara = formData.get('facilitiesPara') as string | null;
  const featuresHeading = formData.get('featuresHeading') as string | null;
  const featuresPara = formData.get('featuresPara') as string | null;
  const whyChooseHeading = formData.get('whyChooseHeading') as string | null;
  const whyChoosePara = formData.get('whyChoosePara') as string | null;
  const btechProgramsHeading = formData.get('btechProgramsHeading') as string | null;
  const btechProgramsPara = formData.get('btechProgramsPara') as string | null;

  if (!name || !location || !description) return;
  
  await prisma.university.create({
    data: {
      name,
      location,
      description,
      mainImage,
      certificates: validCerts,
      visionHeading,
      visionPara,
      facilitiesHeading,
      facilitiesPara,
      featuresHeading,
      featuresPara,
      whyChooseHeading,
      whyChoosePara,
      btechProgramsHeading,
      btechProgramsPara,
    },
  });
  
  revalidatePath('/admin/university');
}

export async function updateUniversity(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const location = formData.get('location') as string;
  const description = formData.get('description') as string;
  const mainImage = formData.get('mainImage') as string | null;
  const certs = formData.getAll('certificates') as string[];
  const validCerts = certs.filter(c => c.trim() !== '');
  
  const visionHeading = formData.get('visionHeading') as string | null;
  const visionPara = formData.get('visionPara') as string | null;
  const facilitiesHeading = formData.get('facilitiesHeading') as string | null;
  const facilitiesPara = formData.get('facilitiesPara') as string | null;
  const featuresHeading = formData.get('featuresHeading') as string | null;
  const featuresPara = formData.get('featuresPara') as string | null;
  const whyChooseHeading = formData.get('whyChooseHeading') as string | null;
  const whyChoosePara = formData.get('whyChoosePara') as string | null;
  const btechProgramsHeading = formData.get('btechProgramsHeading') as string | null;
  const btechProgramsPara = formData.get('btechProgramsPara') as string | null;

  if (!name || !location || !description) return;

  const data: any = {
    name,
    location,
    description,
    certificates: validCerts,
    visionHeading,
    visionPara,
    facilitiesHeading,
    facilitiesPara,
    featuresHeading,
    featuresPara,
    whyChooseHeading,
    whyChoosePara,
    btechProgramsHeading,
    btechProgramsPara,
  };

  // Only update image if a new base64 string is provided
  if (mainImage && mainImage.startsWith('data:image')) {
    data.mainImage = mainImage;
  }

  await prisma.university.update({
    where: { id },
    data,
  });
  
  revalidatePath('/admin/university');
}

export async function deleteUniversity(id: string) {
  await prisma.university.delete({
    where: { id },
  });
  
  revalidatePath('/admin/university');
}

export async function addCertificates(id: string, base64Images: string[]) {
  if (!id || !base64Images || base64Images.length === 0) return;

  await prisma.university.update({
    where: { id },
    data: {
      certificates: {
        push: base64Images,
      },
    },
  });

  revalidatePath('/admin/university');
}

export async function removeCertificate(id: string, urlToRemove: string, currentCertificates: string[]) {
  const updatedCertificates = currentCertificates.filter(url => url !== urlToRemove);

  await prisma.university.update({
    where: { id },
    data: {
      certificates: {
        set: updatedCertificates,
      },
    },
  });

  revalidatePath('/admin/university');
}
