import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelechi - Portfolio",
  description: "Full-stack developer specializing in web and blockchain technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
} 