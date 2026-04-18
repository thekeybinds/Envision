import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from 'react';
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Envision - Organic Content Machine",
  description: "Helping you grow with engaging organic content that brings in quality leads. Envision helps you generate over 1M+ organic views in just 3 months.",
  openGraph: {
    title: "Envision - Organic Content Machine",
    description: "Helping you grow with engaging organic content that brings in quality leads. Envision helps you generate over 1M+ organic views in just 3 months.",
    images: ["/logo.jpg"],
    url: "https://envisionmedia.in/",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Envision - Organic Content Machine",
    description: "Helping you grow with engaging organic content that brings in quality leads. Envision helps you generate over 1M+ organic views in just 3 months.",
    images: ["/logo.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        {/* Calendly Widget Script */}
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </body>
    </html>
  );
}
