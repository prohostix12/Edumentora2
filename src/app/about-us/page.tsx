import { getPublicFaqs } from '@/app/admin/faq/actions';
import { pageMetadata, faqPageJsonLd } from '@/lib/seo';
import AboutUsClient from './AboutUsClient';

export const metadata = pageMetadata({
  title: 'About Us',
  description: 'Edumentora makes restarting your education easy by transferring past credits to accredited universities, saving you time and money.',
  path: '/about-us',
});

export default async function AboutUsPage() {
  const faqs = await getPublicFaqs('ABOUT');
  const jsonLd = faqPageJsonLd(faqs);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <AboutUsClient faqs={faqs} />
    </>
  );
}
