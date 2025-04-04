/* eslint-disable readable-tailwind/multiline */
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { Suspense } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { geistFont } from '@/lib/fonts-config';
import theme from '@/components/ui-custom/mui/theme';
import AppLayout from '@/components/layout/AppLayout';
import CustomToaster from '@/components/toaster/CustomToaster';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import TanstackQueryClientProvider from '@/providers/TanstackQueryClientProvider';

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
    { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    { url: '/favicon.ico', sizes: '192x192', type: 'image/x-icon' },
    { url: '/favicon.ico', sizes: '512x512', type: 'image/x-icon' },
  ],
  shortcut: [{ url: '/favicon.ico' }],
  apple: [{ url: '/favicon.ico' }],
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
        <InitColorSchemeScript defaultMode="light" attribute="data-mui-color-scheme" />
        <AppRouterCacheProvider options={ { enableCssLayer: true } }>
          <MuiThemeProvider theme={ theme } defaultMode="light">
            <NuqsAdapter>
              <TanstackQueryClientProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem={ false }
                  disableTransitionOnChange
                  storageKey="theme"
                >
                  { /* <CssBaseline /> */ }
                  <Suspense>
                    <AppLayout>{ children }</AppLayout>
                  </Suspense>
                  <CustomToaster />
                </ThemeProvider>
              </TanstackQueryClientProvider>
            </NuqsAdapter>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
