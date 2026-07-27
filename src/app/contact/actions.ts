"use server"

import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function submitEnquiry(formData: FormData) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !phone || !email || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    await prisma.enquiryList.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    return { success: false, error: 'Failed to submit enquiry. Please try again later.' }
  }
}
