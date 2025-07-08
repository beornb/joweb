import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

 
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}


export const metadata: Metadata = {
  title: "Jo.",
  description: "Jo-Ann Bishop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
