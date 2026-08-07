import nodemailer from 'nodemailer';

const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'abheeshkumaran7@gmail.com';

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('Email notification skipped: GMAIL_USER / GMAIL_APP_PASSWORD not configured in .env');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

export async function sendLeadNotification(params: {
  type: 'Enquiry' | 'Eligibility Request';
  fields: Record<string, string>;
}) {
  const transporter = getTransporter();
  if (!transporter) return;

  const rows = Object.entries(params.fields)
    .map(([label, value]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#002147;border-bottom:1px solid #eee;">${label}</td><td style="padding:6px 12px;color:#333;border-bottom:1px solid #eee;">${value}</td></tr>`)
    .join('');

  const text = `New ${params.type} received on the Edumentora website:\n\n` +
    Object.entries(params.fields).map(([label, value]) => `${label}: ${value}`).join('\n');

  try {
    await transporter.sendMail({
      from: `Edumentora Website <${process.env.GMAIL_USER}>`,
      to: LEAD_NOTIFICATION_EMAIL,
      subject: `New ${params.type} Lead — Edumentora`,
      text,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
          <div style="background:#002147;color:#fff;padding:16px 20px;border-radius:12px 12px 0 0;font-size:18px;font-weight:700;">
            New ${params.type} Received
          </div>
          <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-top:none;">
            ${rows}
          </table>
          <p style="color:#888;font-size:12px;margin-top:16px;">This is an automated notification from the Edumentora website.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error(`Failed to send ${params.type} email notification:`, error);
  }
}
