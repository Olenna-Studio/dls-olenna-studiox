import type { Metadata } from 'next';
import '@olenna/styles/css';
import { ThemeProvider } from '@olenna/react';

export const metadata: Metadata = {
  title: 'Olenna StudioX — Next.js Consumer',
  description: 'Testing SSR and App Router integration'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
