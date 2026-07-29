import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eduMentora - Credit Transfer Institution in Kerala',
  description: 'Resume your education with the Best Academic Credit Transfer institution in Kerala.',
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
        <SmoothScroll>
          {children}
          <PopupForm />
        </SmoothScroll>
      </body>
    </html>
  );
}
