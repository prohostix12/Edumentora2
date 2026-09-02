import { getPublicFaqs } from '@/app/admin/faq/actions';
import { pageMetadata, faqPageJsonLd } from '@/lib/seo';
import BTechCreditTransferClient from './BTechCreditTransferClient';

export const metadata = pageMetadata({
  title: 'B.Tech Credit Transfer in Kerala',
  description: "Don't let an incomplete B.Tech stop you from achieving your dreams — with Edumentora's B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future.",
  path: '/b-tech-credit-transfer',
});

export default async function BTechCreditTransferPage() {
  const faqs = await getPublicFaqs('BTECH');
  const jsonLd = faqPageJsonLd(faqs);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BTechCreditTransferClient faqs={faqs} />
    </>
  );
}
