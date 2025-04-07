/* eslint-disable readable-tailwind/multiline */
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { Suspense } from 'react';
import NextTopLoader from 'nextjs-toploader';
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


export const metadata: Metadata = {
  title: 'BOBA SHOP',
  description: '',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ `${geistFont.className} antialiased` }>
        <NextTopLoader showSpinner={ false } color={ '#4cae3b' } />
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
