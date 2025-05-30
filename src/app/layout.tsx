import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swiggy Clone - Order Food & Groceries',
  description: 'A responsive clone of Swiggy.com built with Next.js, React, TypeScript, and Reactstrap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
