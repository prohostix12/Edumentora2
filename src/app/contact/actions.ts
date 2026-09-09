"use server"

import { PrismaClient } from '@prisma/client'
import { sendLeadNotification } from '@/lib/mail'
import { sendLeadToCrm } from '@/lib/crm'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export async function submitEnquiry(formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = (formData.get('lastName') as string) || null
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const company = (formData.get('company') as string) || null
  const message = formData.get('message') as string
  const source = (formData.get('source') as string) || 'Website Enquiry Form'

  if (!firstName || !phone || !email || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  try {
    await prisma.enquiryList.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
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
        type: 'Enquiry',
        fields: {
          'First Name': firstName,
          'Last Name': lastName || '',
          Phone: phone,
          Email: email,
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
    console.error('Error submitting enquiry:', error)
    return { success: false, error: 'Failed to submit enquiry. Please try again later.' }
  }
}
