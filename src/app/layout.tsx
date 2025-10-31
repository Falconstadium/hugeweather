import SmoothScrolling from '@/components/scroll';
import type { Metadata } from 'next';
import './globals.css';

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
      <body className="antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
