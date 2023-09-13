import './globals.linaria.global';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Mentoring Campaign Style Guide',
  description: 'Style guide for the Mentoring Campaign',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
