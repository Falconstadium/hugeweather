import SmoothScrolling from '@/components/scroll';
import type { Metadata } from 'next';
import { DM_Sans, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Huge Weather',
  description: 'travel company, that targets women',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${montserrat.variable} antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
