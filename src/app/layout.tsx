import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/utils/ScrollToTop';

const geist = Geist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DIGISCALE AI 3.0 | Enterprise Multi-Agent Automation',
  description: 'Build, connect, deploy, and monitor intelligent agents from one platform. Production-grade infrastructure for teams shipping AI into the real world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geist.variable} ${inter.variable}`}>
      <body className={`${geist.className} font-sans bg-white text-neutral-900 antialiased selection:bg-neutral-200 selection:text-neutral-900`}>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
