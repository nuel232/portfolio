import type { Metadata } from "next";
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "Kelechi - Full Stack Developer",
  description: "Personal portfolio of Kelechi, a full-stack developer specializing in web and blockchain technologies",
  keywords: ["Kelechi", "full-stack developer", "web developer", "blockchain developer", "portfolio", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Kelechi" }],
  creator: "Kelechi",
  publisher: "Kelechi",
  metadataBase: new URL('https://nwankwoala.com.ng'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kelechi - Full Stack Developer",
    description: "Personal portfolio of Kelechi, a full-stack developer specializing in web and blockchain technologies",
    url: 'https://nwankwoala.com.ng',
    siteName: "Kelechi's Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelechi - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kelechi - Full Stack Developer",
    description: "Personal portfolio of Kelechi, a full-stack developer specializing in web and blockchain technologies",
    images: ['/og-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* EmailJS will be initialized in the Contact component directly */}
      </head>
      <body>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
} 