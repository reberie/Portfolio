import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Background from '@/components/Background';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollReveal from '@/components/ScrollReveal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE = 'https://buiantosodnomov.com';
const DESCRIPTION =
  'Software developer based in Toronto. Portfolio of mobile apps, full-stack projects, and enterprise experience — from first sketch to production.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Buianto Sodnomov — Software Developer in Toronto',
    template: '%s — Buianto Sodnomov',
  },
  description: DESCRIPTION,
  authors: [{ name: 'Buianto Sodnomov' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Buianto Sodnomov',
    locale: 'en_CA',
    title: 'Buianto Sodnomov — Software Developer in Toronto',
    description:
      'Software developer based in Toronto. Portfolio of mobile apps, full-stack projects, and enterprise experience.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buianto Sodnomov — I build things that ship.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buianto Sodnomov — Software Developer in Toronto',
    description:
      'Software developer based in Toronto. Portfolio of mobile apps, full-stack projects, and enterprise experience.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0e0e0e',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {/* Reveal scroll-in content for users without JS (the .visible class never gets added). */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<style>.fade-in,.stagger>*{opacity:1!important;transform:none!important}</style>',
          }}
        />
        <Background />
        {/* Fixed scrim that calms the particle field so text stays legible
            everywhere — replaces the per-section background bands. */}
        <div className="bg-scrim" aria-hidden />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
        <ScrollReveal />
      </body>
    </html>
  );
}
