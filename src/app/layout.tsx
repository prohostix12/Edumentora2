import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

const montserrat = Montserrat({ subsets: ['latin'] });

const DEFAULT_TITLE = 'eduMentora - Credit Transfer Institution in Kerala';
const DEFAULT_DESCRIPTION = 'Resume your education with the Best Academic Credit Transfer institution in Kerala.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/edumentora_logo.webp'],
  },
  twitter: {
    card: 'summary',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/edumentora_logo.webp'],
  },
};

// Organization schema, built only from facts already published in the
// footer (phone/email/office cities) — no new claims, nothing invented.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Edumentora Services LLP',
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/edumentora_logo.webp`,
  email: 'info@edumentora.com',
  telephone: '+91-9744587777',
  areaServed: ['Calicut', 'Kochi', 'Kerala'],
  sameAs: [
    'https://www.facebook.com/edumentoradotcom/',
    'https://www.instagram.com/edumentora/?hl=en',
    'https://www.linkedin.com/company/edumentora/home/',
  ],
};

import PopupForm from '@/components/PopupForm';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          {children}
          <PopupForm />
        </SmoothScroll>
      </body>
    </html>
  );
}
