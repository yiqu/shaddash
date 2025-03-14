/* eslint-disable readable-tailwind/multiline */
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { geistFont } from '@/lib/fonts-config';
import theme from '@/components/ui-custom/mui/theme';
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
    { url: '/favicons/boba-favicon.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicons/boba-favicon.png', sizes: '192x192', type: 'image/png' },
    { url: '/favicons/boba-favicon.png', sizes: '512x512', type: 'image/png' },
  ],
  shortcut: [{ url: '/favicons/boba-favicon.png' }],
  apple: [{ url: '/favicons/boba-favicon.png' }],
};

export const metadata: Metadata = {
  title: 'Reminders For KQ',
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
      <body className={ `${geistFont.className} antialiased` }>
        { /* <InitColorSchemeScript attribute="class" /> */ }
        <AppRouterCacheProvider options={ { enableCssLayer: true } }>
          <MuiThemeProvider theme={ theme }>
            <NuqsAdapter>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={ false }
                disableTransitionOnChange
                storageKey="next-theme-mode"
              >
                { /* <CssBaseline /> */ }
                <AppLayout>{ children }</AppLayout>
              </ThemeProvider>
            </NuqsAdapter>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
