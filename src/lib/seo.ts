import type { Metadata } from 'next';

export const SITE_NAME = 'eduMentora';
export const SITE_URL = 'https://edumentora.com';
const DEFAULT_OG_IMAGE = '/edumentora_logo.webp';

// Shared per-page metadata builder: keeps the OpenGraph/Twitter image and
// site name consistent everywhere (Next replaces the whole openGraph/twitter
// object per route rather than deep-merging it with the root layout's), so
// every page only has to supply what's actually unique to it.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// Mirrors the Q&A pairs already rendered on the page as structured data, so
// answer engines get the exact question/answer text as data rather than
// having to infer it from HTML layout.
export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  if (faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// BlogPosting structured data — built from fields already stored on the
// Blog model (date/updatedAt), so answer engines can judge freshness and
// attribute the post correctly without any new content being written.
export function articleJsonLd({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified,
  path,
}: {
  headline: string;
  description: string;
  image?: string | null;
  author?: string | null;
  datePublished: Date;
  dateModified: Date;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    ...(image ? { image: [image] } : {}),
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author: author
      ? { '@type': 'Person', name: author }
      : { '@type': 'Organization', name: 'Edumentora Services LLP' },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/edumentora_logo.webp` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
  };
}

// AggregateRating (+ individual Review entries) for the homepage, built from
// the same review records already server-fetched there for the testimonial
// carousel — no new claims, just a structured mirror of what's already
// visible on the page. Individual reviews give a generative engine actual
// quotable, attributed testimonial text rather than just a bare number.
export function aggregateRatingJsonLd(
  reviews: { rating: number; username?: string; comment?: string; postedDate?: Date | string }[]
) {
  if (reviews.length === 0) return null;

  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Edumentora Services LLP',
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: average.toFixed(1),
      reviewCount: reviews.length,
    },
    // Capped to keep the payload reasonable — the aggregate above already
    // covers the full set; these are illustrative quotable examples.
    review: reviews.slice(0, 20).map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: r.rating },
      author: { '@type': 'Person', name: r.username || 'Student' },
      ...(r.comment ? { reviewBody: r.comment } : {}),
      ...(r.postedDate ? { datePublished: new Date(r.postedDate).toISOString() } : {}),
    })),
  };
}

// Course structured data for a university's programs, built directly from
// the UniversityProgram fields already rendered on the page (name,
// description, duration, fee) — no new facts, just a structured mirror.
export function courseJsonLd(
  university: { name: string },
  programs: {
    programName: string | null;
    courseDescription: string | null;
    courseDuration: string | null;
    feeStructure: string | null;
  }[]
) {
  return programs
    .filter((p) => p.programName)
    .map((p) => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: p.programName,
      description: p.courseDescription || `${p.programName} offered at ${university.name}`,
      provider: {
        '@type': 'EducationalOrganization',
        name: university.name,
      },
      ...(p.courseDuration ? { timeRequired: p.courseDuration } : {}),
      ...(p.feeStructure
        ? {
            offers: {
              '@type': 'Offer',
              category: 'Tuition',
              price: p.feeStructure,
              priceCurrency: 'INR',
            },
          }
        : {}),
    }));
}

// BreadcrumbList for a detail page one level under a hub page (e.g. a blog
// post under /blog, a university under /universities).
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
