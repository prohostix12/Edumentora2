"use server"

import { PrismaClient } from '@prisma/client'
import { sendLeadNotification } from '@/lib/mail'
import { sendLeadToCrm } from '@/lib/crm'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function submitEligibilityRequest(formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = (formData.get('lastName') as string) || null
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const company = (formData.get('company') as string) || null
  const message = formData.get('message') as string
  const source = (formData.get('source') as string) || 'Eligibility Form'

  if (!firstName || !email || !phone || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    await prisma.eligibilityRequest.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        message,
        source,
      },
    })

    const crmLead = {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      source,
    }

    const notifications = await Promise.allSettled([
      sendLeadNotification({
        type: 'Eligibility Request',
        fields: {
          'First Name': firstName,
          'Last Name': lastName || '',
          Email: email,
          Phone: phone,
          Company: company || '',
          Message: message,
          Source: source,
        },
      }),
      sendLeadToCrm(crmLead),
    ])

    notifications
      .filter((result) => result.status === 'rejected')
      .forEach((result) => console.error('Lead notification failed:', result.reason))

    return { success: true }
  } catch (error) {
    console.error('Error submitting eligibility request:', error)
    return { success: false, error: 'Failed to submit eligibility request. Please try again later.' }
  }
}
