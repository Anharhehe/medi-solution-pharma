import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Medi Solution Pharma - Your Healthcare Solution',
  description: 'Medi Solution Pharma provides quality pharmaceutical products and healthcare solutions. Trusted healthcare partner for all your medical needs.',
  
  // Open Graph metadata (for Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: 'Medi Solution Pharma - Your Healthcare Solution',
    description: 'Medi Solution Pharma provides quality pharmaceutical products and healthcare solutions. Trusted healthcare partner for all your medical needs.',
    url: 'https://medisolutionpharma.com',
    siteName: 'Medi Solution Pharma',
    images: [
      {
        url: '/logo.png', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Medi Solution Pharma Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Medi Solution Pharma - Your Healthcare Solution',
    description: 'Medi Solution Pharma provides quality pharmaceutical products and healthcare solutions. Trusted healthcare partner for all your medical needs.',
    images: ['https://medisolutionpharma.com/images/logo-social.jpg'], // Replace with your actual image URL
  },
  
  // Additional metadata
  keywords: ['pharmaceutical', 'healthcare', 'medicine', 'medi solution', 'pharma', 'medical supplies'],
  authors: [{ name: 'Anhar Munir' }],
  creator: 'Anhar Munir',
  publisher: 'Medi Solution Pharma',
  
  // Robots and canonical
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
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Verification (add if you have these)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Main content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer - Always at bottom */}
        <Footer />
      </body>
    </html>
  );
}