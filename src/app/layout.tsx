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
  metadataBase: new URL('https://your-portfolio-domain.com'),
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
    url: 'https://your-portfolio-domain.com',
    siteName: "Kelechi's Portfolio",
    images: [
      {
        url: '/profile2.jpg',
        width: 800,
        height: 600,
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
    images: ['/profile2.jpg'],
    creator: '@yourtwitterhandle',
  },
  icons: {
    icon: '/profile2.jpg',
    apple: '/profile2.jpg',
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