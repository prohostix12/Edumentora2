type LeadInput = {
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
  enquiryDetails?: string | null;
  msg?: string | null;
  comments?: string | null;
  notes?: string | null;
  payload_message?: string | null;
  source?: string | null;
};

export type CrmLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
  sourceDetails?: {
    originalSource: string;
  };
};

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts.shift() || '',
    lastName: parts.join(' '),
  };
}

export function toCrmLead(input: LeadInput): CrmLead {
  const fallbackName = splitName(input.name || '');
  const originalSource = (input.source || 'website').trim();
  const sourceIsWebsite = /web|form/i.test(originalSource);
  const message = input.message || input.enquiryDetails || input.msg || input.comments || input.notes || input.payload_message || '';
  const digits = (input.phone || '').replace(/\D/g, '');
  const phone = digits.length > 10 ? digits.slice(-10) : digits;

  return {
    firstName: (input.firstName || fallbackName.firstName).trim(),
    lastName: (input.lastName || fallbackName.lastName).trim(),
    email: (input.email || '').trim(),
    phone,
    company: (input.company || '').trim(),
    message: message.trim(),
    source: sourceIsWebsite ? 'website' : 'api',
    ...(sourceIsWebsite ? {} : { sourceDetails: { originalSource } }),
  };
}

export async function sendLeadToCrm(input: LeadInput) {
  const endpoint = process.env.CRM_LEAD_URL;
  if (!endpoint) return;

  const lead = toCrmLead(input);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.CRM_API_KEY ? { Authorization: `Bearer ${process.env.CRM_API_KEY}` } : {}),
    },
    body: JSON.stringify(lead),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`CRM lead request failed with status ${response.status}`);
  }
}