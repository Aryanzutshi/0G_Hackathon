import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const switzerFonts = localFont({
  src: [
    {
      path: "../fonts/Switzer-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-switzer", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoN-Zero",
  description: "Create, Test, Break your zero-knowledge code with NoN-Zero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${switzerFonts.variable}  
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col font-[var(--font-switzer)]">
        {children}
      </body>
    </html>
  );
}