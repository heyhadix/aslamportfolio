import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: {
    default: 'Aslam Sharif Mohammed | Salesforce Technical Architect | Dallas, TX',
    template: '%s | Aslam Sharif Mohammed',
  },
  description: 'Aslam Sharif Mohammed, a Salesforce Technical Architect and Agentforce Specialist with 8+ years of experience. Specializing in platform architecture, AI solutions, and full-stack development. H-1B Ready (Oct 2026). Based in Dallas, Texas.',
  keywords: [
    'Salesforce Technical Architect',
    'Agentforce Specialist',
    'Full-Stack Developer',
    'Apex Developer',
    'LWC',
    'Lightning Web Components',
    'OmniStudio',
    'Laravel',
    'Vue.js',
    'Salesforce AI',
    'Einstein GPT',
    'H-1B',
    'Dallas',
    'Texas',
    'Salesforce Consultant',
    'Platform Developer',
  ],
  authors: [{ name: 'Aslam Sharif Mohammed', url: 'https://aslam.in' }],
  creator: 'Aslam Sharif Mohammed',
  publisher: 'Aslam Sharif Mohammed',
  metadataBase: new URL('https://aslam.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aslam.in',
    siteName: 'Aslam Sharif Mohammed Portfolio',
    title: 'Aslam Sharif Mohammed | Salesforce Technical Architect | Dallas, TX',
    description: 'Salesforce Technical Architect and Agentforce Specialist with 8+ years of experience. Specializing in platform architecture, AI solutions, and full-stack development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aslam Sharif Mohammed - Salesforce Technical Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aslam Sharif Mohammed | Salesforce Technical Architect',
    description: 'Salesforce Technical Architect and Agentforce Specialist with 8+ years of experience. H-1B Ready (Oct 2026).',
    images: ['/og-image.jpg'],
    creator: '@aslamkemu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-copy font-sans" suppressHydrationWarning>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
