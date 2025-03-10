import { geistFont } from '@/lib/fonts-config';
import AppLayout from '@/components/layout/AppLayout';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

import type { Metadata } from 'next';

import './globals.css';
import './tailwind-config.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Favicon configuration
export const favicons = {
  icon: [
    { url: '/images/todo.png', sizes: '32x32', type: 'image/png' },
    { url: '/images/todo.png', sizes: '192x192', type: 'image/png' },
    { url: '/images/todo.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: [{ url: '/images/todo.png' }],
  apple: [{ url: '/images/todo.png' }],
};

export const metadata: Metadata = {
  title: 'KQ App',
  description: '',
  icons: favicons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ `
        ${geistFont.className}
        antialiased
      ` }>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={ false } disableTransitionOnChange>
          <AppLayout>{ children }</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
