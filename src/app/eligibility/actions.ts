"use server"

import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function submitEligibilityRequest(formData: FormData) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const place = formData.get('place') as string
  const course = formData.get('course') as string
  const previousUniversity = formData.get('previousUniversity') as string
  const courseCompletedYear = formData.get('courseCompletedYear') as string

  if (!name || !phone || !place || !course || !previousUniversity || !courseCompletedYear) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    await prisma.eligibilityRequest.create({
      data: {
        name,
        contactNumber: phone,
        place,
        course,
        previousUniversity,
        courseCompletedYear,
      },
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting eligibility request:', error)
    return { success: false, error: 'Failed to submit eligibility request. Please try again later.' }
  }
}
