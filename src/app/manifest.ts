import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Edumentora Services LLP',
    short_name: 'eduMentora',
    description: 'Resume your education with the Best Academic Credit Transfer institution in Kerala.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#002147',
    icons: [
      {
        src: '/icon.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  };
}
